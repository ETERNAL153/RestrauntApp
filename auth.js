// Handle signup
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
   event.preventDefault();

   const username = document.getElementById('signup-username').value;
   const password = document.getElementById('signup-password').value;
   const name = document.getElementById('signup-name').value;
   const address = document.getElementById('signup-address').value;



   // Save the credentials to localStorage
   localStorage.setItem('user', JSON.stringify({
    name: name,
    username: username,
    password: password,
    address: address
}));

   alert('Signup successful! Please log in.');
   window.location.href = 'index.html'; // Redirect to login page
});

// Handle login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
   event.preventDefault();

   const username = document.getElementById('login-username').value;
   const password = document.getElementById('login-password').value;

   // Retrieve stored credentials
   const userData = localStorage.getItem('user');
    // Parse the JSON data
    const user = JSON.parse(userData);
    // Get the profile-info container
   const storedUsername = user.username;
   const storedPassword = user.password;

   // Check if credentials match
   if (username === storedUsername && password === storedPassword) {
       alert('Login successful!');
       window.location.href = 'home.html'; // Redirect to home page
   } else {
       alert('Invalid username or password');
   }
});