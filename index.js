//* Areas
const adjustments = document.getElementById("adjustArea");
const monitor = document.getElementById("monitor");
const dullObject = document.getElementById("dullObject");

//*Shadow Adjust instruments
const ranges = document.querySelectorAll(".shadow-adjust");
const values = document.querySelectorAll(".shadow-value");

//* Color Section
const colors = document.querySelectorAll(".clr-value");

//*Drag element
const drag = document.getElementById("dragElement");

//*Box Drawer
const boxDrawer = document.getElementById("box-drawer");
const boxDiv = document.getElementById("box-div");
const arrow = document.getElementById("arrow");

//*Box Adjust instruments
const boxRanges = document.querySelectorAll(".box-adjust");
const boxValues = document.querySelectorAll(".box-value");
//*Color Adjust instruments
const boxColor = document.getElementById("box-color");
const bgColor = document.getElementById("bg-color");

//! Color Change Events
boxColor.addEventListener("input", () => {
  dullObject.style.background = boxColor.value;
});
bgColor.addEventListener("input", () => {
  monitor.style.background = bgColor.value;
});

//! Making input numbers equal to ranges in Box Adjustments Div
for (let i = 0; i < boxValues.length; i++) {
  boxValues[i].addEventListener("input", function () {
    boxRanges[0].value = boxValues[0].value;
    boxRanges[1].value = boxValues[1].value;
    boxRanges[2].value = boxValues[2].value;
    boxRanges[3].value = boxValues[3].value;
    monitorize();
  });
  //! Vice Versa
  boxRanges[i].addEventListener("input", function () {
    boxValues[0].value = boxRanges[0].value;
    boxValues[1].value = boxRanges[1].value;
    boxValues[2].value = boxRanges[2].value;
    boxValues[3].value = boxRanges[3].value;
    monitorize();
  });
}
let winWidth = window.innerWidth;
window.addEventListener('resize', () => {
  winWidth = window.innerWidth
  if(winWidth > 400) {
    if (boxDiv.style.transform == "translateX(-80px)") {
      boxDiv.style.transform = "translateX(0px)";
    }else if (boxDiv.style.transform == "translateX(70px)") {
      boxDiv.style.transform = "translateX(250px)"
    }
    boxDiv.style.left = '50px';

  }
  if (winWidth < 400) {
    adjustments.style.left = '0px';
    adjustments.style.top = '80px';
    boxDiv.style.left = '80px';
    boxDiv.style.top = '100px';
    if (boxDiv.style.transform == "translateX(250px)"){
      boxDiv.style.transform = "translateX(70px)";
    }else if (boxDiv.style.transform == "translateX(0px)"){
      boxDiv.style.transform = "translateX(-80px)";
    }
  }
})

//! Drawer
boxDrawer.addEventListener("click", () => {
  if (winWidth > 400) {
    if (boxDiv.style.transform == "translateX(250px)") {
      boxDiv.classList.add("trans");
      const removeTransition = setTimeout(remTrans, 400);
      boxDiv.style.transform = "translateX(0px)";
      arrow.style.transform = "rotate(0deg)";
    } else {
      boxDiv.classList.add("trans");
      const removeTransition = setTimeout(remTrans, 400);
      boxDiv.style.transform = "translateX(250px)";
      arrow.style.transform = "rotate(180deg)";
    }

  } else {
    if (boxDiv.style.transform == "translateX(70px)") {
      boxDiv.classList.add("trans");
      const removeTransition = setTimeout(remTrans, 400);
      boxDiv.style.transform = "translateX(-80px)";
      arrow.style.transform = "rotate(0deg)";
    } else {
      boxDiv.classList.add("trans");
      const removeTransition = setTimeout(remTrans, 400);
      boxDiv.style.transform = "translateX(70px)";
      arrow.style.transform = "rotate(180deg)";
    }
  }
});
function remTrans() {
  boxDiv.classList.remove("trans");
}

//! Making input numbers equal to ranges in Shadow Adjustments div
for (let i = 0; i < values.length; i++) {
  values[i].addEventListener("input", function () {
    ranges[0].value = values[0].value;
    ranges[1].value = values[1].value;
    ranges[2].value = values[2].value;
    ranges[3].value = values[3].value;
    console.log(ranges[0]);
    monitorize();
  });
  //! Vice Versa
  ranges[i].addEventListener("input", function () {
    values[0].value = ranges[0].value;
    values[1].value = ranges[1].value;
    values[2].value = ranges[2].value;
    values[3].value = ranges[3].value;
    monitorize();
  });
}

//! Colors
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

//! Monitoring the changes
const monitorize = function () {
  dullObject.style.boxShadow = `${values[0].value}px ${values[1].value}px ${values[2].value}px ${values[3].value}px rgb(${colors[1].value}, ${colors[2].value}, ${colors[3].value}, ${colors[4].value})`;
  dullObject.style.borderRadius = boxValues[2].value + "px";
  dullObject.style.width = boxValues[0].value + "px";
  dullObject.style.height = boxValues[1].value + "px";
  dullObject.style.transform = `translateX(${boxValues[3].value}%)`;
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
  boxDiv.style.left = mouseX + 50 + "px";
  boxDiv.style.top = mouseY + 60 + "px";
};

//Show Code Elements
const codeDiv = document.getElementById("show-div"); //Code Div
const showCodeBtn = document.getElementById("show-code"); //Button in the nav
const code = document.getElementById("code-part"); //Div that shows the code
const closeCodeBtn = document.getElementById("close-btn"); //Close Button
const filter = document.getElementById("filter"); //Filter
const copyBtn = document.getElementById("copy"); //Copy button

showCodeBtn.addEventListener("click", function () {
  code.innerText = `box-shadow: ${values[0].value}px ${values[1].value}px ${values[2].value}px ${values[3].value}px rgb(${colors[1].value}, ${colors[2].value}, ${colors[3].value}, ${colors[4].value})`;
  filter.classList.remove("display-none");
  codeDiv.classList.remove("display-none");
  copyBtn.innerText = "Copy";
  copyBtn.style.background = "rgb(2, 117, 255)";
});

closeCodeBtn.addEventListener("click", closeCodeDiv);

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(code.innerText);
  copyBtn.style.background = "rgb(67, 226, 59)";
  copyBtn.innerText = "Copied!";
  setTimeout(closeCodeDiv,500)
});

function closeCodeDiv() {
  filter.classList.add("display-none");
  codeDiv.classList.add("display-none");
}
