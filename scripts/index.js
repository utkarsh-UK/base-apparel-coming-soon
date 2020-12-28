const btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;

  if (!email) {
    document.getElementsByClassName("error-id")[0].classList.remove("error-img-hidden");
    document.getElementsByClassName("error-id")[0].classList.add("error-img");
  } else if(!email.includes("@")) {
    document.getElementsByClassName("info")[0].classList.remove("error-hidden");
    document.getElementsByClassName("info")[0].classList.add("error");
  }
});
