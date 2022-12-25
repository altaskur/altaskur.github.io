export function asideStatus () {
  const about = document.querySelector('#about-me')
  const projects = document.querySelector('#projects')

  window.addEventListener('scroll', () => {
    const aboutPosition = about.getBoundingClientRect().top
    const projectsPosition = projects.getBoundingClientRect().top

    const circlePrevious = document.querySelector('.ux-aside-previous')
    const circleCurrent = document.querySelector('.ux-aside-current')
    const circleNext = document.querySelector('.ux-aside-next')

    if (aboutPosition > 0) {
      circlePrevious.classList.add('ui-hidden')
      circleNext.classList.remove('ui-hidden')
      circleCurrent.innerHTML = 0
      circleNext.innerHTML = 1
    } else if (aboutPosition < 0 && projectsPosition > 200) {
      circlePrevious.classList.remove('ui-hidden')
      circleNext.classList.remove('ui-hidden')
      circlePrevious.innerHTML = 0
      circleCurrent.innerHTML = 1
      circleNext.innerHTML = 2
    } else {
      circlePrevious.classList.remove('ui-hidden')
      circleNext.classList.add('ui-hidden')

      circlePrevious.innerHTML = 1
      circleCurrent.innerHTML = 2
    }
  })
}
