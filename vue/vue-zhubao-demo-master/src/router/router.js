import Vue from 'vue'
import Router from 'vue-router'

import store from '../vuex/store.js'  // 下面有一个路由检查登录状态要用到里面的状态值，但是感觉这样子做法有点问题的，感觉不应该把这个东西引入进来

import home from '../components/home.vue'
import homePage from '../components/homePage.vue'
import goodsList from '../components/goodsList.vue'
import goodsDetails from '../components/goodsDetails.vue'
import confirmOrder from '../components/confirmOrder.vue'
import myAddress from '../components/myAddress.vue'
import addAddress from '../components/addAddress.vue'
import orderDetails from '../components/orderDetails.vue'

import aixiu from '../components/aixiu.vue'

import me from '../components/me.vue'
import myShow from '../components/myShow.vue'
import release from '../components/release.vue'
import myOrder from '../components/myOrder.vue'

import login from '../components/login.vue'

Router.prototype.goBack = function () {
　　this.isBack = true;
　　window.history.go(-1);
}

Vue.use(Router)

var myRoute = new Router ({
	routes:[
		{
			path: '*',
			redirect: '/home/homePage'
		},
		{
			path: '/home',
			name: 'home',
			component:home,
			redirect:'/homePage',
			children:[
                {
                    path:'goodsList',
                    name: 'goodsList',
                    component:goodsList
                },
                {
                    path:'homePage',
                    name: 'homePage',
                    component:homePage
                }
            ]
		},
		{
			path: '/goodsDetails',
			name: 'goodsDetails',
			component:goodsDetails
		},
		{
			path: '/confirmOrder',
			name: 'confirmOrder',
			component:confirmOrder
		},
		{
			path: '/myAddress',
			name: 'myAddress',
			component:myAddress
		},
		{
			path: '/addAddress',
			name: 'addAddress',
			component:addAddress
		},
		{
			path: '/orderDetails',
			name: 'orderDetails',
			component:orderDetails
		},
		{
			path: '/aixiu',
			name: 'aixiu',
			component:aixiu
		},
		{
			path: '/me',
			name: 'me',
			component:me,
			beforeEnter:function(to,from,next){
				if (store.state.userData.status) {
					next()
				}else {
		    		next({name:'login'})
				}
		    }
		},
		{
			path: '/myShow',
			name: 'myShow',
			component:myShow
		},
		{
			path: '/release',
			name: 'release',
			component:release
		},
		{
			path: '/myOrder',
			name: 'myOrder',
			component:myOrder
		},
		{ 
			path: '/login', 
			name: 'login',
			component: login
		}
	]
})


export default myRoute

// myRoute.beforeEach( (to, from, next) => {
// 	if (to.meta.auth) {
		
// 	}else {
// 		next()
// 	}
// })