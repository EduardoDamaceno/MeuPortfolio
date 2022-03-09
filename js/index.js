function initShowMenu(){
const navMenu = document.querySelector(".js #nav-menu"),
        navToggle = document.querySelector(".js #nav-apps"),
        navClose = document.querySelector(".js #nav-close")

  if(navToggle){
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }

  if(navClose){
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    }) 
  }
}

initShowMenu()

function initDarkMode(){
  const theme = document.querySelector('.js #theme'),
        body = document.querySelector('.js body'),
        header = document.querySelector('.js header'),
        experience = document.querySelector('.js #experience')


  function changeTheme(){

    if (theme.classList.contains('uil-moon')){
      theme.classList.remove('uil-moon')
      theme.classList.add('uil-sun')
      body.classList.add('night-mode')
      header.classList.add('night-mode')
      experience.classList.add('night-mode')
    } else {
      theme.classList.remove('uil-sun')
      theme.classList.add('uil-moon')
      body.classList.remove('night-mode')
      header.classList.remove('night-mode')
      experience.classList.remove('night-mode')
    }
  }

  theme.addEventListener('click', changeTheme)
}

initDarkMode()


const navLink = document.querySelectorAll('.js .nav__link')

function linkAction(){
    const navMenu = document.getElementById('.js nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


 function initAnimationScroll(){
  const animateSection = document.querySelectorAll('.js .js-scroll')
        windowHalf = window.innerHeight * 0.5

  function animationScroll(event){
    animateSection.forEach((animate) => {
     const contentTop = animate.getBoundingClientRect().top
     const isContentVisible = (contentTop - windowHalf) < 0;
     if(isContentVisible) {
      animate.classList.add('animate')
    }  
    })
    
  }
  animationScroll()
  window.addEventListener('scroll', animationScroll)
}

initAnimationScroll() 

function minHeight(){
  const article = document.querySelector('.js .home')
        articleTop = article.getBoundingClientRect().top
        header = document.querySelector('.js .header')
        console.log(articleTop)
  function minHeader(event){
    console.log(articleTop)
  if(articleTop < 0){
    
    header.classList.add('min')
  }
  }
  

  window.addEventListener('scroll', minHeader)
}
minHeight()

function smoothScroll(){
  const linksInternos = document.querySelectorAll('.js .header a[href^="#"]')

  function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  linksInternos.forEach((links) => {
    links.addEventListener('click', scrollToSection)
  })

}
smoothScroll()
