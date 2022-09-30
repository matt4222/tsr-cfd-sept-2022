import { r, r0, x0, y0 } from "./constants";
import { Config } from "./interfaces/Config";
import { Point } from "./interfaces/Point";
import { getAngle, getCirclePoint, querySelector } from "./utils";

export class Board {
  config: Config = {
    samples: 50,
    multiplicationFactor: 3,
  };

  clean() {
    const canvas: HTMLCanvasElement = querySelector("canvas");
    if (canvas.getContext !== null) {
      const ctx = canvas.getContext("2d");
      if (ctx === null) {
        throw new Error("ctx not exist.");
      }

      ctx.clearRect(0, 0, 400, 400);
    }
  }

  draw() {
    this.clean();
    this.drawCirle();
    this.drawSamplePoints();
    this.drawLines();
  }

  drawCirle() {
    const canvas: HTMLCanvasElement = querySelector("canvas");
    if (canvas.getContext !== null) {
      const ctx = canvas.getContext("2d");
      if (ctx === null) {
        throw new Error("ctx not exist.");
      }

      ctx.beginPath();
      ctx.arc(x0, y0, r0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  drawLines() {
    const samples = this.config.samples;
    for (let i = 0; i < samples; i++) {
      const angle1 = getAngle(i, samples);
      const p1 = getCirclePoint(angle1);
      const angle2 = getAngle(i * this.config.multiplicationFactor, samples);
      const p2 = getCirclePoint(angle2);
      this.drawLine(p1, p2);
    }
  }

  drawLine(p1: Point, p2: Point): void {
    const canvas: HTMLCanvasElement = querySelector("canvas");
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

    const canvas: HTMLCanvasElement = querySelector("canvas");
    if (canvas.getContext !== null) {
      const ctx = canvas.getContext("2d");
      if (ctx === null) {
        throw new Error("ctx not exist.");
      }

      for (let i = 0; i < samples; i++) {
        const angle = getAngle(i, samples);
        const { x, y } = getCirclePoint(angle);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
