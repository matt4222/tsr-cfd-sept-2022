import { r, svgns } from "./constants";
import { Config } from "./interfaces/Config";
import { getAngle, getCirclePoint, querySelector } from "./utils";

export class Board {
  config: Config = {
    samples: 50,
    multiplicationFactor: 3,
  };

  clean() {
    querySelector("svg g.samples").innerHTML = "";
    querySelector("svg g.lines").innerHTML = "";
  }

  draw() {
    this.clean();
    this.drawSamplePoints();
    this.drawLines();
  }

  drawLines() {
    throw new Error("Method not implemented.");
  }

  drawSamplePoints() {
    const samples = this.config.samples;

    console.log("start");

    const container = querySelector("g.samples");

    for (let i = 0; i < samples; i++) {
      const angle = getAngle(i, samples);
      const { x, y } = getCirclePoint(angle);

      const circle = document.createElementNS(svgns, "circle");
      circle.setAttributeNS(null, "cx", x + "");
      circle.setAttributeNS(null, "cy", String(y));
      circle.setAttributeNS(null, "r", r.toString());
      container.appendChild(circle);
    }
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
