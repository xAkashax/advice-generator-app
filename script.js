const dice = document.querySelector(".dice");
const adviceNumber = document.getElementById("adivce-number");
const adviceText = document.getElementById("advice-text");

const showAdvice = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceNumber.textContent = data.slip.id;
      adviceText.textContent = data.slip.advice;
    });
};

window.onload = showAdvice;
dice.addEventListener("click", showAdvice);
