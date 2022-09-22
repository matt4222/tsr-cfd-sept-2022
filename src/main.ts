import "./style.css";

import { x0, r0, y0, r } from "./constants";

const samples = 10;

console.log("start");

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");
if (container === null) {
  throw new Error("container not found.");
}
for (let i = 0; i < samples; i++) {
  const angle = (i * 2 * Math.PI) / samples;
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", String(y));
  circle.setAttributeNS(null, "r", r.toString());
  container.appendChild(circle);
}
