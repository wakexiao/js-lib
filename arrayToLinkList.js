export default function arrayToLinkList(arr) {
  const length = arr.length;
  if(length < 1) throw Error('array is empty!!!')
  // 表尾
  let currentNode = {
    value: arr[length - 1]
  }
  // length 为一的话表头没有 next,直接返回
  if(length === 1) return currentNode

  // 表尾已经定义好了，循环从数组倒数第二个开始
  for(let i = length - 2; i >= 0; i--) {
    currentNode = {
      value: arr[i],
      next: currentNode
    }
  }
  return currentNode
}