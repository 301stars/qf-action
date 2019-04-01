import Action from "../action/action";


export default class SequenceNode extends Action {

  actions = [];

  executingActions = [];

  add(action) {
    this.actions.push(action);
  }

  onBegan() {
    this.executingActions = this.actions.slice(0);
  }

  onReset() {
    this.actions.map(action => {
      action.reset();
      return action;
    })
  }

  onExecute(dt) {
    if (this.executingActions.length > 0) {
      const task = this.executingActions[0]

      if (!task.finished) {
        task.execute(dt);
      }

      if (task.finished) {
        this.executingActions.shift();
      }
    }

    this.finished = (this.executingActions.length === 0);
  }


  // extensions


}
