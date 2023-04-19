"use strict";
const input = document.getElementById("input-text");
const demo = document.querySelector(".demo");
const radio = document.querySelectorAll("input[type = radio]");
const radioDemo = document.querySelector(".radio-demo");
const radioSection = document.querySelector(".radio-section");

const inputReceiver = () => {
  demo.textContent = input.value;
};
input.addEventListener("keyup", inputReceiver);

//  The first way
radioSection.addEventListener("click", (e) => {
  if (e.target.name === "color") {
    const radioValue = e.target.value;
    e.target.style.accentColor = radioValue;
    radioDemo.textContent = radioValue;
    radioDemo.style.color = radioValue;
    radioDemo.parentElement.parentElement.style.border = `2px solid ${radioValue}`;
  }
});

// The second way

// const colorChanger = (index) => {
//   const radioValue = radio[index].value;
//   radio[index].style.accentColor = radioValue;
//   radioDemo.textContent = radioValue;
//   radioDemo.style.color = radioValue;
//   radioDemo.parentElement.parentElement.style.border = `2px solid ${radioValue}`;
// };

// for (let index = 0; index < radio.length; index++) {
//   radio[index].addEventListener("click", () => {
//     colorChanger(index);
//   });
// }