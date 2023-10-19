// Areas
const adjustments = document.getElementById("adjustArea");
const monitor = document.getElementById("monitor");
const dullObject = document.getElementById("dullObject");

// Adjust instruments
const ranges = document.querySelectorAll(".shadow-adjust");
const values = document.querySelectorAll(".shadow-value");

// Color Section
const colors = document.querySelectorAll(".clr-value");

//Drag element
const drag = document.getElementById('dragElement');

for (let i = 0; i < values.length; i++) {
  values[i].addEventListener("input", function () {
    ranges[0].value = values[0].value;
    ranges[1].value = values[1].value;
    ranges[2].value = values[2].value;
    ranges[3].value = values[3].value;
    console.log(ranges[0]);
    monitorize();
  });

  ranges[i].addEventListener("input", function () {
    values[0].value = ranges[0].value;
    values[1].value = ranges[1].value;
    values[2].value = ranges[2].value;
    values[3].value = ranges[3].value;
    monitorize();
  });
}

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("input", function () {
    const red = parseInt(colors[0].value.substr(1, 2), 16);
    const green = parseInt(colors[0].value.substr(3, 2), 16);
    const blue = parseInt(colors[0].value.substr(5, 2), 16);
    colors[1].value = red;
    colors[2].value = green;
    colors[3].value = blue;
    monitorize();
  });
}

const monitorize = function () {
  dullObject.style.boxShadow = `${values[0].value}px ${values[1].value}px ${values[2].value}px ${values[3].value}px rgb(${colors[1].value}, ${colors[2].value}, ${colors[3].value}, ${colors[4].value})`;
};

// Making our adjust section draggable.

let posX = 0;
let posY = 0;

drag.addEventListener(
  "mousedown",
  function (e) {
    e.preventDefault();
    posX = e.clientX - adjustments.offsetLeft;
    posY = e.clientY - adjustments.offsetTop;
    window.addEventListener("mousemove", moveElement, false);
  },
  false
);

window.addEventListener(
  "mouseup",
  function () {
    window.removeEventListener("mousemove", moveElement, false);
  },
  false
);

const moveElement = function (e) {
  const mouseX = e.clientX - posX;
  const mouseY = e.clientY - posY;
  adjustments.style.left = mouseX + "px";
  adjustments.style.top = mouseY + "px";
};
