// 1 1 2 3 5 8 13 21 34
// f(n) = f(n-1) + f(n-2)
export default function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  // return fibonacci(n - 1) + fibonacci(n - 2);

  let n1 = 1; // n - 1， 当 n 为 2 的时候，n - 1 位置的值是 1；
  let n2 = 1; // n - 2， 当 n 为 2 的时候，n - 2 位置的值是 1；
  let result = 0;
  for(let i = 2; i <= n; i++) {
    result = n1 + n2;
    n2 = n1;
    n1 = result;
  }
  return result
}

console.log(fibonacci(10));
