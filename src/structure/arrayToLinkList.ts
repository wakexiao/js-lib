export interface linkListNode {
  value: any;
  next?: linkListNode;
}

/**
 * 数组转换成一个链表，返回表头
 * @param arr 普通的数组数组
 * @returns 链表表头
 */
export default function arrayToLinkList(arr: any[]): linkListNode {
  const length = arr.length;
  if (length === 0) throw Error('array is empty!!!');
  // 第一个元素，表尾，没有 next
  let curNode: linkListNode = {
    value: arr[length - 1],
  };
  // 因为表尾已经定义好了，从数组倒数第二个开始遍历
  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode,
    };
  }
  // 最后的 curNode 就是表头了
  return curNode;
}


// const arr = [100, 200, 300, 400, 500]
// console.log(arrayToLinkList(arr))