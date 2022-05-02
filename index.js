const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


// Toggle menu
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = 'block';

})

closeBtn.addEventListener("click", () => {
    sideMenu.style.display = 'none';
})

// Change theme
themeToggler.addEventListener("click", () => {
    var element = document.body;
    element.classList.toggle("dark-theme-variables");

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})