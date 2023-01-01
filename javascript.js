const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");

function makeDiv(params) {
  container.innerHTML = ""; // Clear the current grid
  let Number;
  Number = prompt("Please enter a number");

  if (Number > 100) {
    return;
  }

  for (let i = 0; i < Number; i++) {
    const div1 = document.createElement("div");
    div1.classList.add("row");
    div1.setAttribute("style", " background: #ededed; ");
    container.append(div1);

    for (let a = 0; a < Number; a++) {
      const div2 = document.createElement("div");
      div2.classList.add("column");
      div2.setAttribute("style", " background: #ededed; ");
      div1.append(div2);
    }
  }
}

const btn1 = document.querySelector(".size");
btn1.addEventListener("click", function () {
  makeDiv();
});

const btn2 = document.querySelector(".pen");
btn2.addEventListener("click", function () {
  const div2Elements = document.querySelectorAll(".column");
  div2Elements.forEach((div2) => pen(div2));
});

const btn3 = document.querySelector(".eraser");
btn3.addEventListener("click", function () {
  const div3Elements = document.querySelectorAll(".column");
  div3Elements.forEach((div2) => eraser(div2));
});

function pen(div2) {
  div2.onmouseover = function () {
    div2.setAttribute("style", " background:  #24264D;  ");
  };
}

function eraser(div2) {
  div2.onmouseover = function () {
    div2.setAttribute("style", " background: #ededed; ");
  };
}
