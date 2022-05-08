export default function throttle(fn: Function, time: number): Function {
  let timer: number | null = null;
  return function (this: any, ...arg: []) {
    // 如果fn已经在 setTimeout 队列里，就不再设置，等触发玩之后才能进入下一个队列
    if (timer) return; 
    timer = window.setTimeout(() => {
      fn.apply(this, arg);
      timer = null;
    }, time);
  };
}
