const toogleBtn = document.querySelector('.toogle__btn')
const toogleBtnIcon = document.querySelector('.toogle__btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toogleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toogleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}