import SequenceNode from "./node/sequence";
import DelayAction from "./action/delay";
import EventAction from "./action/event";
import Updater from "./updater/updater";
import RepeatShortcut from "./shortcut/repeat-shortcut";
import RepeatNode from "./node/repeat";
import SequenceShortcut from "./shortcut/sequence-shortcut";

document.getElementById('app').innerHTML="13333111"

class qf {
  static delay(seconds, callback) {
    const sequence = new SequenceNode();
    sequence.add(new DelayAction(seconds));
    sequence.add(new EventAction(callback));
    const updater = new Updater(sequence);

    return updater.start();
  }

  static repeat(time = -1) {
    return new RepeatShortcut(new RepeatNode(time));
  }

  static sequence() {
    return new SequenceShortcut();
  }
}

const repeat = qf
  .repeat()
  .delay(30, () => {
    console.log("log per 30s");
  })
  .start();

// stop
repeat.stop();

// destroy
// repeat.dispose();

qf.sequence()
  .delay(5, () => {
    console.log("leg after 5s");
  })
  .promise(() => new Promise(() => null).then().catch())
  .start();

qf.delay(10, () => {
  console.log("simple delay after 10s");
});

export default qf;
