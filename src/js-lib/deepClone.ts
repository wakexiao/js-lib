type customOjb = {
  [propsName: string]: any;
};

export default function deepClone(obj: customOjb): customOjb {
  // 基本数据类型或者其他对象类型，不考虑
  if(typeof obj !== 'object' || obj === null) return obj;
  // 不能用这个判断，否则数组进不来
  // if (Object.prototype.toString.call(obj).slice(8, -1) !== 'Object') return obj;
  const result: customOjb = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    console.log(obj, key, obj[key])
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

let arr: customOjb = [1, 2, 3, 4, 5];
arr.map((item: any) => {
  console.log(item);
});

const userInfo = {
  name: 'jack',
  age: 18,
  desc: null,
  brother: {
    name: 'tom',
    age: 16,
    arr: [1, 2, 3, 4, 5],
    brother: {
      name: 'pater',
      age: 8,
    },
  },
};

const userInfoClone = deepClone(userInfo);

userInfoClone.name = '劫';
userInfoClone.desc = 'desc';
userInfoClone.brother.name = '凯隐';
userInfoClone.brother.arr.push(6);
userInfoClone.brother.brother.age = 10;
console.log(userInfo);
console.log(userInfoClone);
