const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index]
      const animItemHeight = animItem.offSetHeight
      const animItemOffset = offset(animItems).top
      const animStart = 4

      console.log('ddddd');

      let animationPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animationPoint = window.innerHeight - window.innerHeight / animStart
      }

      if ((pageYOffset > animItemOffset - animationPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active')
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove(_active)
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect()
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animOnScroll()
  }, 300);
}