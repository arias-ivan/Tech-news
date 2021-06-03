document.querySelector('.menu-btn').addEventListener('click' , () => {
  document.querySelector('.new-main').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-card', {delay:550});
ScrollReveal().reveal('.cards-banner-one', { delay: 550});
ScrollReveal().reveal('cards-banner-two.', { delay: 550});
ScrollReveal().reveal('.footer', { delay: 550});