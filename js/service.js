// Sélectionner le conteneur des catégories par son ID
var categoryContainer = document.getElementById("categories");
// Vérifier si l'élément existe
if (!categoryContainer) {
    // Gérer le cas où l'élément n'est pas trouvé
    console.error("Element #categories introuvable");
    // Lancer une erreur ou gérer autrement
    throw new Error("categories container not found");
}
// Sélectionner tous les boutons à l'intérieur du conteneur des catégories
var buttonsCategories = categoryContainer.querySelectorAll("button");
// Ajouter un écouteur d'événement à chaque bouton
buttonsCategories.forEach(function (button) {
    // Lorsque le bouton est cliqué
    button.addEventListener("click", function () {
        // Retirer les classes actives de tous les boutons
        buttonsCategories.forEach(function (btn) {
            // Retirer les classes actives
            btn.classList.remove("bg-[#003094]", "text-white");
            // Ajouter les classes inactives
            btn.classList.add("bg-white", "text-black", "border", "border-gray-300");
        });
        // Ajouter les classes actives au bouton cliqué
        button.classList.remove("bg-white", "text-black", "border", "border-gray-300");
        // Ajouter les classes actives
        button.classList.add("bg-[#003094]", "text-white");
    });
});
