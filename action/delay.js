import Action from "./action";

export default class DelayAction extends Action {

  constructor(delayTime) {
    super();
    this.delayTime = delayTime;
  }

  delayTime = 0;

  currentTime = 0;

  onExecute(dt) {
    if (this.currentTime < this.delayTime) {
      this.currentTime += dt;
    }

    this.finished = this.currentTime > this.delayTime;
  }

  onReset() {
    this.currentTime = 0;
  }
}
