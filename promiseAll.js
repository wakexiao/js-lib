export default function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let length = promises.length;
    let result = [];
    let count = 0; // 计数
    if (length < 1) {
      resolve(result);
    } else {
      for (let i = 0; i < length; i++) {
        // 考虑 promises[i] 可能是普通值或者是一个 promise 对象
        Promise.resolve(promises[i]).then(
          (data) => {
            // result.push(data); // 不能用 push, 因为第 i 个 promise 不知道什么时候走到 then 里来
            result[i] = data;
            count += 1; // 在
            // 为什么不能用 i 计数呢，如果前面的 promise 对象延时比较长，会比后面晚走到 then,所以会后执行
            if (count === length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    }
  });
}
