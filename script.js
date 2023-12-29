const revealBtn = document.querySelectorAll('.reveal-btn')
const answer = document.querySelector('.answer')

function showContent(e) {
  const isExpanded = this.getAttribute('aria-expanded') === 'true'
  this.setAttribute('aria-expanded', !isExpanded)

  if (this.getAttribute('aria-expanded') === 'true') {
    this.innerHTML = `
    <img src="./assets/images/icon-minus.svg" alt="button icon" />
    `
  } else {
    this.innerHTML = `
    <img src="./assets/images/icon-plus.svg" alt="button icon" />
    `
  }

  e.currentTarget.parentNode
    .closest('div')
    .nextElementSibling.classList.toggle('show')
}

revealBtn.forEach(btn => btn.addEventListener('click', showContent))
