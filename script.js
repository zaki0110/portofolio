function toggleMenu() {
    let sidebar = document.getElementById("side");
    sidebar.classList.toggle("open");
}
document.getElementById("side").addEventListener("click", toggleMenu);