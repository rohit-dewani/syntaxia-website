const primaryNav = document.querySelector('.nav-list');
const navToggle = document.querySelector('.nav-toggle-btn');
const svgBars = document.querySelector('.hamburger');
const svgClose = document.querySelector('.close');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if (visibility === "false"){
        primaryNav.setAttribute('data-visible',true);
        svgBars.setAttribute('data-visible',false);
        svgClose.setAttribute('data-visible',true);
    }

    if (visibility === "true"){
        primaryNav.setAttribute('data-visible',false);
        svgBars.setAttribute('data-visible',true);
        svgClose.setAttribute('data-visible',false);
    }

});