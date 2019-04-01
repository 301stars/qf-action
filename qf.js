import SequenceNode from "./node/sequence";
import DelayAction from "./action/delay";
import EventAction from "./action/event";
import Updater from "./updater/updater";
import RepeatShortcut from "./shortcut/repeat-shortcut";
import RepeatNode from "./node/repeat";
import SequenceShortcut from "./shortcut/sequence-shortcut";

class qf {

  static delay(seconds, callback) {
    const sequence = new SequenceNode();
    sequence.add(new DelayAction(seconds));
    sequence.add(new EventAction(callback));
    const updater = new Updater(sequence);

    return updater.start()
  }

  static repeat(time = -1) {
    return new RepeatShortcut(new RepeatNode(time));
  }

  static sequence() {
    return new SequenceShortcut();
  }
}

export default qf;
