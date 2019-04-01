import Action from "./action";


export default class CustomAction extends Action {

  onExecuteFunc: ()=>boolean;

  constructor(onBeganCallback: ()=>void, onExecuteFunc: ()=>boolean, onFinishCallback: ()=>void) {
    super()
    this.beganCallback(onBeganCallback);
    this.onExecuteFunc = onExecuteFunc;
    this.finishCallback(onFinishCallback)
  }

  onExecute(dt) {
    if (this.onExecuteFunc) {
      this.finished = this.onExecuteFunc();
    }
  }
}
