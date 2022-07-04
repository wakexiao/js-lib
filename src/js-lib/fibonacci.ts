// 1 1 2 3 5 8 13 21 34
// f(n) = f(n-1) + f(n-2)
export default function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  // return fibonacci(n - 1) + fibonacci(n - 2);

  let n1 = 1; // n - 1， 当 n 为 2 的时候，n - 1 位置的值是 1；
  let n2 = 1; // n - 2， 当 n 为 2 的时候，n - 2 位置的值是 1；
  let result = 0;
  for(let i = 2; i < n; i++) {
    result = n1 + n2;
    n2 = n1;
    n1 = result;
  }
  return result
}

console.log(fibonacci(3));


// 斐波那契的结构是有规律的，n 的值等于  n - 1 的值加上 n - 2 的值
// 从 1 开始，如果 n 传入的是 1，n 的值就是 1，如果 n 传的是 2, 那么值还是 1，从 2 之后值才会发生变化，所以循环也是从 2 开始的
// 定义两个指针和一个结果值，n1 来缓存 f(n-1) 的值，n2 来缓存 f(n-2) 的值；result 就是 n1 + n2 的值
// n1 和 n2 默认值都是从 1 开始，第一个位和第二位都是 1，第三位是第一位和第二位的和
// 计算出结果之后，n1 和 n2 的指针往后移一位
// 循环结束最终把结果值返回出去