# vue-open-use

> A Vue.js project scaffold simulate iOS webivew switching
>
> 一个模仿iOS webview切换的即开即用脚手架项目

## demo


## 初衷

公司APP使用hybird技术开发,有些项目会使用web技术来实现,为了达到与APP相似的交互效果,经过一些调研决定使用vue,vue-router来做基础技术,通过优化路由的切换效果最后达到了与app相似的交互效果

## core

> 该项目核心仅包含vue-router,vue,以及Container,ScrollContainer,这几个组件
>
> 实现了页面之间的切换动效

- Container: 一个内容容器,可触发浏览器原生的滚动
- ScrollContainer: 为了避免原生滚动造成触发iOS回弹效果时无法滚动页面内元素的内容,引入JS,CSS3模拟的滚动效果(当DOM过多或者性能要求很高时候不建议使用)

## 扩展

> 本来应该实现更多的组件与指令的,但是市面上已经有很多优秀的vue插件实现了这些功能,所以在该项目中不做实现,可以引用第三方的库来实现

- vue-lazy-load: [https://github.com/hilongjw/vue-lazyload](https://github.com/hilongjw/vue-lazyload)
- vue-infinite-scroll: [https://github.com/ElemeFE/vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll)

## 感谢

感谢[樊超](https://github.com/copyes)对该项目的大力支持

## 后期

- [ ] 完善文档
- [ ] 集成popup
