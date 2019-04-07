import Action from "./action";

export default class CustomAction extends Action {
  onExecuteFunc = () => false;

  constructor(
    onBeganCallback = () => {},
    onExecuteFunc = () => fasle,
    onFinishCallback = () => {}
  ) {
    super();
    this.beganCallback(onBeganCallback);
    this.onExecuteFunc = onExecuteFunc;
    this.finishCallback(onFinishCallback);
  }

  onExecute(dt) {
    if (this.onExecuteFunc) {
      this.finished = this.onExecuteFunc();
    }
  }
}
