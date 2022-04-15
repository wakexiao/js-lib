import myCall from './myCall.js';

function myBind(context) {
  // 保存当前函数，因为bind需要返回一个新的函数，在新的函数里this指向会有问题
  const self = this;
  // 拿到调用bind时传入的参数
  const bindArgs = Array.prototype.slice.call(arguments, 1);
  // 不使用原生的call方法，使用自己写的 myCall 方法
  return function(){
    let args = Array.prototype.slice.call(arguments);
    Function.prototype.myCall = myCall;
    console.log([...bindArgs], [...args])
    return self.myCall(context, ...bindArgs, ...args)
  }
}

function myBindTest(context) {
  let self = context || window;
  // arguments 是类数组，不是数组，所以不能直接用 slice 方法
  let bindArgs = Array.prototype.slice.call(arguments, 1);
  // 当前的 this 就是需要调用的函数，将这个函数当做fn属性放入到需要绑定 this 的对象中
  self.fn = this;
  // bind 是返回一个函数，所以定义一个函数，然后再在这个函数中通过传入的对象去调用这个函数并返回结果
  let result = function() {
    // 这里的 arguments 是bind之后返回新函数传入的
    const args = Array.prototype.slice.call(arguments);
    return self.fn(...bindArgs, ...args);
  }
  // 把添加在绑定this 对象上的属性删掉, 这里删除会有问题，因为是引用地址，所以这里删除之后上面的函数调用也会报错，不能使用原生的call的话那就只能用自己实现的call方法了
  // delete self.fn;
  // 返回 新的函数
  return result;
}

function myBindTest1(context) {
  // arguments 是类数组，不是数组，所以不能直接用 slice 方法
  let bindArgs = Array.prototype.slice.call(arguments, 1);
  // bind 是返回一个函数，所以定义一个函数，然后再在这个函数中通过传入的对象去调用这个函数并返回结果
  let result = function() {
    // 这里的 arguments 是bind之后返回新函数传入的
    const args = Array.prototype.slice.call(arguments);
    return self.call(context, ...bindArgs, ...args);
  }
  return result;
}

export default myBind;