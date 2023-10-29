const expandButton = document.querySelector('header button')
expandButton.addEventListener('click', expand)

function expand () {
  document.body.classList.toggle('expand')
}
