<template>
  <div id="me">
  <div class="user-container">
  	<img src="http://img12.3lian.com/gaoqing02/06/22/04.jpg" alt="">
  	<p>{{$store.state.userData.userName}}</p>
  </div>
  	<claListNav :listData="claData"></claListNav>
  	<div style="height: 10px;background-color: #f2f2f2;"></div>
	<div @click="toMyOrder">
		<arrowItem :arrowCtrl="true" leftText="我的订单" rightText="查看更多"></arrowItem>
	</div>
  	<claListNav :listData="myOrderData"></claListNav>
  	<div style="height: 10px;background-color: #f2f2f2;"></div>
	<div @click="toMyAddress"><arrowItem :arrowCtrl="true" leftText="我的收货地址" rightText=""></arrowItem></div>
	<arrowItem :arrowCtrl="true" leftText="绑定手机号码" rightText=""></arrowItem>
	<arrowItem :arrowCtrl="true" leftText="我的客服" rightText=""></arrowItem>
  </div>
</template>

<script>
import claListNav from './claListNav.vue';
import arrowItem from './arrowItem.vue';
export default {
  name: 'me',
  data () {
    return {
      claData: [{
      	imgUrl: '../../dist/images/dingzhi.png',
      	listName: '我的定制'
      },{
      	imgUrl: '../../dist/images/paimai.png',
      	listName: '我的夺宝'
      },{
      	imgUrl: '../../dist/images/daixuanhuo.png',
      	listName: '代选货'
      },{
      	imgUrl: '../../dist/images/myshow.png',
      	listName: '我的买家秀'
      }],
      myOrderData: [{
      	imgUrl: '../../dist/images/daifukuan.png',
      	listName: '待付款'
      },{
      	imgUrl: '../../dist/images/daifahuo.png',
      	listName: '待发货'
      },{
      	imgUrl: '../../dist/images/daishouhuo.png',
      	listName: '待收货'
      },{
      	imgUrl: '../../dist/images/shouhou.png',
      	listName: '售后/退款'
      }]
    }
  },
  components: {
  	claListNav,
  	arrowItem
  },
  created: function () {
  	this.changeTitle('个人中心');
  	this.$store.commit('_showTrue');
  },
  methods: {
  	toMyOrder () {
  		this.$router.push({name: 'myOrder'})
  	},
    toMyAddress () {
      this.$router.push({name: 'myAddress', query: {ctrl:true}})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';

.user-container {
	@include flexBox(flex, flex-start, center);
	background-color: $activeColor;
	height: 7rem;
	img {
		height: 3rem;
		width: 3rem;
		border-radius: 50%;
		border: 2px solid #FFF;
		margin: 0 .7rem;
	}
	p {
		color: #FFF;
		font-size: 1.2rem;
		letter-spacing: 2px;
		font-family: '黑体';
	}
}
</style>
