export function showHideHeader () {
  const menuIcon = document.querySelector('.item.icon.menu')
  const header = document.querySelector('header')
  const navContainer = header.querySelector('ul.nav')

  menuIcon.addEventListener('click', () => {
    console.log(navContainer.classList.contains('ux-show'))
    if (navContainer.classList.contains('ux-show')) {
      console.log('ocultando menu')
      navContainer.classList.remove('ux-show')
      navContainer.classList.add('ux-hide')
    } else {
      console.log('mostrando menu')
      navContainer.classList.add('ux-show')
      navContainer.classList.remove('ux-hide')
    }
  })
}
