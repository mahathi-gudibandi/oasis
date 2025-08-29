document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let errorMessage = document.getElementById("errorMessage");

  // Email regex for validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email === "" || password === "") {
    errorMessage.textContent = "All fields are required!";
  } else if (!email.match(emailPattern)) {
    errorMessage.textContent = "Please enter a valid email!";
  } else if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters!";
  } else {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful!";
    // Redirect or perform action
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Example redirect
    }, 1500);
  }
});
