

export default class GlobalUpdater {

  static running = false;

  static lastTime = 0;

  static updaters = [];

  static update() {

    const now = Date.now()
    const dt = (now - GlobalUpdater.lastTime) * 0.001;
    GlobalUpdater.lastTime = now;

    if (GlobalUpdater.updaters !== undefined && GlobalUpdater.updaters.length > 0) {

      for (let i = 0; i < GlobalUpdater.updaters.length; i += 1) {
        GlobalUpdater.updaters[i].update(dt)
      }
    }

  }

  static add(updater) {
    GlobalUpdater.updaters.push(updater)
  }

  static remove(toRemovedUpdater) {
    GlobalUpdater.updaters = GlobalUpdater.updaters.filter(updater => updater !== toRemovedUpdater)
  }

  static dispose() {
    GlobalUpdater.updaters = [];
  }
}

GlobalUpdater.lastTime = Date.now()
GlobalUpdater.updaters = [];

if (!GlobalUpdater.running) {
  setInterval(GlobalUpdater.update, 10)
  GlobalUpdater.running = true;
}
