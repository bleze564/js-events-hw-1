const colorForm = document.querySelector("#color-form");

colorForm.addEventListener("change", (event) => {
  if (event.target.name === "color") {
    document.body.style.backgroundColor = event.target.value;
  }
});

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value.trim() || "незнайомець";
});

const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const expectedLength = Number(validationInput.dataset.length);
  const isValid = validationInput.value.length === expectedLength;

  validationInput.classList.toggle("valid", isValid);
  validationInput.classList.toggle("invalid", !isValid);
});

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});
