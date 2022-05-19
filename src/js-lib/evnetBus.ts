export default class EventBus {
  private events: {
    [key: string]: Array<{ fn: Function; isOnce: boolean }>;
  };
  constructor() {
    this.events = {};
  }
  on(name: string, cb: Function, isOnce: boolean = false) {
    if (!this.events[name]) this.events[name] = [];
    this.events[name].push({ fn: cb, isOnce });
  }
  once(name: string, cb: Function) {
    this.on(name, cb, true);
  }
  emit(name: string, ...args: any[]) {
    if (!this.events[name]) return;
    this.events[name] = this.events[name].filter((eventObj) => {
      eventObj.fn(...args);
      return !eventObj.isOnce;
    });
  }
  off(name: string, fn: Function) {
    if (fn) {
      this.events[name] = this.events[name].filter(
        (eventObj) => eventObj.fn !== fn
      );
    } else {
      this.events[name] = [];
    }
  }
}


const e = new EventBus();

function fn1(a: any, b: any){console.log('fn1', a, b)}
function fn2(a: any, b: any){console.log('fn2', a, b)}
function fn3(a: any, b: any){console.log('fn3', a, b)}

e.on('key1', fn1)
e.on('key1', fn2)
e.once('key1', fn3)

e.emit('key1', 10, 20)
e.emit('key1', 100, 200)

e.off('key1', fn1)
e.emit('key1', 1000, 2000)