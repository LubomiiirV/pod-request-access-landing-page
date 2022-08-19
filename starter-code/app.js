const email = document.querySelector(".emailInput");
const submit = document.querySelector("button");
const para = document.createElement("p");
para.innerHTML = "Oops! Please check your email";

// const showError = () => {
//   error.style.display = "block";
// };

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
    return document.getElementById("newText").appendChild(para);
  }

  alert("Request sent, thank you.");
});
