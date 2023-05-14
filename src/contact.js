import logoImage from './images/logo.jpg';


function loadContact() {
  let main = document.getElementById('main');
  main.innerHTML = '';

  const logo = document.createElement('img');
  logo.src = logoImage;
  logo.alt = "logo";
  logo.classList.add('logo');

  const breakOne = document.createElement('hr');



  main.appendChild(logo);
  main.appendChild(breakOne);

  console.log('contact page loaded!');
  
  return main;
}

export { loadContact };