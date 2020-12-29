const btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;

  if (!email) {
    document
      .getElementsByClassName("error-id")[0]
      .classList.remove("error-img-hidden");
    document.getElementsByClassName("error-id")[0].classList.add("error-img");
    document.getElementsByClassName("info")[0].classList.remove("error-hidden");
    document.getElementsByClassName("info")[0].classList.add("error");
    document
      .getElementsByClassName("subscription-form")[0]
      .classList.remove("normal-border");
    document
      .getElementsByClassName("subscription-form")[0]
      .classList.add("error-border");
  } else if (!email.includes("@")) {
    document
      .getElementsByClassName("error-id")[0]
      .classList.remove("error-img-hidden");
    document.getElementsByClassName("error-id")[0].classList.add("error-img");
    document.getElementsByClassName("info")[0].classList.remove("error-hidden");
    document.getElementsByClassName("info")[0].classList.add("error");
    document
      .getElementsByClassName("subscription-form")[0]
      .classList.remove("normal-border");
    document
      .getElementsByClassName("subscription-form")[0]
      .classList.add("error-border");
  } else {
    document
      .getElementsByClassName("error-id")[0]
      .classList.remove("error-img");
    document
      .getElementsByClassName("error-id")[0]
      .classList.add("error-img-hidden");
    document.getElementsByClassName("info")[0].classList.remove("error");
    document.getElementsByClassName("info")[0].classList.add("error-hidden");
    document
      .getElementsByClassName("subscription-form")[0]
      .classList.remove("error-border");
    document
      .getElementsByClassName("subscription-form")[0]
      .classList.add("normal-border");
  }
});
