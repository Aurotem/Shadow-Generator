// Areas
const adjustments = document.getElementById('adjustArea');
const monitor = document.getElementById('monitor');
const dullObject = document.getElementById('dullObject');

// Adjust instruments
const offSetX = document.getElementById('of-x-s');
const offSetXNumber = document.getElementById('of-x-n');
const offSetY = document.getElementById('of-y-s');
const offSetYNumber = document.getElementById('of-y-n');
const blur = document.getElementById('b-s');
const blurNumber = document.getElementById('b-n');
const spread = document.getElementById('s-s');
const spreadNumber = document.getElementById('s-n');
const color = document.getElementById('color');
const colorAlpha = document.getElementById('colorAlpha');

dullObject.style.boxShadow = `${offSetX.value}px ${offSetY.value}px ${blur.value}px ${spread}px ${color}`;