// Areas
const adjustments = document.getElementById("adjustArea");
const monitor = document.getElementById("monitor");
const dullObject = document.getElementById("dullObject");

// Adjust instruments
const offSetX = document.getElementById("of-x-s");
const offSetXNumber = document.getElementById("of-x-n");
const offSetY = document.getElementById("of-y-s");
const offSetYNumber = document.getElementById("of-y-n");
const blur = document.getElementById("b-s");
const blurNumber = document.getElementById("b-n");
const spread = document.getElementById("s-s");
const spreadNumber = document.getElementById("s-n");
const color = document.getElementById("color");
const colorAlpha = document.getElementById("colorAlpha");

const ranges = document.querySelectorAll(".shadow-adjust");
const values = document.querySelectorAll(".shadow-value");

for (let i = 0; i < values.length; i++) {
  values[i].addEventListener("input", function () {
    offSetX.value = offSetXNumber.value;
    offSetY.value = offSetYNumber.value;
    blur.value = blurNumber.value;
    spread.valueNumber = spread.value;
    monitorize();
  });
}

for (let i = 0; i < ranges.length; i++) {
  ranges[i].addEventListener("input", function () {
    offSetXNumber.value = offSetX.value;
    offSetYNumber.value = offSetY.value;
    blurNumber.value = blur.value;
    spreadNumber.value = spread.value;
    monitorize();
  });
}

const monitorize = function () {
  dullObject.style.boxShadow = `${values[0].value}px ${values[1].value}px ${values[2].value}px ${values[3].value}px ${color.value}`;
};
