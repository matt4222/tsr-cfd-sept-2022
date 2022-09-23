import "./style.scss";

import { x0, r0, y0, r } from "./constants";
import { drawLine, getAngle, getCirclePoint } from "./utils";
import { Config } from "./interfaces/Config";
import { Board } from "./Board";

///////////////
const board = new Board();
const config: Config = {
  samples: 10,
  multiplicationFactor: 6,
};
board.setConfig(config);
board.draw();

/////////////
