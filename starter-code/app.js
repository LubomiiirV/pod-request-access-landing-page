const email = document.querySelector(".emailInput");
const submit = document.querySelector("button");
const error = document.querySelector("#error");

// const showError = () => {
//   error.style.display = "block";
// };

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
    return alert("Input email");
  }

  console.log("success");
});
