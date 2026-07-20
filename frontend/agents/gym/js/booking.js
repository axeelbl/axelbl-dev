document.addEventListener("DOMContentLoaded", () => {
    const reserveBtn = document.getElementById("reserveBtn");
    const bookingModal = document.getElementById("bookingModal");
    const closeBookingBtn = document.getElementById("closeModal");
    const bookingForm = document.getElementById("bookingForm");
    const dateInput = bookingForm.querySelector("input[name='date']");
    const timeSelect = document.getElementById("timeSelect");

    const manageModal = document.getElementById("manageBookingModal");
    const closeManageBtn = document.getElementById("closeManageModal");
    const manageForm = document.getElementById("manageBookingForm");
    const manageDateInput = manageForm.querySelector("input[name='new_date']");
    const manageTimeSelect = document.getElementById("manageTimeSelect");
    const modifyBtn = document.getElementById("modifyBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const manageBtn = document.getElementById("manageBtn");

    async function loadAvailableHours(date, selectElement) {
        if (!date) {
            selectElement.innerHTML = "<option value=''>Selecciona una hora</option>";
            selectElement.value = "";
            return;
        }

        selectElement.innerHTML = "<option>Cargando horarios...</option>";
        selectElement.value = "";

        try {
            const response = await fetch(`/booking/availability?date=${date}&_=${Date.now()}`, {
                cache: "no-store",
            });
            const hours = await response.json();

            selectElement.innerHTML = "";
            if (!hours.length) {
                selectElement.innerHTML = "<option value=''>No hay horarios disponibles</option>";
                return;
            }

            const placeholder = document.createElement("option");
            placeholder.value = "";
            placeholder.textContent = "Selecciona una hora";
            placeholder.disabled = true;
            placeholder.selected = true;
            selectElement.appendChild(placeholder);

            hours.forEach(hour => {
                const option = document.createElement("option");
                option.value = hour;
                option.textContent = hour;
                selectElement.appendChild(option);
            });
        } catch {
            selectElement.innerHTML = "<option value=''>Error cargando horarios</option>";
        }
    }

    function focusFirstField(modal) {
        const firstField = modal.querySelector("input, select, button");
        if (!firstField) return;

        setTimeout(() => {
            firstField.focus();
        }, 30);
    }

    function openModal(modal) {
        modal.classList.remove("hidden");
        document.body.classList.add("modal-open");
        focusFirstField(modal);
    }

    function closeModal(modal) {
        modal.classList.add("hidden");
        if (bookingModal.classList.contains("hidden") && manageModal.classList.contains("hidden")) {
            document.body.classList.remove("modal-open");
        }
    }

    async function addAssistantMessage(message) {
        if (!window.chatUI || !window.chatUI.addBotMessageTyping) return;
        await window.chatUI.addBotMessageTyping(message);
        window.chatController?.registerAssistantMessage(message);
    }

    function openBookingFlow(event) {
        event.preventDefault();
        openModal(bookingModal);
        timeSelect.innerHTML = "<option value=''>Selecciona una hora</option>";
        timeSelect.value = "";
        if (dateInput.value) loadAvailableHours(dateInput.value, timeSelect);
    }

    function openManageFlow(event) {
        event.preventDefault();
        openModal(manageModal);
        manageForm.reset();
        manageTimeSelect.innerHTML = "<option value=''>Selecciona una hora</option>";
    }

    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;
        if (!bookingModal.classList.contains("hidden")) closeModal(bookingModal);
        if (!manageModal.classList.contains("hidden")) closeModal(manageModal);
    });

    [bookingModal, manageModal].forEach(modal => {
        modal.addEventListener("click", event => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    if (reserveBtn && bookingModal && bookingForm && dateInput && timeSelect) {
        reserveBtn.addEventListener("click", openBookingFlow);

        document.querySelectorAll("[data-open-modal='booking']").forEach(button => {
            button.addEventListener("click", openBookingFlow);
        });

        closeBookingBtn.addEventListener("click", () => closeModal(bookingModal));

        dateInput.addEventListener("change", () => loadAvailableHours(dateInput.value, timeSelect));
        dateInput.min = new Date().toISOString().split("T")[0];

        bookingForm.addEventListener("submit", async event => {
            event.preventDefault();
            const data = Object.fromEntries(new FormData(bookingForm));

            try {
                const response = await fetch("/booking/reserve", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
                const payload = await response.json();

                if (!response.ok) {
                    throw new Error(payload.detail || "No se pudo reservar");
                }

                alert("Sesion reservada correctamente");

                const bookingId = payload.booking_uuid || "Pendiente";
                const message =
                    "Sesion reservada con exito.\n\n" +
                    `Alumno: ${data.name}\n` +
                    `Tipo: ${data.service}\n` +
                    `Fecha: ${data.date}\n` +
                    `Hora: ${data.time}\n` +
                    `Contacto: ${data.contact}\n` +
                    `ID de reserva: ${bookingId}`;

                await addAssistantMessage(message);

                closeModal(bookingModal);
                bookingForm.reset();
                timeSelect.innerHTML = "<option value=''>Selecciona una hora</option>";
                timeSelect.value = "";
            } catch (error) {
                alert(error.message || "Ese horario ya no esta disponible");
            }
        });
    }

    if (manageModal && manageForm && manageBtn && manageDateInput && manageTimeSelect) {
        manageBtn.addEventListener("click", openManageFlow);

        document.querySelectorAll("[data-open-modal='manage']").forEach(button => {
            button.addEventListener("click", openManageFlow);
        });

        closeManageBtn.addEventListener("click", () => closeModal(manageModal));

        manageDateInput.addEventListener("change", () => {
            loadAvailableHours(manageDateInput.value, manageTimeSelect);
        });

        manageDateInput.min = new Date().toISOString().split("T")[0];

        modifyBtn.addEventListener("click", async event => {
            event.preventDefault();

            const data = {
                booking_uuid: manageForm.booking_uuid.value,
                contact: manageForm.contact.value,
                new_date: manageForm.new_date.value,
                new_time: manageForm.new_time.value,
            };

            if (!data.booking_uuid || !data.contact) {
                alert("Introduce el ID y el contacto de la reserva");
                return;
            }

            if (!data.new_date && !data.new_time) {
                alert("Indica una nueva fecha o una nueva hora");
                return;
            }

            try {
                const response = await fetch("/booking/modify", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
                const payload = await response.json();

                if (response.status === 404) {
                    alert("No se ha encontrado la reserva");
                    return;
                }

                if (!response.ok) {
                    throw new Error(payload.detail || "No se pudo modificar la reserva");
                }

                alert("Reserva modificada correctamente");

                const message =
                    "Reserva actualizada correctamente.\n\n" +
                    `ID: ${data.booking_uuid}\n` +
                    `Nueva fecha: ${data.new_date || "Sin cambios"}\n` +
                    `Nueva hora: ${data.new_time || "Sin cambios"}`;

                await addAssistantMessage(message);
                closeModal(manageModal);
                manageForm.reset();
            } catch (error) {
                alert(error.message || "Error al modificar la reserva");
            }
        });

        cancelBtn.addEventListener("click", async () => {
            const booking_uuid = manageForm.booking_uuid.value;
            const contact = manageForm.contact.value;

            if (!contact) {
                alert("Introduce el contacto asociado a la reserva");
                return;
            }

            if (!booking_uuid) {
                alert("Introduce el ID de reserva");
                return;
            }

            if (!confirm("Seguro que quieres cancelar la reserva?")) return;

            try {
                const response = await fetch("/booking/cancel", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ booking_uuid, contact }),
                });
                const payload = await response.json();

                if (response.status === 404) {
                    alert("No se ha encontrado la reserva");
                    return;
                }

                if (!response.ok) {
                    throw new Error(payload.detail || "No se pudo cancelar la reserva");
                }

                alert("Reserva cancelada correctamente");

                const message =
                    "Reserva cancelada.\n\n" +
                    `ID: ${booking_uuid}\n` +
                    "Tu sesion se ha anulado correctamente.";

                await addAssistantMessage(message);
                closeModal(manageModal);
                manageForm.reset();
            } catch (error) {
                alert(error.message || "Error al cancelar la reserva");
            }
        });
    }
});
