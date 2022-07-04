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

// 返回一个单向链表，返回是是一个表头，所以对数组进行反向遍历循环到最后一个就是数组第一个，也就是表头，直接返回回去
// 定义一个 curNode 对象，里面的 value 值是数组最后一个的值; arr[arr.length - 1]; 这也是链表的最后一个节点，没有 next 值
// 遍历数组，从数组的倒数第二个元素开始遍历，i = arr.length -2, i >= 0 , i --
// 重新赋值 curNode = { value: arr[i], next = curNode }
// 循环结束，curNode 就是数组的第一个元素，return curNode 就把链表的表头返回回去了