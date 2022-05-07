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
// console.log(getName('正常调用'));
// console.log(getName.myCall(obj, 'myCall调用'));
// console.log(obj);
// let myGetName = getName.myBind(obj, 'myBind调用');
// console.log(myGetName);
// console.log(obj);
// console.log(myGetName('myBind 新方法调用'));

const info = {
  name: 'jack',
  age: 18,
};
function fn(desc1, desc2, desc3) {
  console.log(`我会${desc1}, 还会${desc2}, 也会${desc3}`);
  console.log(this?.age);
}
// fn('唱歌', '跳舞');
// // 我会唱歌, 还会跳舞
// // undefined
// fn.call(info, '吃饭', '睡觉');
// // 我会吃饭, 还会睡觉
// // 18
// fn.apply(info, ['吃饭', '睡觉']);
// // 我会吃饭, 还会睡觉
// // 18

// const newFn = fn.bind(info, '上班', '摸鱼');
// newFn('加班');
// // 我会上班, 还会摸鱼, 也会加班
// // 18

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.field = 'ps';
const person = new Person('jack', 18);
// console.log('person', _.instance_of(person, Person));
// console.log('object', _.instance_of(person, Object));
// console.log('error', _.instance_of(info, Person));

const person1 = _.myNew(Person, 'tom', 20);
// console.log(person1);

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
// _.promiseAll([p1, 123, p2])
//   .then((res) => {
//     console.log('then', res);
//   })
//   .catch((err) => {
//     console.log('catch', err);
//   });

function testFetch(url, params) {
  console.log('发送搜索请求！！！');
  console.log('url:', url);
  console.log('params:', params);
}
const searchInput = document.getElementById('search');
const box = document.getElementById('box');
searchInput?.addEventListener('input', _.debounce((e) => {
  testFetch('/search', {search})
}, 1000));
box?.addEventListener('drag', _.throttle((e) => {
  console.log(e.offsetX, e.offsetY)
}, 100))


// const p = new Promise((resove, reject) => {
//   resove(1)
// }).then(res => {
//   console.log(res)
// }).then(res1 => {
//   console.log(res1)
// })

// console.log('第一步')
// const myP = new _.MyPromise((resolve, reject) => {
//   // console.log(this)
//   console.log('第二步')
//   // resolve('这次一定')
//   // throw Error('白嫖了')
//   // reject('这次一定')
//   setTimeout(() => {
//     resolve('这次一定')
//     console.log('第四步')
//   }, 3000)
// })
// myP.then((res) => {
//   console.log(res)
//   return '我要白嫖'
// }, (err) => {
//   console.log(err);
// }).then((res1) => {
//   console.log(res1) // 这里链式调用是使用的旧的 MyPromise 实例，需要返回一个新的 MyPromise 实例
// })
// console.log('第三步')

// const arr= [
//   {id: 1, name: '部门A', parentId: 0},
//   {id: 2, name: '部门B', parentId: 0},
//   {id: 3, name: '部门C', parentId: 0},
//   {id: 4, name: '部门D', parentId: 1},
//   {id: 5, name: '部门E', parentId: 1},
//   {id: 6, name: '部门F', parentId: 3},
//   {id: 7, name: '部门G', parentId: 4},
//   {id: 8, name: '部门H', parentId: 7},
//   {id: 9, name: '部门I', parentId: 2},
// ]
// console.log(_.convertToTree(arr))
// console.log(_.convertToArr(_.convertToTree(arr)))

const arr = [100, 200, 300, 400]
console.log(_.arrayToLinkList(arr))