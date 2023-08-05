const navList = document.querySelector('.menu')
document.querySelector('.hamburger').onclick = () => {
    navList.classList.add('show')
}
document.querySelector(".close").onclick = () => {
    navList.classList.remove("show");
};




