## 一. HTML + CSS 面试题
> 一般 HTML 和 CSS 相关的面试题都问的会比较少；只挑了部分常问的问题做整理。

### 1.1 语义化的理解
- 使页面内容结构化，便于浏览器和搜索引擎解析，利于 seo
- 增加代码可读性，利于维护
- 在没有css样式的情况下，页面也能呈现出很好的内容结构

### 1.2 H5 新增的新特性
- 语义化标签：section、header、footer、nav...
- 智能表单：type = tel | email
- 本地存储新增了 locaStorage 和 sectionStorage

### 1.3 script 标签中 defer 和 async 的区别
- 当浏览器遇到 script 标签时会阻塞 HTML 解析，只有 JS 内容加载并执行完成之后才会继续解析 HTML 内容。
- script 标签加上 async 属性表示异步，会异步去请求该 JS 内容，如果请求完之后，HTML 还没有解析完，会阻塞浏览器解析 HTML，先执行请求回来的 JS 文件，执行完后再进行解析；当然，如果在 JS 脚本请求回来之前就已经解析完 HTML，那就正常执行 JS 代码。
- script 标签加上 defer 属性表示延迟，会异步去请求该 JS 内容，和 async 不同的是，如果请求完之后，HTML 还没有解析完，不会暂停解析 HTML，而是等 HTML 解析完之后再执行 JS 代码。
> 总结：1. 什么属性都没有的 script 标签，在 HTML 中按顺序执行，会阻塞 HTML 解析，所以 JS 的 script 标签一般都放在 body 之后；2. 有 async 属性可能会造成 HTML 解析阻塞；有 defer 属性不会造成 HTML 解析阻塞；可以参考这篇文章：[图解 script 标签中的 async 和 defer 属性](https://juejin.cn/post/6894629999215640583)

### 1.4 从浏览器地址栏输入 url 到请求返回发生了什么
- 浏览器先从本地查看是否有缓存，有缓存则直接解析渲染页面，否则进入到下一步
- 浏览器解析协议，端口，域名组成一个 http 请求
- 再通过 DNS 域名解析拿到 IP 地址
- 建立 TCP 连接
- 等待服务器响应请求并返回资源
- 解析服务端返回的资源，解析 HTML 文档，构建 DOM 树，加载其他资源，构建 css 样式和执行 JS 脚本，最终渲染页面

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
