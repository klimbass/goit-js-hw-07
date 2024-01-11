const form = document.querySelector(".login-form");
const userData = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email && password) {
    userData.email = email;
    userData.password = password;
    console.log(userData);
    form.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
