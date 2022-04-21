import _ from './index.js';

// let url = 'https://www.baidu.com?name=jack&age=18&desc=web';
// console.log(_.getUrlParams(url));
// console.log(_.getUrlParams1(url));

// let obj = {
//   name: 'jack',
//   age: 18,
//   arr: [1,2,3],
//   desc: {
//     class: 8
//   }
// };
// let newObj = _.deepClone(obj);
// newObj.name = 'tom';
// newObj.desc.class = 9;
// console.log(obj);
// console.log(newObj);

// let obj = {
//   a: {
//     b: {
//       c: undefined,
//     }
//   }
// }
// let obj1 = {
//   a: 6
// }
// console.log(_.getObjField1(obj, 'a.b.c', 'default'))
// console.log(_.getObjField1(obj1, 'a.b.c', 8))

let obj = {
  name: 'jack',
  age: 18,
};
Function.prototype.myCall = _.myCall;
Function.prototype.myBind = _.myBind;

function getName(desc, desc1) {
  console.log(desc, desc1);
  return this?.age;
}
console.log(getName('正常调用'));
console.log(getName.myCall(obj, 'myCall调用'));
console.log(obj);
let myGetName = getName.myBind(obj, 'myBind调用');
console.log(myGetName);
console.log(obj);
console.log(myGetName('myBind 新方法调用'));

const info = {
  name: 'jack',
  age: 18,
};
function fn(desc1, desc2, desc3) {
  console.log(`我会${desc1}, 还会${desc2}, 也会${desc3}`);
  console.log(this?.age);
}
fn('唱歌', '跳舞');
// 我会唱歌, 还会跳舞
// undefined
fn.call(info, '吃饭', '睡觉');
// 我会吃饭, 还会睡觉
// 18
fn.apply(info, ['吃饭', '睡觉']);
// 我会吃饭, 还会睡觉
// 18

const newFn = fn.bind(info, '上班', '摸鱼');
newFn('加班');
// 我会上班, 还会摸鱼, 也会加班
// 18

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.field = 'ps';
const person = new Person('jack', 18);
console.log('person', _.instance_of(person, Person));
console.log('object', _.instance_of(person, Object));
console.log('error', _.instance_of(info, Person));

const person1 = _.myNew(Person, 'tom', 20);
console.log(person1);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111);
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(22222);
  }, 1000);
});
_.promiseAll([p1, 123, p2])
  .then((res) => {
    console.log('then', res);
  })
  .catch((err) => {
    console.log('catch', err);
  });