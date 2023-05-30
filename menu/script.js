import { menu } from "./menu.js";
let main = document.querySelector("main");

function createElement({ id, title, category, price, img, desc }) {
  return `
  <div id="${id}" class="card" data-category=${category}>
    <div class="imgContainer">
    <img src="${img}" alt="${title} img">
    </div>
    <div class="txtContainer">
    <h3> ${title} <span>${price}</span> </h3>
    <hr>
    <p> ${desc}</p>
    </div>
  `;
}

menu.forEach((e) => main.insertAdjacentHTML("afterbegin", createElement(e)));

navbar.addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") return "";
  let target = e.target.dataset.category;
  let children = main.children;
  for (let elem of children) {
    if (target == "all") {
      elem.style.display = "flex";
      continue;
    }
    if (elem.dataset.category != target) {
      elem.style.display = "none";
      continue;
    }
    console.log(elem.dataset.category);
    elem.style.display = "flex ";
  }
});
