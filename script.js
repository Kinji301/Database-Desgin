const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton'); 
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

// Built-in credentials for login
const adminEmail = "admin@gmail.com";
const adminPassword = "admin123";

// Event to toggle forms (Sign Up and Sign In)
signUpButton.addEventListener('click', function() {
  signInForm.style.display = 'none';
  signUpForm.style.display = 'block';
});

signInButton.addEventListener('click', function() {
  signInForm.style.display = 'block';
  signUpForm.style.display = 'none';
});

// Function to handle Sign In form submission only
signInForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  const emailInput = document.querySelector('#signIn input[name="email"]').value;
  const passwordInput = document.querySelector('#signIn input[name="password"]').value;

  // Check if the credentials match for Sign In
  if (emailInput === adminEmail && passwordInput === adminPassword) {
    // Redirect to another HTML page upon successful login
    window.location.href = "home.html"; // Replace 'dashboard.html' with the page you want to redirect to
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
