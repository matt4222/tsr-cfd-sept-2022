import { x0, r0, y0, svgns } from "./constants";
import { Point } from "./interfaces/Point";

export const getAngle = (i: number, samples: number) => {
  return (i * 2 * Math.PI) / samples;
};

export const getCirclePoint = (angle: number): Point => {
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);
  return { x: x, y: y };
};

export const querySelector = (cssSelector: string) => {
  const elt = document.querySelector(cssSelector);
  if (elt === null) {
    throw new Error(`Cannot find element with selector: ${cssSelector}`);
  }
  return elt;
};

const lineContainer = querySelector("svg g.lines");

export const drawLine = (p1: Point, p2: Point): void => {
  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", p1.x + "");
  line.setAttributeNS(null, "y1", p1.y + "");
  line.setAttributeNS(null, "x2", p2.x + "");
  line.setAttributeNS(null, "y2", p2.y + "");
  lineContainer.appendChild(line);
};
