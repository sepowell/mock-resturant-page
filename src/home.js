import logoImage from './images/logo.jpg';
import pizzaImage from './images/pizza.jpeg';
import hoursImage from './images/hours.jpg';

function loadHome() {
  const main = document.getElementById('main');

  const descriptionText = "Welcome to your one-stop shop for delicious and authentic pizzas! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const logo = document.createElement('img');
  logo.src = logoImage;
  logo.alt = "logo";
  logo.classList.add('logo');

  const breakOne = document.createElement('hr');

  const pizza = document.createElement('img');
  pizza.src = pizzaImage;
  pizza.alt = "a picture of one of our amazing pizzas!";
  pizza.classList.add('pizza');

  const blurb = document.createElement('p');
  blurb.textContent = '"Quality you can taste!';
  blurb.classList.add('blurb');

  const breakTwo = document.createElement('hr');

  const description = document.createElement('p');
  description.textContent = descriptionText;
  description.classList.add('description');

  const breakThree = document.createElement('hr');

  const hours = document.createElement('img');
  hours.src = hoursImage;
  hours.alt = "We're open 24/7!";
  hours.classList.add('hours');


  main.appendChild(logo);
  main.appendChild(breakOne);
  main.appendChild(pizza);
  main.appendChild(blurb);
  main.appendChild(breakTwo);
  main.appendChild(description);
  main.appendChild(breakThree);
  main.appendChild(hours);

}

export { loadHome };