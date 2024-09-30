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


// 9/30/24: Add event listener to handle sign-in form submission and redirect to home page
const signInSubmitButton = document.querySelector('#signIn input[type="submit"]');
signInSubmitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Get the email and password values and trim any extra spaces
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Log the values to verify if they are captured correctly
  console.log("Entered Email:", email);
  console.log("Entered Password:", password);

  // Set the expected values for email and password
  const validEmail = "name@domain.com";
  const validPassword = "password123";

  // Check if the input matches the valid credentials
  if (email === validEmail && password === validPassword) {
    window.location.href = 'home.html'; // Redirect to the home page
  } else {
    alert(`Entered Email: ${email}, Entered Password: ${password} \nPlease use the correct email: name@domain.com and password: password123`);
  }
});
