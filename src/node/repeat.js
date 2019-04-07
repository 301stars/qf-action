import Action from "../action/action";
import SequenceNode from "./sequence";


export default class RepeatNode extends Action {
  sequence = new SequenceNode();

  times = -1;

  constructor(times = -1) {
    super();

    this.times = times;

    this.sequence = new SequenceNode();
  }

  onExecute(dt) {
    if (!this.sequence.finished) {
      this.sequence.execute(dt);
    }

    if (this.sequence.finished) {
      this.sequence.reset()
    }
  }

  add(action) {
    this.sequence.add(action);
  }
}
