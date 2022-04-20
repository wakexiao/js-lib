const deepClone = (obj) => {
  // if (
  //   obj == null ||
  //   Object.prototype.toString.call(obj).slice(8, -1) !== 'Object'
  // )
  //   return obj;
  // let result = {};
  // Object.keys(obj).forEach((key) => {
  //   if (Object.prototype.toString.call(obj[key]).slice(8, -1) !== 'Object') {
  //     result[key] = obj[key];
  //   } else {
  //     result[key] = deepClone(obj[key]);
  //   }
  // });

  if (obj === null) return obj; // 处理下方 typeof null 等于 'object' 的情况
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  let result = Array.isArray(obj) ? [] : {};
  if (typeof obj !== 'object') return obj;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
};

export default deepClone;


// function Foo() {};
// Foo.constructor -> Foo
// let foo = new Foo();
// foo.__proto__ -> Foo.prototype
// Foo.__proto__ -> Object.prototype
// Object.__proto__ -> null;

