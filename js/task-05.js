const userName = document.querySelector('#name-input');
const getSpan = document.querySelector('#name-output');
// console.log(userName);
// console.log(getSpan)
userName.addEventListener("input",handleInput);
function handleInput (event){
    console.log(event.currentTarget.value);
    getSpan.textContent = userName.value || 'Anonymous';
};