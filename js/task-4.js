const form = document.querySelector(".login-form");
const userData = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (email && password) {
    userData.email = email.trim();
    userData.password = password.trim();
    console.log(userData);
    form.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
