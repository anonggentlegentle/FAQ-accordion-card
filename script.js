"use strict";

const dropdownBox = document.querySelector(".main__dropdown-box");
const answer = document.querySelectorAll(".main__answer");
const arrow = document.querySelectorAll(".main__arrow-box");

let current;

dropdownBox.addEventListener("click", function (e) {
  current = e.target.dataset.value;

  //   answer.forEach(function (e) {
  //     e.classList.remove("unhide");
  //   });

  //   arrow.forEach(function (e) {
  //     e.classList.remove("rotate");
  //   });

  if (
    e.target.classList.contains("main__question-box") ||
    e.target.classList.contains("main__arrow-icon") ||
    e.target.classList.contains("main__question")
  ) {
    document
      .querySelector(`.main__question--${current}`)
      .classList.toggle("bold");

    document
      .querySelector(`.main__answer--${current}`)
      .classList.toggle("unhide");

    document
      .querySelector(`.main__arrow-box--${current}`)
      .classList.toggle("rotate");
  }
});
