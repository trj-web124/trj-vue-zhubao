<template>
  <div id="orderDetails">
	<addressC :address="orderDetails.address"></addressC>
	<goodsItem :goodsNum="orderDetails.goodsNum" :goods="orderDetails.goods"></goodsItem>
	<arrowItem :arrowCtrl="false" leftText="运费" :rightText="'¥ ' + orderDetails.orderFreight"></arrowItem>
	<arrowItem :arrowCtrl="false" leftText="实付款(含运费)" :rightText="'¥ ' + orderDetails.orderMoney"></arrowItem>
	<arrowItem :arrowCtrl="false" :leftText="'订单号:' + orderDetails.orderSn" rightText=""></arrowItem>
	<arrowItem :arrowCtrl="false" leftText="订单状态" :rightText="orderDetails.orderStatueText"></arrowItem>
	<div class="btn-group-pd">
		<button @click="cancelBtn" class="btn-c">取消</button>
		<button @click="payBtn" class="btn-d">付款</button>
	</div>
  </div>
</template>

<script>
import addressC from './addressC.vue'
import goodsItem from './goodsItem.vue'
import arrowItem from './arrowItem.vue'

export default {
  name: 'orderDetails',
  data () {
    return {
      orderDetails: {}
    }
  },
  methods: {
  	
  },
  created: function () {
  	this.changeTitle('订单详情');
  	for (var i = 0; i < mogondb_userOrder.length; i++) {
  		if (mogondb_userOrder[i].orderId == this.$route.query.orderId) {
  			this.orderDetails = mogondb_userOrder[i];
  		}
  	}
  },
  methods: {
  	cancelBtn () {
  		this.$router.go(-1);
  	},
  	payBtn () {
  		alert('暂未开通')
  	}
  },
  components: {
  	addressC,
  	goodsItem,
  	arrowItem
  }
}
</script>

<style lang="scss" scoped>

.btn-group-pd {
	padding: 10px 20px;
	display: flex;
	position: fixed;
	bottom: 0;
	width: 90%;
	background-color: #FFF;
}

.btn-group-pd button{
	border: none;
}

%btnPay {
	flex: 1;
	padding: 10px 0;
	height: 2rem;
	font-size: .8rem;
	color: #FFF;
	font-family: '黑体';
	letter-spacing: 5px;
}
.btn-c{
	@extend %btnPay;
	border-radius: 60px 0 0 60px;
	background-color: #FD91B4;
}

.btn-d{
	@extend %btnPay;
	border-radius: 0 60px 60px 0;
	background-color: #FC80A9;
}
</style>
