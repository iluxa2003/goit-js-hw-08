import throttle from 'lodash.throttle';
const _ = require('lodash');
const button = document.querySelector('button');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

try {
  const ourData = localStorage.getItem('feedback-form-state');
  const parsedSettings = JSON.parse(ourData);
  emailInput.value = parsedSettings.email;
  messageInput.textContent = parsedSettings.message;
} catch {}
const check = event => {
  event.preventDefault();
  const settings = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(settings));
  const ourData = localStorage.getItem('feedback-form-state');
  const parsedSettings = JSON.parse(ourData);
  console.log(parsedSettings);
  // emailInput.reset();???????
  // messageInput.reset();??????
};
button.addEventListener('click', _.throttle(check, 500));
