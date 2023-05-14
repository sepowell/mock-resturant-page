import { loadHome } from './home';

function loadHeader() {
  const header = document.createElement('header');
  
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';

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

  footer.appendChild(createdBy);
  createdBy.appendChild(gitProfileLink);
  footer.appendChild(imagesFrom);
  footer.appendChild(sources);
  sources.appendChild(linkOne);
  sources.appendChild(linkTwo);
  sources.appendChild(linkThree);

  return footer;
}

function initializeWebsite() {
  const wrapper = document.getElementById('wrapper');
  
  wrapper.appendChild(loadHeader());
  wrapper.appendChild(loadMain());
  wrapper.appendChild(loadFooter());

  loadHome();

  console.log('testing');

}

export { initializeWebsite };