let body = document.body;

function simple() {
  let simpleArr = ["orangered", "limegreen", "#323437", "#242424"];

  return (bgName.textContent = body.style.backgroundColor =
    `${simpleArr[Math.floor(Math.random() * simpleArr.length)]}`);
}

function rgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return (bgName.textContent = body.style.backgroundColor =
    `rgb(${r}, ${g}, ${b})`);
}

function hex() {
  let hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexValue = "#";
  let i = hexArr.length;
  while (i--) {
    if (hexValue.length < 7) {
      hexValue += hexArr[Math.floor(Math.random() * hexArr.length)];
      continue;
    }
    break;
  }
  return (bgName.textContent = body.style.backgroundColor = hexValue);
}

modes.addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") return "";
  let target = e.target.dataset.mode;

  switch (target) {
    case "simple":
      modeName.textContent = "Simple";
      randomBtn.onclick = simple;
      break;
    case "rgb":
      modeName.textContent = "RGB";
      randomBtn.onclick = rgb;
      break;
    case "hex":
      modeName.textContent = "HEX";
      randomBtn.onclick = hex;
      break;
    default:
      console.log("Looks like u pressed wrong");
  }
});

randomBtn.onclick = simple;
