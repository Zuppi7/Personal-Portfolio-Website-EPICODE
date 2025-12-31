// Script per il funzionamento del drawer menu
const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const drawerClose = document.getElementById("drawerClose");

function openDrawer() {
  drawer.classList.add("active");
  drawerOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("active");
  drawerOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", openDrawer);
drawerClose.addEventListener("click", closeDrawer);
drawerOverlay.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer.classList.contains("active")) {
    closeDrawer();
  }
});
