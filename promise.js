export default class MyPromise {
  static PENDING = 'pending';
  static SUCCESS = 'fulfilled';
  static REJECTED = 'rejected';
  constructor(executor) {
    this.result = null;
    this.status = MyPromise.PENDING;
    this.resolveCallback = [];
    this.rejectCallback = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (err) {
      this.reject(err);
    }
  }
  resolve(res) {
    if (this.status === MyPromise.PENDING) {
      setTimeout(() => {
        this.status = MyPromise.SUCCESS;
        this.result = res;
        this.resolveCallback.forEach((cb) => cb(res));
      });
    }
  }
  reject(reason) {
    if (this.status === MyPromise.PENDING) {
      setTimeout(() => {
        this.status = MyPromise.REJECTED;
        this.result = reason;
        this.rejectCallback.forEach((cb) => cb(reason));
      });
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {};
    onRejected = typeof onRejected === 'function' ? onRejected : () => {};
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        this.resolveCallback.push(onFulfilled);
        this.rejectCallback.push(onRejected);
      }
      if (this.status === MyPromise.SUCCESS) {
        onFulfilled(this.result);
      }
      if (this.status === MyPromise.REJECTED) {
        onRejected(this.result);
      }
    });
  }
}
