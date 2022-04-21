export default function myNew(context) {
  const obj = {}; // 创建一个新对象
  // 将新对象的 __proto__ 指向构造函数的 prototype
  obj.__proto__ = context.prototype;
  // 绑定构造函数的 this 并且执行
  const result = context.apply(obj, [...arguments].slice(1));
  // 把构造函数返回的值 return 出去，如果执行构造函数之后返回的是一个对象，直接返回，如果不是对象返回一个空对象
  return result instanceof Object ? result : obj;
}