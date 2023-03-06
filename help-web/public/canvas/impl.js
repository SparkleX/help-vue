var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.translate(400.5, 400.5);

function lineTo(x, y) {
  ctx.lineTo(x * 100, -y * 100);
}
function moveTo(x, y) {
  ctx.moveTo(x * 100, -y * 100);
}

ctx.strokeStyle = "#afffaf";
for (let x = -4.0; x < 4.1; x = x + 0.1) {
  moveTo(x, -4.0);
  lineTo(x, 4);
}
for (let y = -4.0; y < 4.1; y = y + 0.1) {
  moveTo(-4, y);
  lineTo(4, y);
}

ctx.stroke();

ctx.beginPath();
ctx.font = "15px Tahoma";
for (let x = -4; x < 3.1; x = x + 1) {
  ctx.fillText(x, x * 100 - 5 + ((x==0)?5:0), 15);
}

for (let y = -3; y < 3.1; y = y + 1) {
  if (y == 0) continue;
  ctx.fillText(y, 10, -y * 100 + 5);
}

ctx.strokeStyle = "red";
ctx.beginPath();

moveTo(-4, 0);
lineTo(4, 0);
moveTo(0, -4);
lineTo(0, 4);

moveTo(3.9, 0.05);
lineTo(4, 0);
lineTo(3.9, -0.05);
moveTo(0.05, 3.9);
lineTo(0, 4);
lineTo(-0.05, 3.9);

for (let x = -3.9; x < 3.9; x = x + 0.1) {
  moveTo(x, 0);
  lineTo(x, 0.05);
}
for (let y = -3.9; y < 3.9; y = y + 0.1) {
  moveTo(0, y);
  lineTo(0.05, y);
}
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
moveTo(-2, 4);
for (let x = -2.0; x < 2.1; x = x + 0.1) {
  let y = x * x;
  lineTo(x, y);
}
ctx.stroke();
