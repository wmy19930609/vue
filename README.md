# vue
vue的简单应用：前端的MVVM的库

Vue.js 不支持 IE8 及其以下版本

## [MVVM和MVC](http://img.mukewang.com/566915470001456b16000850.jpg)
Model-View-ViewModel：实现解耦


![Mou icon](http://cn.vuejs.org/images/mvvm.png)

#### 插件
*Vuejs Snippets,*

*Vue Syntax Highlight*


#### 使用：
1、[单独引入vue.js](http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.7/vue.min.js)

2、[使用脚手架vue-cli](https://github.com/vuejs/vue-cli)

脚手架：指施工现场为工人操作并解决垂直和水平运输而搭设的各种支架


一种提高开发效率的工具的代名词

$ npm install -g vue-cli
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev

具体例子：
hello world

    <div id="app">
        <p>{{ message }}</p>
        <input v-model="message">
    </div>

    new Vue({
        el: '#app',
        data:{
            msg: 'hello world'
        }
    });

就像HelloWorld展示的那样，html是view层，js是model层，通过vue.js（使用v-model这个指令）完成中间的底层逻辑，实现绑定的效果。改变其中的任何一层，另外一层都会改变


指令带有前缀 v-，以指示它们是 Vue.js 提供的特殊特性。并且如你所想象的，会对绑定的目标元素添加响应式的特殊行为


