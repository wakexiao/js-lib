/**
 * 二分查找(递归)
 * @param arr 有序数字数组
 * @param target 需要查找的目标值
 */
export default function binarySearch1(arr: number[], target: number, startIndex: number = 0, endIndex: number = arr.length - 1): number {
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  if(startIndex > endIndex) return -1; // 需要加上这个判断，否则会陷入死循环，当 startIndex 和 endIndex 相交的时候没找到，递归就要结束
  if(arr[midIndex] > target) { // 中间值大于目标值，往左侧继续找
    return binarySearch1(arr, target, startIndex, midIndex - 1)
  } else if(arr[midIndex] < target) { // 中间值小于目标值，往右侧找
    return binarySearch1(arr, target, midIndex + 1, endIndex);
  } else { // 相等，返回 midIndex 就是目标值的下标
    return midIndex;
  }
}

/**
 * 二分查找(循环)
 * @param arr 有序数字数组
 * @param target 需要查找的目标值
 * @returns 
 */
export function binarySearch2(arr: Array<number>, target: number): number {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while(startIndex <=  endIndex) { // 如果 endIndex 小于 startIndex 说明已经相交了还没找到，循环结束
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if(arr[midIndex] > target) { // 中间值比目标值大，在数组左侧继续找
      endIndex = midIndex - 1; // 中间值已经比较过了，下次比较需要排除，所以减一，否则会死循环
    } else if(arr[midIndex] < target) { // 中间值比目标值小，在数组右侧继续找
      startIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  // console.log(startIndex, endIndex)
  // 上方循环完了还没找到，返回 -1
  return -1;
}

// 重点： 给 startIndex 和 endIndex 赋值的是记得 + 1(右侧 / 小于 target) 或者 -1(左侧 / 大于 target);
// 为什么上方给 startIndex 赋值需要 midIndex + 1 , endIndex 需要 midIndex - 1
// [1,2,3,4,5] 寻找目标值 5 
// 第一次 s = 0; m = 2; e = 4; 没找到且 m 的值小了， s = m + 1; 
// 再次计算的时候 m = 3; 第二次 s = 3; m = 3; e = 4; 没找到且 m 的值还是小了，s = m + 1;
// 再次计算的时候 s = 4; e = 4; m = 4; 试想如果 s 复制的时候不 + 1, 这时候 m 的值 Math.floor((3 + 4) / 2)向下取整，还是 3，这里就会造成死循环
// 第三次比较就找到了

// 如果目标值是 1; 第一次没找到且 m 的值大了， s = m - 1;
// s = 0; e = 1; m = Math.floor((0 + 1) / 2); m = 0; 第二次没找到且值大了，s = m + 1;
// s = 1; e = 1; m = 1; 找到了

// 如果目标值是 10，目标值不存在，前三步和寻找目标值 5 是一样的；
// 此时 s = 4; e = 4; m = 4; 没找到且值比 m 还大，s = m + 1; s = 5, e = 4; s > e 的时候，说明寻找到交点还没找到，此时循环结束


// 总结：
// 根据 startIndex 和 endIndex 判断相交了之后都没找到结束循环或递归
// 取 midIndex 比较 target 值，target 比 midIndex 大，在数组右侧找，startIndex 变成 midIndex + 1;
// target 比 midIndex 小，在数组左侧找， startIndex 变成 midIndex - 1
// midIndex 取值为 Math.floor((startIndex + endIndex) / 2);


const arr = [1,3,4,6,7,8,11,22,45,98];
console.log(binarySearch1(arr, 98))