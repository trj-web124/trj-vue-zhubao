<template>
  <div id="homePage">
	<swipe class="my-swipe">
	  <swipe-item v-for="item in swipeItems" :show-indicators="true">
	  	<img class="img-default" :src="item" alt="">
	  </swipe-item>
	</swipe>
	<claListNav :listData="claData"></claListNav>
	<resGoods></resGoods>
  </div>
</template>

<script>

import { Swipe, SwipeItem } from 'vue-swipe';
import claListNav from './claListNav.vue';
import resGoods from './resGoods.vue';

export default {
  name: 'homePage',
  data () {
    return {
      swipeItems: [],
      claData: [{
      	imgUrl: '../../dist/images/dingzhi.png',
      	listName: '私人订制'
      },{
      	imgUrl: '../../dist/images/paimai.png',
      	listName: '夺宝会场'
      },{
      	imgUrl: '../../dist/images/daixuanhuo.png',
      	listName: '代选货'
      },{
      	imgUrl: '../../dist/images/youhui.png',
      	listName: '优惠活动'
      }]
    }
  },
  components: {
  	Swipe,
  	SwipeItem,
  	claListNav,
  	resGoods
  },
  created: function () {
  	this.$ajax.get(url_swipeData).then( (res) => {
        console.log(res)
        this.swipeItems = res.data.SwipeData
      }).catch( (rej) => {
        console.log(rej)
      })
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/vue-swipe.css';

.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.img-default {
	width: 100%;
	height: 100%;
}
</style>
