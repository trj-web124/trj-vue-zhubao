import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './vuex/store.js'

import axios from 'axios'
Vue.prototype.$ajax = axios

import myPlugins from './myPlugins'
Vue.use(myPlugins);

import loadingPlus from './loadingPlus'
Vue.use(loadingPlus);

import toastPlus from './toastPlus'
Vue.use(toastPlus);


import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import {CellGroup, CellItem} from 'vue-ydui/dist/lib.px/cell';
Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);

import {CitySelect} from 'vue-ydui/dist/lib.px/cityselect';
Vue.component(CitySelect.name, CitySelect);

import {Input} from 'vue-ydui/dist/lib.px/input';
Vue.component(Input.name, Input);

import {Button, ButtonGroup} from 'vue-ydui/dist/lib.px/button';
Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);

import {TextArea} from 'vue-ydui/dist/lib.px/textarea';
Vue.component(TextArea.name, TextArea);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
