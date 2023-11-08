const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".nav-list");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navlist.classList.toggle("open");
    });
}


// ======= popup function ========

const popup = document.querySelector('.popup');
const closepopup = document.querySelector(".popup-close");
const sub = document.querySelector('.sub');

if (popup) {
    closepopup.addEventListener('click', () => {
        popup.classList.add('hide-popup')

    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            popup.classList.remove('hide-popup');
        }, 1000);
    });


}
