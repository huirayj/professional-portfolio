const navBtnEle = document.querySelector('.toggle-btn');
const navEle = document.querySelector('nav');

const togggleNav = () => navEle.classList.toggle('show');

navBtnEle.addEventListener('click', togggleNav);