# 一个用vue写的简易商城项目

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```



## 本项目仅用于学习与交流，不用作商业用途，欢迎转载与留言，转载请注明出处


## 项目用了三联网站的图片资源，如若侵犯您的权益，请告知删除，在此感谢！

##### 项目是曾经做的一个微信小程序，这里用Vue重新写了一遍，微信上面搜索小程序：多好宝石，可与本项目进行对比，本项目只做了部分的功能

### 项目涉及

+ vue ——vue.js框架
+ vue-router  —— vue路由
+ vuex  ——vue状态管理
+ vue-swipe  ——Vue的一个轮播图插件
+ axios  ——官方推荐的用于数据请求的插件
+ sass —— css预处理
+ 本地模拟数据库及接口请求

### 项目登录测试用户

+ 账号：trj
+ 密码：123456

### 项目截图


![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/1.gif)
![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/2.gif)

<hr>

![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/3.gif)
![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/4.gif)

<hr>

![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/5.gif)
![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/6.gif)

<hr>

![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/7.gif)
![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/8.gif)


<hr>

### 更新20170906

+ 添加了一个loading组件，样式惨不忍睹
+ 买家秀发布可以上传图片，不再用固定的一张

<hr>

![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/9.gif)
![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/10.gif)

<hr>

### 更新20170909

+ 添加了一个toast组件，用toast代替alert，本想用别人写好的，最后还是决定自己写一个，样式比较丑就是了#-_-
+ 爱秀页面增加了上拉加载，下拉刷新功能，但这里个人中心里面的买家秀用的是同一个组件，也会有刷新的效果，算是个bug吧，当初没设计好，应该分离出来的，这里不再作修改了
+ 添加了收货地址模块，(选择，新增)，使用了组件库[YDUI](http://vue.ydui.org/)里面的三级联动选择地址组件
+ 添加了收货地址删除功能，模拟滑动效果，效果很糟糕，也有不少bug

<hr>

![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/11.gif)
![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/12.gif)
![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/13.gif)
![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/14.gif)

<hr>

### 更新20170910

+ 从新写了收货地址删除功能，由于组件库[YDUI](http://vue.ydui.org/)没有swipeout组件，所以参考了[Vux](https://vux.li/#/)的，本想参考下自己写一个，无奈源码看得我一脸懵逼T_T，只好拿过来用了，不会写起码要回用才行，只有三个文件，放在[vux](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/src/components/vux)文件夹下，这里已经把less改成scss并且合并在里面了

![](https://github.com/is-liyiwei/vue-zhubao-demo/blob/master/gif/15.gif)
