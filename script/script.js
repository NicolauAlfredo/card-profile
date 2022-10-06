const img = document.querySelector("img");
const icons = document.querySelector(".icones");

img.onclick = function () {
    this.classList.toggle("activo");
    icons.classList.toggle("activo");
}