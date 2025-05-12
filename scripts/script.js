document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.card__social-toggle');
  const cardSocial = document.querySelector('.card__social');

  toggleButton.addEventListener('click', () => {
    cardSocial.classList.toggle('animation');
  });
});