export default function convert(arr) {
  // 定义一个 map
  const map = new Map();
  // 把数组中的所有元素都放到 map 里
  const result = [];
  arr.map((item) => {
    const {id, name, parentId} = item;
    const node = {id, name};
    map.set(id, node);
    // 通过 parentId 找到 parentNode
    const parentNode = map.get(parentId);
    // 将当前元素 push 到 parentNode 的 childrens 里
    if(parentNode) {
      parentNode.childrens = parentNode.childrens || [];
      parentNode.childrens.push(node);
    }
    if(parentId === 0) result.push(node);
  });
  return result;
}
