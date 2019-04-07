import Action from "./action";

export default class PromiseAction extends Action {
  promiseGetter = () => Promise;

  constructor(promiseGetter = () => Promise) {
    super();
    this.promiseGetter = promiseGetter;
  }

  onBegan() {
    this.promiseGetter()
      .finally(() => {
        this.finished = true;
        return null;
      })
      .catch();
  }
}
