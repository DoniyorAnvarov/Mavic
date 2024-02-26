// burger start 

let headerMenu = document.querySelector('.header__menu')
let headerMenuLine = document.querySelector('.header__menu-line')
let headerList = document.querySelector('.header__list')
let headerContact = document.querySelector('.header__contact')
let headerCall = document.querySelector('.header__call')
let header__logo = document.querySelector('.header__logo span')

headerMenu.addEventListener("click", () => {
  headerMenuLine.classList.toggle('active')
  headerList.classList.toggle('active')
})

headerContact.append(headerCall)
window.addEventListener('resize', () => {
  if (window.innerWidth <= 1262) {
    headerList.append(headerCall)
    header__logo.innerText = ""
  } else {
    headerContact.append(headerCall)
    header__logo.innerText = "MAVIC 2 PRO"
  }
})

// burger end

// slider start 

const infoSlider = new Swiper(".info__slider", {
  slidePerView: 1,
  spaceBetween: 10,
  loop: true,

  navigation: {
    nextEl: ".info__slider-next",
    prevEl: ".info__slider-prev"
  }
})