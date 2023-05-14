import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact} from './contact';

function loadHeader() {
  const header = document.createElement('header');
  
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener ('click', (e) => {
    changePage('home');
  });

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener ('click', (e) => {
    changePage('menu');
  })

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', (e) => {
    changePage('contact');
  })

  header.appendChild(homeButton);
  header.appendChild(menuButton);
  header.appendChild(contactButton);

  return header;

}

function loadMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  main.setAttribute('id', 'main');

  return main;
}

function loadFooter() {
  const footer = document.createElement('footer');

  const createdBy = document.createElement('p');
  createdBy.textContent = 'Created by ';

  const gitProfileLink = document.createElement('a');
  gitProfileLink.textContent = ' sepowell';
  gitProfileLink.href = "https://github.com/sepowell/mock-resturant-page";

  const imagesFrom = document.createElement('p');
  imagesFrom.textContent = 'Images From:';

  const sources = document.createElement('p');
  sources.classList.add('sources');

  const linkOne = document.createElement('a');
  linkOne.textContent = 'azerbaijan_stockers ';
  linkOne.href = "https://www.freepik.com/free-photo/classic-pepperoni-pizza-with-finely-melted-cheese-greenery-top_5448672.htm?query=picture%20of%20pizza%20resturant#from_view=detail_alsolike";

  const linkTwo = document.createElement('a');
  linkTwo.textContent = 'eightonesix ';
  linkTwo.href = "https://www.freepik.com/free-vector/pizzeria-logo_1090856.htm#query=pizza&position=0&from_view=author";

  const linkThree = document.createElement('a');
  linkThree.textContent = 'starline';
  linkThree.href = "https://www.freepik.com/free-vector/24-hour-service-3d-text-background_25694907.htm#query=24%20hours%20sign%20white%20background&position=10&from_view=search&track=ais";

  const breakOne = document.createElement('br');

  const linkFour = document.createElement('a');
  linkFour.textContent = 'freepik ';
  linkFour.href = "https://www.freepik.com/free-vector/flat-design-illustration-customer-support_12982910.htm#query=customer%20support&position=0&from_view=search&track=ais";  

  const linkFive = document.createElement('a');
  linkFive.textContent = 'macrovector';
  linkFive.href = "https://www.freepik.com/free-vector/menu-template-restaurant-pizzeria_3795039.htm#query=fake%20pizza%20menu&position=5&from_view=search&track=ais";

  footer.appendChild(createdBy);
  createdBy.appendChild(gitProfileLink);
  footer.appendChild(imagesFrom);
  footer.appendChild(sources);
  sources.appendChild(linkOne);
  sources.appendChild(linkTwo);
  sources.appendChild(linkThree);
  sources.appendChild(breakOne);
  sources.appendChild(linkFour);
  sources.appendChild(linkFive);

  return footer;
}

function changePage(page) {
  switch (page) {
    case 'home':
      loadHome();
      break;
    case 'menu':
      loadMenu();
      break;
    case 'contact':
      loadContact();
      break;
  }
}

function initializeWebsite() {
  const wrapper = document.getElementById('wrapper');
  
  wrapper.appendChild(loadHeader());
  wrapper.appendChild(loadMain());
  wrapper.appendChild(loadFooter());

  loadHome();

}

export { initializeWebsite };