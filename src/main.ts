import "./style.scss";

import { Board } from "./Board";
import { Command } from "./Command";
import { Config } from "./interfaces/Config";

const board = new Board();
const config: Config = {
  samples: 10,
  multiplicationFactor: 1,
};
board.setConfig(config);
board.draw();

const command = new Command(config);
command.onUpdate((newConfig) => {
  board.setConfig(newConfig);
  board.draw();
});
