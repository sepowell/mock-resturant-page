import logoImage from './images/logo.jpg';

function loadMenu() {
  let main = document.getElementById('main');
  main.innerHTML = '';

  const logo = document.createElement('img');
  logo.src = logoImage;
  logo.alt = "logo";
  logo.classList.add('logo');

  const breakOne = document.createElement('hr');



  main.appendChild(logo);
  main.appendChild(breakOne);

  console.log('menu page loaded!');
  
  return main;
}

export { loadMenu };