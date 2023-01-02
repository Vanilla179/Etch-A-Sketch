// Variables for elements in the DOM
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const btn1 = document.querySelector(".size");
const btn2 = document.querySelector(".pen");
const btn3 = document.querySelector(".eraser");
const btn4 = document.querySelector(".clear");

// Function to create a grid of divs based on user input
function makeDiv() {
  // Clear the current grid
  container.innerHTML = "";

  let Number;
  Number = prompt("Please enter a number");

  if (Number > 100) {
    return;
  }

  // Create rows and columns of divs
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

// Function to apply color to div
function applyColor(div2) {
  div2.onmouseover = function () {
    div2.setAttribute("style", " background:  #24264D;  ");
  };
}

// Function to erase color from div
function eraseColor(div2) {
  div2.onmouseover = function () {
    div2.setAttribute("style", " background: #ededed; ");
  };
}

// Button to Clear grid color from divs
function Clear(div2) {
  div2.setAttribute("style", " background: #ededed; ");
}

// Button to create a new grid
btn1.addEventListener("click", function () {
  makeDiv();
});

// Button to apply color to divs
btn2.addEventListener("click", function () {
  // Select all columns and apply color on mouseover
  const div2Elements = document.querySelectorAll(".column");
  div2Elements.forEach((div2) => applyColor(div2));
});

// Button to erase color from divs
btn3.addEventListener("click", function () {
  // Select all columns and erase color on mouseover
  const div3Elements = document.querySelectorAll(".column");
  div3Elements.forEach((div2) => eraseColor(div2));
});

// Button to clear color from divs
btn4.addEventListener("click", function () {
  // Select all columns and erase color on mouseover
  const div4Elements = document.querySelectorAll(".column");
  div4Elements.forEach((div2) => Clear(div2));
});
