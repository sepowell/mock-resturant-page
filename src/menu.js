import logoImage from './images/logo.jpg';
import menuImage from './images/menu.jpg';

function loadMenu() {
  let main = document.getElementById('main');
  main.innerHTML = '';

  const logo = document.createElement('img');
  logo.src = logoImage;
  logo.alt = "logo";
  logo.classList.add('logo');

  const breakOne = document.createElement('hr');

  const menu = document.createElement('img');
  menu.src = menuImage;
  menu.classList.add('menu-image');

  main.appendChild(logo);
  main.appendChild(breakOne);
  main.appendChild(menu);

  console.log('menu page loaded!');
  
  return main;
}

export { loadMenu };