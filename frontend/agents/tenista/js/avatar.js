export class AvatarController {
    constructor(baseFace, mouthOpenImg, avatarHalo, avatar, avatarStatus) {
        this.baseFace = baseFace;
        this.mouthOpenImg = mouthOpenImg;
        this.avatarHalo = avatarHalo;
        this.avatar = avatar;
        this.avatarStatus = avatarStatus;

        this.mouthOpen = false;
        this.talkingInterval = null;

        this.startBlinking();
    }

    startBlinking() {
        if (!this.baseFace) return;
        setInterval(() => {
            if (this.talkingInterval) return;

            this.baseFace.src = "/agents/tenista/pictures/eyes_closed_mouth_closed.png";

            setTimeout(() => {
                this.baseFace.src = "/agents/tenista/pictures/eyes_open_mouth_closed.png";
            }, 200);
        }, 4000);
    }

    startTalking() {
        if (this.talkingInterval) return;

        if (this.avatarHalo) this.avatarHalo.style.opacity = "1";
        if (this.avatar) this.avatar.style.transform = "scale(1.03)";

        this.talkingInterval = setInterval(() => {
            this.mouthOpen = !this.mouthOpen;
            if (this.mouthOpenImg) this.mouthOpenImg.style.opacity = this.mouthOpen ? "1" : "0";
        }, 300);

        if (this.avatarStatus) this.avatarStatus.textContent = "Analizando tenis";
    }

    stopTalking() {
        clearInterval(this.talkingInterval);
        this.talkingInterval = null;
        this.mouthOpen = false;
        if (this.mouthOpenImg) this.mouthOpenImg.style.opacity = "0";
        if (this.avatarHalo) this.avatarHalo.style.opacity = "0";
        if (this.avatar) this.avatar.style.transform = "scale(1)";
        if (this.avatarStatus) this.avatarStatus.textContent = "Tenis listo";
    }
}
