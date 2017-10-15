<template>
  <div id="myOrder">

	<nav class="navList">
		<ul>
			<li v-for="(item,index) in navData" :class="onCtrl == index ? 'on' : ''" @click="navChange(index)">{{item}}</li>
		</ul>
	</nav>

	<div class="orderGoods">
		<template v-for="item in userOrderList" v-if="item.orderStatus == (onCtrl == 0 ? item.orderStatus : onCtrl)">
		<p>订单号:{{item.orderSn}}</p>
		<goodsItem :goodsNum="item.goodsNum" :goods="item.goods"></goodsItem>
		<arrowItem :arrowCtrl="false" :leftText="'状态:' + item.orderStatueText" :rightText="'合计:¥' + item.orderMoney"></arrowItem>
		<div class="btnGroup" @click="btnCtrl(item.orderId,$event)">
			<button v-if="item.orderStatus == 1">取消</button>
			<button v-if="item.orderStatus == 1">立即付款</button>
			<button v-if="item.orderStatus == 2">联系卖家</button>
			<button v-if="item.orderStatus == 3">查看物流</button>
			<button v-if="item.orderStatus == 3">确认收货</button>
		</div>
		<div style="height: 10px;background-color: #e6e6e6;"></div>
		</template>
	</div>

	<confirm-c :content="content" :confirmShow="confirmShow">
	<div v-if="confirmShowIdx == 1" class="btn-group" slot="btn-two">
		<button @click="cancel">取消</button>
		<button @click="determine">确定</button>
	</div>
	<div v-else class="btn-group" slot="btn-one">
		<button style="display: none;" @click="cancel">确定</button>
		<button @click="cancel">确定</button>
	</div>
	</confirm-c>

	<div v-if="confirmShow" class="layer"></div>

  </div>
</template>

<script>
import goodsItem from './goodsItem.vue';
import arrowItem from './arrowItem.vue';
import confirmC from './confirmC.vue';
export default {
  name: 'myOrder',
  data () {
    return {
      navData: ['全部','待付款','待发货','待收货'],
      onCtrl: 0,
      userOrderList: [],
      content: '',
      confirmShow: false,
      confirmShowIdx: 1
    }
  },
  created: function () {
  	this.changeTitle('我的订单');
  	this.$store.commit('_showFalse');
  	this.userOrderList = mogondb_userOrder;
  	if (this.$route.query.idx) {
  		this.onCtrl = this.$route.query.idx;
  	}
  },
  methods: {
  	navChange (idx) {
  		this.onCtrl = idx;
  	},
  	btnCtrl (orderId, event) {
  		console.log(event.toElement.innerText);
  		switch (event.toElement.innerText) {
  			case '取消': 
  				this.confirmShow = true;
  				this.content = '确定要取消订单吗?';
  				this.confirmShowIdx = 1;
  				break;
  			case '立即付款': 
  				this.$router.push({name: 'orderDetails', query: {orderId:orderId}})
  				break;
  			case '联系卖家': 
  				this.confirmShow = true;
  				this.content = '功能暂未开通';
  				this.confirmShowIdx = 2;
  				break;
  			case '查看物流': 
  				this.confirmShow = true;
  				this.content = '功能暂未开通';
  				this.confirmShowIdx = 2;
  				break;
  			case '确认收货': 
  				this.confirmShow = true;
  				this.content = '确认收货吗?';
  				this.confirmShowIdx = 1;
  				break;
  		}
  	},
  	cancel () {
  		this.confirmShow = false;
  	},
  	determine () {
  		this.confirmShow = false;
  	}
  },
  components: {
  	goodsItem,
  	arrowItem,
  	confirmC
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';
.navList ul{
	@include flexBox(flex, space-around, center);
	list-style-type: none;
	box-shadow: 2px 2px 10px #c3c3c3;
	li {
		font-size: .8rem;
		font-family: '黑体';
		color: $colorDefaultText;
		padding: 10px 0;
		box-sizing: border-box;
		width: 100%;
		text-align: center;
	}
	li.on {
		border-bottom: 2px solid $activeColor;
		color: $activeColor;
	}
}

.orderGoods {
	p {
		font-size: .6rem;
		padding: .8rem;
		color: $colorDefaultText;
		@include borderBottom;
	}
}

.btnGroup {
	@include flexBox(flex, flex-end, center);
	button {
		margin: .4rem .8rem .4rem 0;
		padding: .4rem .6rem;
		border-radius: .4rem;
		background-color: #FFF;
		border: 1px solid #888;
	}
}

.layer {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0,0,0,.4);
/*	-webkit-pointer-events: none;
	-moz-pointer-events: none;
	-ms-pointer-events: none;
	-o-pointer-events: none;
	pointer-events: none;*/
}

</style>
