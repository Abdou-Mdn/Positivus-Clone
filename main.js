/* mobile navigation toggle */

const navbar = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const blackScreen = document.querySelector(".black-screen");

const toggleMenuExpansion = () => {
    const expanded = navbar.classList.contains("expanded");
    console.log(expanded);
    const icon = navToggle.querySelector("i");
    console.log(icon)
    if(!expanded) {
        navbar.classList.add("expanded");
        blackScreen.classList.add("expanded");
        navToggle.setAttribute("aria-expanded",true);
        navToggle.classList.add("expanded");
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark");
    } else {
        navbar.classList.remove("expanded");
        blackScreen.classList.remove("expanded");
        navToggle.setAttribute("aria-expanded",false);
        navToggle.classList.remove("expanded");
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-xmark");
    }
}

const removeClasses = () => {
    if(window.innerWidth >= 880) {
        const icon = navToggle.querySelector("i");
        navbar.classList.remove("expanded");
        blackScreen.classList.remove("expanded");
        navToggle.setAttribute("aria-expanded",false);
        navToggle.classList.remove("expanded");
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-xmark");
    }
}
removeClasses();

navToggle.addEventListener("click", toggleMenuExpansion);
blackScreen.addEventListener("click",toggleMenuExpansion);
window.addEventListener("resize",removeClasses);


/* process section card expantion toggle */
let expandBtns = document.querySelectorAll(".process-section .expand-button");

const toggleCardExpansion = (event) => {
    const clickedBtn = event.currentTarget;
    const card = clickedBtn.closest(".card");
    const details = document.getElementById(clickedBtn.getAttribute("aria-controls"));

    if(card.classList.contains("expanded")) {
        card.classList.remove("expanded");
        clickedBtn.innerHTML = '<i class="fas fa-plus" aria-hidden="true"></i> <span class="sr-only">Show more details</span>';
        clickedBtn.setAttribute("aria-expanded",false);
        details.setAttribute("aria-hidden",true);
    } else {
        card.classList.add("expanded");
        clickedBtn.innerHTML = '<i class="fas fa-minus" aria-hidden="true"></i> <span class="sr-only">Show less details</span>';
        clickedBtn.setAttribute("aria-expanded",true);
        details.setAttribute("aria-hidden",false);
    }
}

expandBtns.forEach(button => {
    button.addEventListener("click",toggleCardExpansion);
});

