/**
 * 匹配有效的括号
 */
export default function matchBracket(str: string): boolean {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const curStr = str[i];
    if ('([{'.includes(curStr)) {
      // 如果是左括号，入栈
      stack.push(curStr);
    }
    if (')]}'.includes(curStr)) {
      // 如果是右括号
      const top = stack[stack.length - 1];
      // 如果和栈顶匹配上了是正确的括号，就出栈
      if (['()', '[]', '{}'].includes(top + curStr)) {
        stack.pop();
      } else {
        // 没匹配上，直接返回 false, 因为如果栈顶没匹配上当前的有括号，就是有问题的
        return false;
      }
    }
  }
  return stack.length === 0;
}

let str = '{ab(da[fa]ff)}';
let str1 = 'a[b(da])';
console.log(matchBracket(str));
console.log(matchBracket(str1));
