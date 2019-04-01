export default class Action {

  finished = false;

  onFinishCalled = false;

  beganed = false;

  onBegan() {}

  execute(dt) {

    if (!this.beganed) {
      this.onBegan()
      this.beganed = true;
    }

    this.onExecute(dt)

    if (!this.onFinishCalled && this.finished) {
      this.onFinish()
      this.onFinishCalled = true;
    }
  }

  reset() {
    this.finished = false;
    this.beganed = false;
    this.onFinishCalled = false;
    this.onReset();
  }

  onFinish() {}

  onReset() {}

  onExecute(dt) {}
}
