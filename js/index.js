// recupere le btn browser services
var btnBrowseServices = document.getElementById("btn-browse-services");
// recupere le btn create account 
var btnCreateAccount = document.getElementById("btn-create-account");
// ecoute le clic sur le btn browse services
btnBrowseServices.addEventListener("click", function () {
    // redirige vers la page services
    window.location.href = "service.html";
});
// ecoute le clic sur le btn create account
btnCreateAccount.addEventListener("click", function () {
    // redirige vers la page create account
    window.location.href = "create-account.html";
});
