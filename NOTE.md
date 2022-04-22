## 一. HTML + CSS
> 一般 HTML 和 CSS 相关的面试题都问的会比较少；只挑了部分常问的问题做整理。

### 1.1 语义化的理解
- 1. 使页面内容结构化，便于浏览器和搜索引擎解析，利于 seo
- 2. 增加代码可读性，利于维护
- 3. 在没有css样式的情况下，页面也能呈现出很好的内容结构

### 1.2 H5 新增的新特性
- 1. 语义化标签：section、header、footer、nav...
- 2. 智能表单：type = tel | email
- 3. 本地存储新增了 locaStorage 和 sectionStorage

### 1.3 script 标签中 defer 和 async 的区别
- 当浏览器遇到 script 标签时会阻塞 HTML 解析，只有 JS 内容加载并执行完成之后才会继续解析 HTML 内容。
- script 标签加上 async 属性表示异步，会异步去请求该 JS 内容，如果请求完之后，HTML 还没有解析完，会阻塞浏览器解析 HTML，先执行请求回来的 JS 文件，执行完后再进行解析；当然，如果在 JS 脚本请求回来之前就已经解析完 HTML，那就正常执行 JS 代码。
- script 标签加上 defer 属性表示延迟，会异步去请求该 JS 内容，和 async 不同的是，如果请求完之后，HTML 还没有解析完，不会暂停解析 HTML，而是等 HTML 解析完之后再执行 JS 代码。
> 总结：1. 什么属性都没有的 script 标签，在 HTML 中按顺序执行，会阻塞 HTML 解析，所以 JS 的 script 标签一般都放在 body 之后；2. 有 async 属性可能会造成 HTML 解析阻塞；有 defer 属性不会造成 HTML 解析阻塞；可以参考这篇文章：[图解 script 标签中的 async 和 defer 属性](https://juejin.cn/post/6894629999215640583)

### 1.4 从浏览器地址栏输入 url 到请求返回发生了什么
- 1. 浏览器先从本地查看是否有缓存，有缓存则直接解析渲染页面，否则进入到下一步
- 2. 浏览器解析协议，端口，域名组成一个 http 请求
- 3. 再通过 DNS 域名解析拿到 IP 地址
- 4. 建立 TCP 连接
- 5. 等待服务器响应请求并返回资源
- 6. 解析服务端返回的资源，解析 HTML 文档，构建 DOM 树，加载其他资源，构建 css 样式和执行 JS 脚本，最终渲染页面

### 1.5 CSS 盒模型
- CSS 中有两种盒模型：标准盒模型、(IE)怪异盒模型;
> 这两种额盒模型都是由 content + padding + border + margin 构成， 但是盒子内容的宽高计算方式会有所不同；标准盒模型：宽高只包含content，怪异盒模型：宽高包含 content + padding + border；可以通过 CSS 的 box-sizing 属性来修改元素的盒模型：
```css
box-sizing: 'border-box'; // 怪异盒模型
box-sizing: 'content-box'; // 标准盒模型(默认值)
```
### 1.6 什么是 BFC
> BFC 全称为：block formatting context，名为 “块级格式化上下文"

`W3C`官方解释为：`BFC`它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，`Block Formatting Context`提供了一个环境，`HTML`在这个环境中按照一定的规则进行布局。

简单来说就是，`BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。

**创建 BFC 的方式**  
1. 浮动元素：float 的值不为 none  
2. 定位元素：position 的值为 absolute 或 fixed  
3. overflow 的值不为 visible
4. display 的值是 inline-block、table-cell、flex

**BFC 能解决什么问题**
1. 解决两个块级元素之间锤子方向 margin 重叠
2. 使用 float 脱离文档流之后造成了高度塌陷，使用在父元素增加 ```overflow: hidden;``` 创建一个 BFC 来解决高度塌陷。

### 1.7 水平垂直居中的实现方式
- 1. 使用 flex
```css
.parent {
  display: flex;
  justify-content: center;
  algin-items: center;
}
```
- 2. 使用 position + margin
```css
.parent {
  position: relative;
}
.children {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```
- 3. 使用 position + transform
```css
.parent {
  position: relative;
}
.children {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
```

### 1.8 使用 flex 常用的属性有哪些
- 6 个设置在 flex 容器上的属性：
1. flex-direction 决定主轴的方向：
    - flex-direction: row | column | row-reverse | column-reverse
2. flew-wrap 一条主轴排列不下的时候如何换行
    - flex-wrap: wrap | nowrap | wrap-reverse
3. flex-flow 是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap;
    - flex-flow: column wrap;
4. justify-content 定义了子元素在主轴上的对齐方式
    - justify-content: flex-start | flex-end | center | space-between | space-around
5. algin-items 定义了子元素在交叉轴上如何对齐
    - algin-items: flex-start | flex-end | center | baseline | stretch
6. align-content 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
    - align-content: flex-start | flex-end | center | space-between | space-around | stretch
> 前五个属性比较常用

- 6个设置在子元素上的属性：
1. order 定义项目的排列顺序。数值越小，排列越靠前，默认为0。
2. flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
3. flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
4. flex-basis 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
5. flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
6. align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

> 第四个 flex 缩写的熟悉用的比较多；flex 详细介绍可以查看[阮一峰flex教程](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 二、JS 基础

### 2.1 JS 的数据类型
- JS 中有两种数据类型：基本数据类型(简单数据类型/原始数据) 和 引用数据类型(复杂数据类型)
1. [七种基本数据类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)：
`string`、`number`、`boolean`、`undefined`、`null`、`symbol`、`bigint`

2. 一种引用数据类型：`Object`
> 在 js 中，array、function、object、Date 等都归类为 Object，通过 typeof 判断类型，这些返回的都是 object 字符串，但是 typeof null 也是 object，这是特例。

### 2.2 原型和原型链
>  每个构造函数身上都有一个 prototype 对象，也就是该构造函数的原型对象，prototype 对象中有一个 constructor 属性，constructor 属性指回该构造函数本身；每一个实例对象上有一个 __proto__ 属性指向构造函数的 prototype，在实例自身没有找到属性的时候，会通过原型链一层一层的往上找，最终找到顶层 null 为止。

> 除了undefined、null 之外，万物皆有 __proto__，只有 function 才会有 prototype；
```js
function Person(name, age){
  this.name = name;
  this.age = age;
};
Person.prototype.field = 'ps';
const person = new Person('jack', 18);
console.log(person); // {name: 'jack', age: 18}
console.log(person.field); // ps
// 通过构造函数创建出来的实例对象会有一个 __proto__ 属性，指向构造函数的原型对象 peototype
// 如果自身没有这个属性则会通过原型链往上层找
console.log(person.__proto__ === Person.prototype);
// 构造函数的 prototype.constructor 指向 构造函数本身
console.log(Person.prototype.constructor === Person);
console.log(Person.__proto__ === Function.prototype);
// 构造函数原型对象上的 __proto__ 指向 Object 的原型对象，构造函数本身也是一个对象
console.log(Person.prototype.__proto__ === Object.prototype);
// 对象原型上的 __proto__ 属性指向 null，原型链的顶层就是 null 
console.log(Object.prototype.__proto__ === null);
```
- 实现类似一个 instanceof 方法
```js
/**
 * 实现类似 instanceof 方法
 * @param {object} left 需要判断的对象
 * @param {object} right 是否属于该原型对象
 * @return boolean
 */
export default function instance_of(left, right){
  const baseTypes = ['string', 'number', 'boolean', 'undefined', 'symbol'];
  if(baseTypes.includes(typeof left)) return false;
  let leftProto = left.__proto__;
  let rightPrototype = right.prototype;
  while(true){
    if(leftProto === null) { // 已经通过原型链找到顶层 null 还没找到
      return false;
    }
    if(leftProto === rightPrototype) {
      return true;
    }
    // 没找到，再往上一层找
    leftProto = leftProto.__proto__;
  }
}
```

### 2.3 new 操作符做了什么
- 1. 首先创建有一个空对象
- 2. 根据原型链，设置空对象的 `__proto__` 指向构造函数的 `prototype`
- 3. 构造函数的 `this` 指向这个对象并且执行该构造函数(这个构造函数可能通过this挂在了其他属性)
- 4. 把执行之后返回的对象 return 出去(需要判断执行构造函数返回的是否是一个对象，如果是正常返回，不是返回空对象)

```js
function myNew(context) {
  const obj = {}; // 创建一个新对象
  // 将新对象的 __proto__ 指向构造函数的 prototype
  obj.__proto__ = context.prototype;
  // 绑定构造函数的 this 并且执行
  const result = context.apply(obj, [...arguments].slice(1));
  // 把构造函数返回的值 return 出去，如果执行构造函数之后返回的是一个对象，直接返回，如果不是对象返回一个空对象
  return result instanceof Object ? result : obj;
}
```
### 2.4 call、apply、bind 的区别和实现
> 可以看我这篇文章，很容易理解：[call、apply、bind 的区别和手写，猴子看了都懂！](https://juejin.cn/post/7086474161555505166)

