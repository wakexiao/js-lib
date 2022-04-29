/**
 * 实现类似 instanceof 方法
 * @param {object} instance 需要判断的对象
 * @param {object} origin 是否属于该原型对象
 * @return boolean
 */
export default function instance_of(instance, origin){
  // 处理 undefined 或 null
  if(instance == null) return false;
  // 处理基本数据类型
  if(typeof instance !== 'object' && typeof instance !== 'function') return false;
  const tempInstance = instance;
  while(tempInstance) {
    if(tempInstance.__proto__ === origin.prototype){
       return true;
    }
    // 未匹配上 往上层继续找
    tempInstance = tempInstance.__proto__;
  }
  // 已经到最顶层 null，上方循环结束
  return false;
}


function Person(name, age){
  this.name = name;
  this.age = age;
};
Person.prototype.field = 'ps';
const person = new Person('jack', 18);
person.__proto__ === Person.prototype;
person.__proto__.__proto__ === Person.prototype;
person.__proto__.__proto__.__proto__ === null;
