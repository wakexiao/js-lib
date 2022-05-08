/**
 * 获取url参数，返回params对象
 * @param url url地址
 */
export default function queryStrToObject(url: string = location.href): Object {
  const queryStr = url.split('?')[1];
  const queryArr = queryStr.split('&');
  const result: { [propsName: string]: any } = {};
  for (let i = 0; i < queryArr.length; i++) {
    const [key, value] = queryArr[i].split('=');
    result[key] = value;
  }
  return result;
}

function queryStrToObject1(url: string = location.href): Object {
  const searchStr = url.split('?')[1];
  const params = new URLSearchParams(searchStr);
  return Object.fromEntries(params);
}

export { queryStrToObject, queryStrToObject1 };

const url = `https://www.baidu.com/s?name=jack&age=18&desc=bro`

console.log(queryStrToObject(url))
console.log(queryStrToObject1(url))
