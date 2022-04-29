// 举例
var obj = {
  name: 'jack',
  age: 18
};
function fn(){
  console.log(this?.age);
}
fn();// 毫无疑问，这里是window调用，打印 undefined

// 但是如果把fn放到obj里再去调用呢
obj.fn = fn;
obj.fn(); // 打印 jack

// 那我们是不是可以有个思路，绑定 this 就在当前的对象里新增一个熟悉，并且这个属性的值就是这个函数，那么this不就绑定好了么
// 然后再把增加上的属性给删除了就大功告成了

function myCall(context){
  // 取出传递的参数
  const args = [...arguments].slice(1);
  // 如果没有传需要绑定的对象，就指向 window
  // let self = context || window;
  if(context == null) { // 处理 null 和 undefined 情况
    context = globalThis;
  }
  if(typeof context !== 'object') { // 上面已经处理了 null 的情况，所以这里不用担心 typeof null
    context = new Object(context);
  }
  const fnKey = Symbol();
  // 当前的 this 就是这个函数， 绑定this的时候是 fn.myCall，fn调用的myCall，所以this就是fn
  self[fnKey] = this; // 把这个函数当做 fnKey 属性放在需要绑定 this 的对象中
  // 然后再通过这个对象去调用 fn 并把参数传递下去
  const result = self[fnKey](...args);
  // 再通过 delete 把这个属性从这个对象中删除就好了
  delete self[fnKey];
  // 返回 result 结果，call 是会立即执行该函数的
  return result;
}

export default myCall;