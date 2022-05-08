/**
 * 防抖函数
 * @param fn
 * @param time
 */
export default function debounce(fn: Function, time: number): Function {
  let timer: number | null = null;
  // 这里的 this 是ts的定义，打包之后就没有了
  return function (this: any, ...arg: []) {
    // 一定时间内重复触发清除定时器不执行 fn
    if (timer) clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn.apply(this, arg);
      timer = null; // fn 执行完成， timer 置空
    }, time);
  };
}
