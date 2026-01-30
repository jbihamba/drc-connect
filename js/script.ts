// Récupère le bouton qui ouvre / ferme le menu mobile
const navMobileToggle = document.getElementById("nav-mobile-toggle") as HTMLButtonElement;
// Récupère le menu de navigation mobile
const mobileNavMenu = document.getElementById("mobile-nav-menu") as HTMLUListElement;
// Écoute le clic sur le bouton du menu mobile
navMobileToggle.addEventListener("click", () => {
     // Si le menu est actuellement caché, on l'affiche, sinon on le cache
    if (mobileNavMenu.classList.contains("hidden")) {
          // Affiche le menu mobile
        mobileNavMenu.classList.remove("hidden");
        // Change l'icône du bouton pour une croix
        navMobileToggle.innerHTML = '<i class="bi bi-x"></i>';
    } else {
        // Cache le menu mobile
        mobileNavMenu.classList.add("hidden");
        // Change l'icône du bouton pour un menu
        navMobileToggle.innerHTML = '<i class="bi bi-list"></i>';
    }
});