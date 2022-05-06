const deepClone = (obj) => {
  if(typeof obj !== 'object' || obj === null) return obj;
  // 只考虑数组和对象的深拷贝
  let result = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result;
};

// ECMAScript 2021 新 api structuredClone 也可以实现深拷贝

export default deepClone;


// function Foo() {};
// Foo.constructor -> Foo
// let foo = new Foo();
// foo.__proto__ -> Foo.prototype
// Foo.__proto__ -> Object.prototype
// Object.__proto__ -> null;

