import { Point } from "./interfaces/Point";

export const getAngle = (i: number, samples: number) => {
  return (i * 2 * Math.PI) / samples - Math.PI / 2;
};

export const getCirclePoint = (
  x0: number,
  y0: number,
  r0: number,
  angle: number
): Point => {
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);
  return { x: x, y: y };
};

export const querySelector = <T extends Element>(
  cssSelector: string,
  type?: new () => T
) => {
  const elt = document.querySelector(cssSelector);
  if (elt === null) {
    throw new Error(`Cannot find element with selector: ${cssSelector}`);
  }
  if (type && !(elt instanceof type)) {
    throw new Error(
      `Cannot find element of type ${type} with selector: ${cssSelector}`
    );
  }
  return elt as T;
};

export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
