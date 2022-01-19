//sign up validation
const fullName = document.querySelector('.full-name');
const signUpEmail = document.querySelector('.sign-up-email');
const dateBirth = document.querySelector('.date-of-birth');
const signUpUsername = document.querySelector('.signUpUsername');
const signUpPassword = document.querySelector('.signUpPassword');
const submitSignUp = document.querySelector('.sign-up-submit');

//adding event listener to the sign up form
submitSignUp.addEventListener('click', (e)=>{
  e.preventDefault()

  if(fullName.value.length < 5 || fullName.value === ''){
    fullName.style.border = '2.5px solid red';
    fullName.placeholder = 'please input a valid name';
  } else{
    fullName.style.border = '2.5px solid green';
  }

  if(signUpEmail.value.length < 5 || signUpEmail.value === '' || signUpEmail.value.indexOf('@') === -1){
    signUpEmail.style.border = '2.5px solid red';
    signUpEmail.placeholder = "please input a valid e-mail '@'"
  } else{
    signUpEmail.style.border = '2.5px solid green';
  }

  if(dateBirth.value.length < 4 || dateBirth.value.indexOf('-') === -1){
    dateBirth.style.border = '2.5px solid red';
    dateBirth.placeholder = 'please input a valid date of birth DD-MM-YYYY';
  } else{
    dateBirth.style.border = '2.5px solid green';
  }

  if(signUpUsername.value.length < 1 || signUpUsername.value === ''){
    signUpUsername.value = '';
    signUpUsername.style.border = '2.5px solid red';' '
    signUpUsername.placeholder = 'please input a valid username';

  } else if(signUpUsername.value.length > 15){
    signUpUsername.value = '';
    signUpUsername.style.border = '2.5px solid red';
    signUpUsername.placeholder = 'usernames should not be more than 15 characters';

  } else{
    signUpUsername.style.border = '2.5px solid green';
  }
 
  if(signUpPassword.value.length < 3 || signUpPassword.value === ''){
    signUpPassword.value = '';
    signUpPassword.style.border = '2.5px solid red';' '
    signUpPassword.placeholder = 'passwords should be more than 5 characters';
  } else{
    signUpPassword.style.border = '2.5px solid green';
  }

})