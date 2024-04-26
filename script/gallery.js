const galleryItems = document.querySelectorAll('.gallery-list-item');
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');

galleryItems.forEach(item => {
  const img = item.querySelector('img');
  img.addEventListener('click', event => {
    const imgSrc = event.target.getAttribute('src');
    modalImg.setAttribute('src', imgSrc);
    modal.style.display = 'block';
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});