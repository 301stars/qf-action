export default class Action {
  finished = false;

  began() {
    if (this.onBeganCallback) {
      this.onBeganCallback();
    }

    this.onBegan();

    this.beganed = true;
  }

  execute(dt) {
    if (!this.beganed) {
      this.began();
    }

    this.onExecute(dt);

    if (!this.onFinishCalled && this.finished) {
      this.finish();
    }
  }

  reset() {
    this.finished = false;
    this.beganed = false;
    this.onFinishCalled = false;
    this.onReset();
  }

  // 支持子类 Action 主动调用，也支持内部自动触发
  finish() {
    if (this.onFinishCallback) {
      this.onFinishCallback();
    }
    this.onFinish();
    this.onFinishCalled = true;
    this.finished = true;
  }

  onFinishCalled = false;

  beganed = false;

  onBegan() {}

  onFinish() {}

  onReset() {}

  onExecute(dt) {}

  onFinishCallback() {
    console.error("需要自己实现");
  }

  onBeganCallback() {
    console.error("需要自己实现");
  }

  finishCallback(onFinishCallback = () => {}) {
    this.onFinishCallback = onFinishCallback;
  }

  beganCallback(onBeganCallback = () => {}) {
    this.onBeganCallback = onBeganCallback;
  }
}
