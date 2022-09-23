import { Config } from "./interfaces/Config";

type CallbackFn = (newConfig: Config) => void;

export class Command {
  callback: CallbackFn = () => {};
  constructor(public config: Config) {}

  onUpdate(callback: CallbackFn) {
    this.callback = callback;
  }
}
