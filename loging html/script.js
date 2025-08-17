document.getElementById('signin-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  errorMessage.innerText = '';

  if (!email || !password) {
    errorMessage.innerText = 'Please fill in both fields.';
    return;
  }

  errorMessage.innerText = 'Signing in...';

  setTimeout(() => {
    errorMessage.innerText = '';
    //alert(`Welcome, ${email}!`);
    window.location.href = '../index.html';
  }, 1000);
});

document.getElementById('google-signin').addEventListener('click', function(e) {
  e.preventDefault();
  //alert('Google sign-in clicked');
});

document.getElementById('facebook-signin').addEventListener('click', function(e) {
  e.preventDefault();
  
  //alert('Facebook sign-in clicked');
 
});

