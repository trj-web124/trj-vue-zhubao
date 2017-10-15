<template>
  <div id="confirmOrder">
  <div v-if="!address.receiveProv" class="chooseAdd" @click="toMyAddress">
    <p>请选择收货地址</p>
    <img src="../../dist/images/jiaotou.png" alt="" width="15" height="15">
  </div>
	<addressC v-else :address="address" v-on:toMyAddress="toMyAddress"></addressC>
	<goodsItem :goodsNum="goodsNum" :goods="goods"></goodsItem>
	<div style="display: flex;justify-content: space-between;padding: .4rem 1rem;align-items: center;">
		<p style="font-size: .6rem;color: #666;font-family: '黑体'">数量:</p>
		<div style="display: flex;">
			<div @click="reduction" style="background-color: pink;color: #FFF;width: 30px;height:30px;text-align: center;border-radius: 50%;line-height: 30px;">-</div>
			<input @input="inputNum" v-model="goodsNum" type="number" style="width: 30px;height:30px;border:1px solid pink;border-radius: 50%;text-align: center;margin: 0 10px;">
			<div @click="add" style="background-color: pink;color: #FFF;width: 30px;height:30px;text-align: center;border-radius: 50%;line-height: 30px;">+</div>
		</div>
	</div>
	<arrowItem :arrowCtrl="false" leftText="配送方式" rightText="顺丰快递"></arrowItem>
	<arrowItem :arrowCtrl="false" leftText="运费" :rightText="'¥ ' + goodsFreight"></arrowItem>
	<div class="pay">
		<p>合计: ¥{{allMoney}}</p>
		<button @click="saveOrder">提交订单</button>
	</div>
  </div>
</template>

<script>
import addressC from './addressC.vue'
import goodsItem from './goodsItem.vue'
import arrowItem from './arrowItem.vue'

export default {
  name: 'confirmOrder',
  data () {
    return {
      goodsNum:1,
      goods: {},
      goodsFreight: 0,
      address:{

      }
    }
  },
  methods: {
  	reduction () {
  		if (this.goodsNum == 1 ) {
  			return
  		}
  		this.goodsNum--;
  	},
  	add () {
  		if (this.goodsNum == 99 ) {
  			return
  		}
  		this.goodsNum++;
  	},
  	inputNum () {
  		if (this.goodsNum > 99) {
  			this.goodsNum = 99;
  		}
  		if (this.goodsNum < 1) {
  			this.goodsNum = 1;
  		}
  	},
  	saveOrder () {
      if (!this.address.receiveProv) {
        this.$toast({
          text: '请选择收货地址'
        })
        return
      }
  		let orderDetails = {
  			goods: this.goods,
  			address: this.address,
  			orderFreight: this.goodsFreight,
  			goodsNum: this.goodsNum,
  			orderMoney: this.allMoney,
  			orderId:new Date ().getTime(),
  			orderSn:new Date ().getTime(),
  			orderStatus:1,
  			orderStatueText:'待付款'
  		}
  		mogondb_userOrder.push(orderDetails);  // 这里模拟数据，保存订单到数据库
  		this.$router.push({name: 'orderDetails', query: {orderId:orderDetails.orderId}})
  	},
    toMyAddress () {
      this.$router.push({name: 'myAddress'})
    }
  },
  computed: {
  	allMoney () {
  		return ((this.goods.price * this.goodsNum) + Math.floor(this.goodsFreight)).toFixed(2);
  	}
  },
  created: function () {
  	this.changeTitle('确认订单');
  	this.$store.commit('_showFalse');
  	this.goods = JSON.parse(window.sessionStorage.goodsDetailsTure);
  	this.goodsFreight = (this.goods.price / 1000).toFixed(2);
    this.address = JSON.parse(window.sessionStorage.userAddress);
  },
  components: {
  	addressC,
  	goodsItem,
  	arrowItem
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';
@import '../scss/textClamp.scss';
.pay {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	@include flexBox(flex, flex-end, center);
	P {
		color: red;
		padding: .6rem;
		font-size: .8rem;
	}
	button {
		padding: .6rem;
		background-color: $activeColor;
		border: none;
		color: #FFF;
		font-size: .8rem;
		font-family: '黑体';
	}
}

.chooseAdd {
  @include flexBox(flex, space-between, center);
  padding: .8rem;
  border-bottom: 1px solid #e1e1e1;
}
</style>
