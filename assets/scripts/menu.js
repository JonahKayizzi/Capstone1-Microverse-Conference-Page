const hambger = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
const closebutton = document.querySelector('.close');
const logo = document.querySelector('.logo');

const openMenu = () => {
  menu.classList.add('blk');
  menu.classList.remove('hdn');
  closebutton.classList.add('blk');
  closebutton.classList.remove('hdn');
  hambger.classList.add('hdn');
  hambger.classList.remove('blk');
  logo.classList.toggle('hdn');
  logo.classList.remove('blk');
};

const closeMenu = () => {
  menu.classList.add('hdn');
  menu.classList.remove('blk');
  closebutton.classList.add('hdn');
  closebutton.classList.remove('blk');
  hambger.classList.add('blk');
  hambger.classList.remove('hdn');
  logo.classList.add('hdn');
  logo.classList.remove('blk');
};

hambger.addEventListener('click', openMenu);

closebutton.addEventListener('click', closeMenu);

menu.addEventListener('click', closeMenu);
