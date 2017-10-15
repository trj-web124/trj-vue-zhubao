import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		footerCShow:true,
		titleName: '',
		userData: {
			userName: '',
			passWord: '',
			status: false
		}
	},
	getters:{},
	mutations:{
		_showFalse:function (state) {
			state.footerCShow = false;
		},
		_showTrue:function (state) {
			state.footerCShow = true;
		},
		_changeTitle:function (state, titleName) {
			state.titleName = titleName;
		},
		_login:function (state, data) {
			state.userData.status = true;
			state.userData.userName = data.userName;
			state.userData.passWord = data.passWord;
		}
	},
	actions:{},
	modules:{}
})

export default store;