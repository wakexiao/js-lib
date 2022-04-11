const getUrlParams = (url) => {
  let paramsStr = url.split('?')[1];
  let paramsArr = paramsStr.split('&');
  const result = {};
  paramsArr.map((param) => {
    const [key, value] = param.split('=');
    result[key] = value;
  });
  return result;
};

const getUrlParams1 = (url) => {
  // let urlObj = new URL(url);
  // let params = urlObj.searchParams.entries(); // 返回一个可迭代对象（Iterator）
  // const result = {};
  // for(let value of params) {
  //   // Object.entries 返回item是一个数组 [key, value]
  //   result[value[0]] = value[1];
  // }
  // return result;

  let urlStr = url.split('?')[1];
  let params = new URLSearchParams(urlStr); // 返回一个可迭代对象（Iterator）
  
  return Object.fromEntries(params);
};

export { getUrlParams, getUrlParams1 };
