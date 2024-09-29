const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton'); // Corrected spelling
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup'); // Ensure this matches the HTML

signUpButton.addEventListener('click', function() {
  signInForm.style.display = 'none';
  signUpForm.style.display = 'block';
});

signInButton.addEventListener('click', function() {
  signInForm.style.display = 'block';
  signUpForm.style.display = 'none';
});
