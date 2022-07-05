/**
 * 使用二分法查询有序数组中的两数之和
 * @param arr 有序数组
 * @param sum 和值
 * @returns 两个数字数组或者空数组
 */
export default function twoNumberSum(
  arr: Array<number>,
  sum: number
): Array<number> {
  const result: number[] = [];
  let startIndex = 0;
  let endIndex = arr.length - 1;
  // 这里判断不能等于，否则可能会出现 startIndex 和 endIndex 取的是同一个值相加
  while (startIndex < endIndex) {
    if (arr[startIndex] + arr[endIndex] > sum) {
      // 相加大于和值，右边的指针往左挪一位
      endIndex--;
    } else if (arr[startIndex] + arr[endIndex] < sum) {
      // 相加小于和值，左边的指针往右挪一位
      startIndex++;
    } else {
      // 找到了两个数
      result.push(arr[startIndex], arr[endIndex]);
      break;
    }
  }
  return result;
}

/**
 * 使用双层循环查找数组中的两数之和
 * @param arr 数组
 * @param sum 和值
 * @returns 两个数字数组或者空数组
 */
export function twoNumberSum1(arr: Array<number>, sum: number): Array<number> {
  const len = arr.length;
  const result = [];
  let flag = false;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        result.push(arr[i], arr[j]);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return result;
}

const arr = [1, 3, 4, 5, 6, 7, 10, 11, 12, 18, 22];
const arr1 = [3, 11, 12, 5, 7, 1, 4, 18, 10, 22, 6];
console.log(twoNumberSum1(arr1, 24));
