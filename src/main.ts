import "./style.scss";

import { Config } from "./interfaces/Config";
import { Board } from "./Board";
import { Command } from "./Command";

const config: Config = {
  samples: 10,
  multiplicationFactor: 2,
  size: 300,
};

const board = new Board(config);
board.draw();

const command = new Command(config);
command.onUpdate((newConfig) => {
  board.setConfig(newConfig);
  board.draw();
});
