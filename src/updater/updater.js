import GlobalUpdater from "./global-updater";
import Action from "../action/action";

export default class Updater {

  running = false;

  rootActio = new Action();

  constructor(rootAction) {
    this.rootAction = rootAction;
  }

  start() {
    GlobalUpdater.add(this);
    return this;
  }

  update(dt) {
    if (!this.rootAction.finished) {
      this.rootAction.execute(dt)
    }
  }

  stop() {
    GlobalUpdater.remove(this);
    return this;
  }

  dispose() {
    this.rootAction = null;
  }
}
