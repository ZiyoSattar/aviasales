var intro = "Welcome to Aviasales!"
confirm(intro)

var elBody = document.querySelector(".body");
var elTextDiv = document.querySelector(".hero__text-div");
var elText = document.querySelector(".hero__text");
var elInput = document.querySelector(".hero__input");
var elForm = document.querySelector(".hero__form");
var elAnswer = document.createElement("p");

elTextDiv.appendChild(elAnswer);

elAnswer.setAttribute("style", "margin-top: 22px; font-size: 20px; color: red;")

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  if (elInput.value >= 500 && elInput.value <= 750 ) {
    elAnswer.textContent = "You can buy a ticket to  Sweden!"
  }

  else if (elInput.value >= 754 && elInput.value <= 899 ) {
    elAnswer.textContent = "You can buy a ticket to  USA!"
  }

  else if (elInput.value >= 901 && elInput.value <= 1200 ) {
    elAnswer.textContent = "You can buy a ticket to  Germany!"
  }

  else if (elInput.value >= 100 && elInput.value <= 499 ) {
    elAnswer.textContent = "You can buy a ticket to  Russia!"
  }

  else if(isNaN(elInput.value)) {
    elAnswer.textContent = "write only numbers!"
  }

  else {
    elAnswer.textContent = "U just stay in Uzbekistan :("
  }

})