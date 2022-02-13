function initShowMenu(){
const navMenu = document.querySelector("#nav-menu"),
        navToggle = document.querySelector("#nav-apps"),
        navClose = document.querySelector("#nav-close")

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
  const theme = document.querySelector('#theme'),
        body = document.querySelector('body'),
        header = document.querySelector('header'),
        experience = document.querySelector('#experience')


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


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
