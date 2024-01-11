const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const nameInputTrim = event.currentTarget.value.trim()
  nameInputTrim === ""
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = nameInputTrim);
});
