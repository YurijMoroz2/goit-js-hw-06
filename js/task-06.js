const userName = document.querySelector('#validation-input');
console.log(userName);
userName.addEventListener('blur', handleBlur);

function handleBlur(event) {
  const name = event.currentTarget.value;
  console.log(name);
  const length = userName.getAttribute('data-length');
  userName.classList.remove('valid', 'invalid');

  if (name.length === Number(length)) {
    userName.classList.add('valid');
  } else {
    userName.classList.add('invalid');
  };
}