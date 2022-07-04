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


// 总结
// 首先定义三个指针： preNode = null; curNode = head; nextNode = head.next; 定义两个指针的话，修改 next 的指向之后，nextNode 会丢失
// while 循环根据是否有 nextNode 判断
// while 循环内 判断 nextNode 是否有值，如果没有值，说明是表头，反转之后变成表尾，需要将 next 删除或者指向 null， 否则会造成循环指向
// 如果 nextNode 有值，将 curNode.next 重新赋值成 preNode；说明就是不是表头了，需要将当前 node 的 next 修改，指向上一个 node （当前 node 的 next 指向是下一个 node)
// 三个指针往下移动一位； preNode = curNode; curNode = nextNode; nextNode = nextNode.next; 如果 nextNode.next 没有值了，说明是表尾了，当前 while 循环也就结束了
// 结束循环之后，因为是通过 nextNode 来判断的，表尾没有 next，但是反转之后表尾变成表头，所以需要将最后一个(curNode) node 的 next 手动指向 preNode
// return curNode; 返回反转之后的表头，反转结束