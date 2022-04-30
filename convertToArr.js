export default function convert(treeArr) {
  const result = [];
  const stack = []; // 设置一个队列 用作广度遍历树
  // 顶层 node 先循环 unshift 到 stack 队列中去
  treeArr.map((item) => stack.unshift(item));
  // 设置一个 map 来存放 { id => parentNode }
  const map = new Map();
  while (stack.length) {
    const curNode = stack.pop();
    const { id, name, childrens = [] } = curNode;
    const parentNode = map.get(curNode); // 如果顶层元素会拿不到 parentNode
    const parentId = parentNode?.id || 0; // 顶层元素没拿到 parentNode 将 parentId 设置成 0
    const node = { id, name, parentId };
    result.push(node);
    // 将每个 node 的 childrens 遍历都放到 stack 队列数组中去
    if (childrens.length) {
      childrens.forEach((child) => {
        stack.unshift(child);
        map.set(child, curNode);
      });
    }
  }
  return result;
}
