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

const initializeWebsite = () => {
  const wrapper = document.getElementById('wrapper');
  
  wrapper.appendChild(loadHeader());
  // wrapper.appendChild(loadMain());
  // wrapper.appendChild(loadFooter());


  // loadHome();

  console.log('testing');

}

export { initializeWebsite };