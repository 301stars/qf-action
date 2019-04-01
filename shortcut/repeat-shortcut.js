import RepeatNode from "../node/repeat";
import Updater from "../updater/updater";
import DelayAction from "../action/delay";
import EventAction from "../action/event";


export default class RepeatShortcut {

  repeatNode: RepeatNode;

  updater: Updater;

  constructor(repeatNode) {
    this.repeatNode = repeatNode;

    this.updater = new Updater(this.repeatNode);
  }

  start() {
    this.updater.start();
    return this;
  }

  delay(seconds, callback) {
    this.repeatNode.add(new DelayAction(seconds));
    this.repeatNode.add(new EventAction(callback));
    return this;
  }

  stop() {
    this.updater.stop()
    return this;
  }
}
