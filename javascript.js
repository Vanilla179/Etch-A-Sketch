const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
function makeDiv(params) {
  let Number;
  Number = prompt("Please enter a number");

  for (let i = 0; i < Number; i++) {
    const div1 = document.createElement("div");
    div1.classList.add("row");
    div1.setAttribute("style", " background: pink; ");
    container.append(div1);

    for (let a = 0; a < Number; a++) {
      const div2 = document.createElement("div");
      div2.classList.add("column");
      div2.setAttribute("style", " background: pink; ");
      div1.append(div2);
      div2.onmouseover = function () {
        div2.setAttribute("style", " background: blue; ");
      };
    }
  }
}

const btn0 = document.querySelector(".clear");
btn0.addEventListener("click", function () {});

const btn1 = document.querySelector(".size");
btn1.addEventListener("click", function () {
  makeDiv();
});

const btn2 = document.querySelector(".pen");

btn2.addEventListener("click", function () {
  pen();
});

const btn3 = document.querySelector(".eraser");
btn3.addEventListener("click", function () {
  eraser();
});

function pen(params) {
  div2.onmouseover = function () {
    div2.setAttribute("style", " background: red; ");
  };
}

function eraser(params) {
  div2.onmouseover = function () {
    div2.setAttribute("style", " background: pink; ");
  };
}
