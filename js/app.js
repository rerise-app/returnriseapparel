document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 200);
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {

  // Animasi klik tombol (punya kamu, tetap dipakai)
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 200);
    });
  });

  // Active state menu
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

});

const menuItems = document.querySelectorAll('.menu-item');
const currentPage = window.location.pathname.split('/').pop();
menuItems.forEach(item => {
  const href = item.getAttribute('href');

  // untuk index.html
  if (
    href === currentPage ||
    (currentPage === '' && href === 'index.html')
  ) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
});


const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});

