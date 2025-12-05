const menu = document.getElementById("menu");
const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");

btnOpen.addEventListener("click", () => {
    menu.style.display = "block";
    btnOpen.style.display = "none";
    btnClose.style.display = "block";
});

btnClose.addEventListener("click", () => {
    menu.style.display = "none";
    btnClose.style.display = "none";
    btnOpen.style.display = "block";
});
