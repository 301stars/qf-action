import Action from "./action";

export default class EventAction extends Action {
  constructor(onEvent) {
    super();

    this.onEvent = onEvent;
  }

  onExecute(dt) {
    if (!this.finished) {
      this.onEvent();
      this.finished = true;
    }
  }
}
