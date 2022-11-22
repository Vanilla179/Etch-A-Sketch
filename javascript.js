const container = document.querySelector(".container");

for (let i = 0; i < 20; i++) {
  const div1 = document.createElement("div");
  div1.classList.add("row");
  div1.setAttribute("style", "color: blue; background: pink; ");
  container.appendChild(div1);
  for (let a = 0; a < 20; a++) {
    const div2 = document.createElement("div");
    div2.classList.add("column");
    div2.setAttribute("style", "color: blue; background: pink; ");
    div1.appendChild(div2);
  }
}
