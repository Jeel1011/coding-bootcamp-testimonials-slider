
const btnSwitch1 = document.querySelector("#container__btn-switch-developer1");
const btnSwitch2 = document.querySelector("#container__btn-switch-developer2");
const developer1 = document.querySelector(".container__developer1-profile");
const developer2 = document.querySelector(".container__developer2-profile");

function toggleProfiles(event) {
    if (event.type === 'click' || (event.keyCode === 37 || event.keyCode === 39)) { // Check for click event or left/right arrow key press
        developer1.classList.toggle("display-none");
        developer2.classList.toggle("display-none");
    }
}

btnSwitch1.addEventListener('click', toggleProfiles);
btnSwitch2.addEventListener('click', toggleProfiles);
window.addEventListener('keydown', toggleProfiles);