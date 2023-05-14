import logoImage from './images/logo.jpg';
import customerSupportImage from './images/customer-support.jpg';
import staffImage from './images/resturant-staff.jpg';

function loadContact() {
  let main = document.getElementById('main');
  main.innerHTML = '';

  const logo = document.createElement('img');
  logo.src = logoImage;
  logo.alt = "logo";
  logo.classList.add('logo');

  const breakOne = document.createElement('hr');

  const contactTitle = document.createElement('h2');
  contactTitle.innerText = 'Contact Us!';

  const customerSupport = document.createElement('img');
  customerSupport.src = customerSupportImage;
  customerSupport.alt = "Drawing of employee provinding customer support";
  customerSupport.classList.add('customer-support');

  const breakTwo = document.createElement('hr');

  const addressTitle = document.createElement('p');
  addressTitle.innerText = 'Address: ';
  addressTitle.classList.add('contact-sub-titles');

  const address = document.createElement('p');
  address.innerHTML = "5001 Mewport Ave <br> San Diego, CA 92107";

  const phoneTitle = document.createElement('p');
  phoneTitle.innerText = 'Phone Number:';
  phoneTitle.classList.add('contact-sub-titles');

  const phone = document.createElement('p');
  phone.innerText = '+1 (800) 115 - 1153';
  phone.classList.add('phone-number');

  const emailTitle = document.createElement('p');
  emailTitle.innerText = 'Email:';
  emailTitle.classList.add('contact-sub-titles');

  const email = document.createElement('p');
  email.innerText = 'pizzeracompany@pizza.com';

  const breakThree = document.createElement('hr');

  const staffVector = document.createElement('img');
  staffVector.src = staffImage;
  staffVector.alt = "drawing of resturant staff";
  staffVector.classList.add('staff-image');

  main.appendChild(logo);
  main.appendChild(breakOne);
  main.appendChild(contactTitle);
  main.appendChild(customerSupport);
  main.appendChild(breakTwo);
  main.appendChild(addressTitle);
  main.appendChild(address);
  main.appendChild(phoneTitle);
  main.appendChild(phone);
  main.appendChild(emailTitle);
  main.appendChild(email);
  main.appendChild(breakThree);
  main.appendChild(staffVector);

  console.log('contact page loaded!');
  
  
  return main;
}

export { loadContact };