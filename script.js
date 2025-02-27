function toggleMenu() {
    let sidebar = document.getElementById("side");
    sidebar.classList.toggle("open");
    document.getElementById("side").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    document.getElementById("side").style.width = "250px";
    document.getElementById("nav").style.marginLeft = "250px";
  }