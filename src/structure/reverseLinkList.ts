import arrayToLinkList, { linkListNode } from './arrayToLinkList'

/**
 * 反转单向链表
 * @param head 链表表头
 * @returns 反转链表之后的表头
 */
export default function reverseLinkList(head: linkListNode): linkListNode {
  // 先定义三个指针
  let preNode: linkListNode | undefined = undefined;
  let curNode: linkListNode | undefined = head;
  let nextNode: linkListNode | undefined = head?.next;
  while(nextNode) {
    if(!preNode) { // 第一个元素，反转之后就变成最后一个元素了，需要把 next 删掉
      delete curNode.next
    } else { // 除了第一个和最后一个元素，后面的元素都会走这个重新赋值 next
      curNode.next = preNode
    }
    preNode = curNode;
    curNode = nextNode;
    nextNode = nextNode?.next;
  }
  // 处理最后一个node，上面 while 循环是通过 nextNode 遍历，最后一个 node 没有 next
  curNode.next = preNode;

  return curNode;
}

const arr = [100, 200, 300, 400, 500]
const linkList = arrayToLinkList(arr);
console.log(reverseLinkList(linkList))
