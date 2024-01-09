const form = document.querySelector(".login-form");
let userList = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (email && password) {
    userList.email = email.trim();
    userList.password = password.trim();
    console.log(userList);
    form.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
