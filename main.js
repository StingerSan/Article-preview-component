const shareBtn = document.querySelector("button")
const mediaBar = document.querySelector(".avatar-wrap")
const avatar = document.querySelector(".avatar")
const txtContainer = document.querySelector(".text-container")
const socialMedia = document.querySelector(".social-media")

shareBtn.addEventListener("click", () => {
    mediaBar.classList.toggle("active")
    avatar.classList.toggle("active")
    txtContainer.classList.toggle("active")
    shareBtn.classList.toggle("active")
    socialMedia.classList.toggle("active")
})