const form = document.querySelector('.feedback-form');

form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

const KEY_LS = 'feedback-form-state';

let data = JSON.parse(localStorage.getItem(KEY_LS)) ?? {};
const { email, message } = form.elements;

 email.value = data.email ?? '';
 message.value = data.message ?? '';


function handlerInput(event) {
    data[event.target.name] = event.target.value.trim();
  localStorage.setItem(KEY_LS, JSON.stringify(data));
}

function handlerSubmit(event) {
    event.preventDefault();
     if (email.value !== '' && message.value !== '') {
    console.log(JSON.parse(localStorage.getItem(KEY_LS)));
    localStorage.removeItem(KEY_LS);
    form.reset();
  } else {
    alert('Fill both fields!');
  }
    console.log(data);
    data = {};

}