import Action from "./action";


export default class CustomAction extends Action {

  onBeganCallback: ()=>void;

  onExecuteFunc: ()=>boolean;

  onFinishCallback: ()=>void;

  constructor(onBeganCallback: ()=>void, onExecuteFunc: ()=>boolean, onFinishCallback: ()=>void) {
    super()
    this.onBeganCallback = onExecuteFunc;
    this.onExecuteFunc = onExecuteFunc;
    this.onFinishCallback = onFinishCallback;
  }

  BeganCallback(onBeganCallback: ()=>void) {
    this.onBeganCallback = onBeganCallback;
  }

  ExecuteFunc(onExecuteFunc: ()=>boolean) {
    this.onExecuteFunc = onExecuteFunc;
  }

  FinishCallback(onFinishCallback: ()=>void) {
    this.onFinishCallback = onFinishCallback;
  }


  onBegan() {
    if (this.onBeganCallback) {
      this.onBeganCallback();
    }
  }

  onExecute(dt) {
    if (this.onExecuteFunc) {
      this.finished = this.onExecuteFunc();
    }
  }

  onFinish() {
    if (this.onFinishCallback) {
      this.onFinishCallback();
    }
  }
}
