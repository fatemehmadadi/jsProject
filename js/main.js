"use strict";
const input = document.getElementById("input-text");
const demo = document.querySelector(".demo");
const radio = document.querySelectorAll("input[type = radio]");
const radioDemo = document.querySelector(".radio-demo");

const inputReceiver = () => {
  demo.textContent = input.value;
};

const colorChanger = (index) => {
  const radioValue = radio[index].value;
  radio[index].style.accentColor = radioValue;
  radioDemo.textContent = radioValue;
  radioDemo.style.color = radioValue;
  radioDemo.parentElement.parentElement.style.border = `2px solid ${radioValue}`;
};

input.addEventListener("keyup", inputReceiver);

for (let index = 0; index < radio.length; index++) {
  radio[index].addEventListener("click", () => {
    colorChanger(index);
  });
}
