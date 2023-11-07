
const form=document.querySelector('.login-form');
form.addEventListener('submit',handleSubmit);
function handleSubmit (event){
    event.preventDefault();
    // console.dir(event.currentTarget);
    const {email, password}=event.currentTarget.elements;
    // console.log(email);
    if (email.value === '' || password.value === '') {
              alert('Всі поля повинні бути заповнені!');
            } else {
                const info = {
                    email:email.value,
                password:password.value,
                };
                console.log(info);
                 // Очистка полів форми
    email.value = '';
    password.value = '';
              
              };
}