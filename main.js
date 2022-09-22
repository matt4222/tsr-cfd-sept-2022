console.log("start");

const samples = 10;
const r = 1;

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");
for (let i = 0; i < samples; i++) {
  const x = 47 + i * 5;
  const y = 32;

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x);
  circle.setAttributeNS(null, "cy", y);
  circle.setAttributeNS(null, "r", r);
  container.appendChild(circle);
}
