// recupere le btn browser services
const btnBrowseServices = document.getElementById ("btn-browse-services") as HTMLButtonElement;
// recupere le btn create account 
const btnCreateAccount = document.getElementById ("btn-create-account") as HTMLButtonElement;

// ecoute le clic sur le btn browse services
btnBrowseServices.addEventListener("click",()=>{
    // redirige vers la page services
    window.location.href = "service.html";
});

// ecoute le clic sur le btn create account
btnCreateAccount.addEventListener("click",()=>{
    // redirige vers la page create account
    window.location.href = "create-account.html";
});