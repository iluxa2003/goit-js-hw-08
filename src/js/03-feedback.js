import throttle from 'lodash.throttle';

const button = document.querySelector('button');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');
const settings = {
  email: '',
  message: '',
};
try {
  const ourData = localStorage.getItem('feedback-form-state');
  const parsedSettings = JSON.parse(ourData);
  emailInput.value = parsedSettings.email;
  messageInput.textContent = parsedSettings.message;
} catch {}
const check = event => {
  event.preventDefault();
  const ourData = localStorage.getItem('feedback-form-state');
  const parsedSettings = JSON.parse(ourData);
  console.log(parsedSettings);
  form.reset();
  messageInput.value = "";
};

const message = event => {
  settings.email = emailInput.value;
  settings.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(settings));
};
form.addEventListener('submit', check);
form.addEventListener('input',throttle(message, 500))
