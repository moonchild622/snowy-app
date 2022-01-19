
const signInUsername = document.querySelector('.sign-in-username');
const signInPassword = document.querySelector('.sign-in-password');
const submitSignIn = document.querySelector('#submit-login');
//adding event listener to the sign in form
submitSignIn.addEventListener('click', (e)=>{
  e.preventDefault()
  if(signInUsername.value !== 'muhammad' || signInPassword.value !== '12345'){
    signInUsername.value = '';
    signInUsername.style.border = '2.5px solid red';
    signInUsername.placeholder = 'please input a correct username'

    signInPassword.value = '';
    signInPassword.style.border = '2.5px solid red';
    signInPassword.placeholder = 'please input a correct password'
  } else{
    signInUsername.style.border = '2.5px solid green';
    signInPassword.style.border = '2.5px solid green';
    setInterval(() => {
      window.location.href = 'index.html'
    }, 1000); 
  }
})
