function getObjField(obj, paths, defaultValue) {
  const fieldArr = paths.split('.');
  let result = obj;
  for (let i = 0; i < fieldArr.length; i++) {
    let key = fieldArr[i];
    // 处理 result[key] 为 0，所以需要判断不等于 undefined
    if (result[key] != undefined) {
      result = result[key];
    } else {
      result = undefined;
      break;
    }
  }
  return result != undefined ? result : defaultValue;
}

function getObjField1(obj, paths, defaultValue) {
  const fieldArr = paths.split('.');
  return fieldArr.reduce((pre, field, index, arr) => {
    // 需要特殊处理 pre[field] 为 0; reduce 没办法终止循环，所以如果没有值且不是最后一次循环，给他返回 null，最后一次循环返回 defaultValue
    return pre && pre[field] !== undefined
      ? pre[field]
      : index === arr.length - 1
      ? defaultValue
      : null;
  }, obj);
  // return paths.split('.').reduce((res, path, index, arr) => {
  //   return res && res[path] !== undefined
  //     ? res[path]
  //     : index === arr.length - 1
  //     ? defaultValue
  //     : null;
  // }, obj);
}

export { getObjField, getObjField1 };
