import { Config } from "./interfaces/Config";
import { Point } from "./interfaces/Point";
import { getAngle, getCirclePoint, querySelector } from "./utils";

export class Board {
  x0: number;
  r0: number;
  r = 3;

  constructor(public config: Config) {
    this.x0 = this.config.size / 2;
    this.r0 = this.x0 * 0.9;
  }

  clean() {
    const canvas = querySelector("canvas", HTMLCanvasElement);
    if (canvas.getContext !== null) {
      const ctx = canvas.getContext("2d");
      if (ctx === null) {
        throw new Error("ctx not exist.");
      }

      ctx.clearRect(0, 0, this.config.size, this.config.size);
    }
  }

  draw() {
    this.clean();
    this.drawCanvas();
    this.drawCirle();
    this.drawSamplePoints();
    this.drawLines();
  }

  drawCanvas() {
    const element = querySelector("canvas", HTMLCanvasElement);
    element.width = this.config.size;
    element.height = this.config.size;
  }

  drawCirle() {
    const canvas = querySelector("canvas", HTMLCanvasElement);
    if (canvas.getContext !== null) {
      const ctx = canvas.getContext("2d");
      if (ctx === null) {
        throw new Error("ctx not exist.");
      }

      ctx.beginPath();
      ctx.arc(this.x0, this.x0, this.r0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  drawLines() {
    const samples = this.config.samples;
    for (let i = 0; i < samples; i++) {
      const angle1 = getAngle(i, samples);
      const p1 = getCirclePoint(this.x0, this.x0, this.r0, angle1);
      const angle2 = getAngle(i * this.config.multiplicationFactor, samples);
      const p2 = getCirclePoint(this.x0, this.x0, this.r0, angle2);
      this.drawLine(p1, p2);
    }
  }

  drawLine(p1: Point, p2: Point): void {
    const canvas = querySelector("canvas", HTMLCanvasElement);
    if (canvas.getContext !== null) {
      const ctx = canvas.getContext("2d");
      if (ctx === null) {
        throw new Error("ctx not exist.");
      }

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }
  }

  drawSamplePoints() {
    const samples = this.config.samples;

    const canvas = querySelector("canvas", HTMLCanvasElement);
    if (canvas.getContext !== null) {
      const ctx = canvas.getContext("2d");
      if (ctx === null) {
        throw new Error("ctx not exist.");
      }

      for (let i = 0; i < samples; i++) {
        const angle = getAngle(i, samples);
        const { x, y } = getCirclePoint(this.x0, this.x0, this.r0, angle);

        ctx.beginPath();
        ctx.arc(x, y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }
  }

  setConfig(config: Config) {
    this.config = config;

    this.x0 = this.config.size / 2;
    this.r0 = this.x0 * 0.9;
  }
}
