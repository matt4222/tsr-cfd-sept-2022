import { Config } from "./interfaces/Config";
import { querySelector, sleep } from "./utils";

type CallbackFn = (newConfig: Config) => void;

export class Command {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  callback: CallbackFn = () => {};
  isPlaying = false;

  constructor(public config: Config) {
    this.render();
    this.setActions();
  }

  onUpdate(callback: CallbackFn) {
    this.callback = callback;
  }

  async play() {
    while (this.isPlaying) {
      const f = this.config.multiplicationFactor + 0.01;
      this.config.multiplicationFactor = (Math.round(f * 1e2) / 1e2) % 100;

      this.render();
      this.callback(this.config);
      await sleep(18);
    }
  }

  render() {
    const keys: (keyof Config)[] = ["samples", "multiplicationFactor", "size"];
    for (const key of keys) {
      const elt = querySelector(`div.command label.${key} span`);
      elt.innerHTML = this.config[key] + "";
      const inputElement = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      inputElement.value = this.config[key] + "";
    }
    const button = querySelector("div.command button");
    button.innerHTML = this.isPlaying ? "Pause" : "Play";
  }

  setActions() {
    const keys: (keyof Config)[] = ["samples", "multiplicationFactor", "size"];
    for (const key of keys) {
      const inputElement = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      inputElement.addEventListener("input", () => {
        this.config[key] = +inputElement.value;
        this.render();
        this.callback(this.config);
      });
    }

    const button = querySelector("div.command button");
    button.addEventListener("click", () => {
      this.isPlaying = !this.isPlaying;
      this.render();
      if (this.isPlaying) {
        this.play();
      }
    });
  }
}
