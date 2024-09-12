document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the default form submission behavior
  
    // Get the values of email and password fields
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    // Initialize error messages
    let emailError = "";
    let passwordError = "";
  
    // Email validation
    if (!email) {
      emailError = "Email is required."; // Email field is empty
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Please enter a valid email."; // Email format is incorrect
    }
  
    // Password validation
    if (!password) {
      passwordError = "Password is required."; // Password field is empty
    } else if (password.length < 6) {
      passwordError = "Password must be at least 6 characters long."; // Password length is less than 6 characters
    }
  
    // Display error messages
    document.getElementById("emailError").innerText = emailError;
    document.getElementById("passwordError").innerText = passwordError;
  
    // If there are no errors, call the API for login
    if (!emailError && !passwordError) {
      loginUser(email, password); // Call the loginUser function to handle API request
    }
  });
  
  // Function to handle user login via API
  function loginUser(email, password) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Sending JSON data
      },
      body: JSON.stringify({ username: email, password: password }), // Convert the user data to JSON
    })
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        alert('Login successful'); // Notify user of successful login
      })
      .catch(error => {
        alert('Login failed'); // Notify user of failed login
      });
  }
  
  // Event listener for show/hide password checkbox
  document.getElementById("showPassword").addEventListener("change", function () {
    let passwordField = document.getElementById("password"); // Get the password field
    if (this.checked) {
      passwordField.type = "text"; // Show the password
    } else {
      passwordField.type = "password"; // Hide the password
    }
  });