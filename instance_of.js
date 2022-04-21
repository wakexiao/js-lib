/**
 * 实现类似 instanceof 方法
 * @param {object} left 需要判断的对象
 * @param {object} right 是否属于该原型对象
 * @return boolean
 */
export default function instance_of(left, right){
  const baseTypes = ['string', 'number', 'boolean', 'undefined', 'symbol'];
  if(baseTypes.includes(typeof left)) return false;
  let leftProto = left.__proto__;
  let rightPrototype = right.prototype;
  while(true){
    if(leftProto === null) { // 已经通过原型链找到顶层 null 还没找到
      return false;
    }
    if(leftProto === rightPrototype) {
      return true;
    }
    // 没找到，再往上一层找
    leftProto = leftProto.__proto__;
  }
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
