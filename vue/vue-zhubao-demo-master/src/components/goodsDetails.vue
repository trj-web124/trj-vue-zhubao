<template>
  <div id="goodsDetails" style="background-color: #f6f6f6;">
  	<div class="goodsDetails-container">
  		<img :src="goodsDetailsTure.imgUrl" alt="">
  		<div class="details-params">
  			<p>{{goodsDetailsTure.title}}</p>
  			<p>¥{{goodsDetailsTure.price | twoDecima}}</p>
  			<div style="display: flex;justify-content: space-between;">
  				<p style="font-size: .6rem;">库存: 12件</p>
  				<p style="font-size: .6rem;">运费: {{(goodsDetailsTure.price / 1000).toFixed(2)}}</p>
  				<p style="font-size: .6rem;">销量: 1823</p>
  			</div>
  		</div>
  		<div style="height: 2rem;position: relative;display: flex;align-items: center;background-color: #FFF;">
  			<p style="position: absolute;top: 50%;left: 50%;transform: translate3d(-50%,-50%,0);background-color: #FFF;font-size: .8rem;padding: 0 .3rem;color: #666">商品详情</p>
  			<div style="height: 1px;width: 100%;background-color: #666;margin: 0 4rem;"></div>
  		</div>
  		<div class="content" v-html="goodsDetailsTure.content"></div>
  		<div class="btn-group-pd">
			<button @click="saveCart" class="btn-c">加入购物车</button>
			<button @click="buy" class="btn-d">立即购买</button>
		</div>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'goodsDetails',
  data () {
    return {
    	id: null,
    	goodsDetails: [],
    	goodsDetailsTure: {}
    }
  },
  created: function () {
  	this.changeTitle('商品详情');
  	this.id = this.$route.query.id;
  	this.$store.commit('_showFalse');
  	this.$ajax.get(url_goodsDetails).then( (res) => {
  		this.goodsDetails = res.data.goodsDetails;
  		// for循环模拟后台请求的数据，把对应的商品id选出来
  		for (var i = 0; i < this.goodsDetails.length; i++) {
  			if (this.id == this.goodsDetails[i].id) {
  				this.goodsDetailsTure = this.goodsDetails[i];
  			}
  		}
  	}).catch( (rej) => {
  		console.log(rej);
  	})
  },
  methods: {
  	saveCart: function () {
    	this.$toast({
    		text: '功能尚未开通',
    		time: 2000
    	})
  	},
  	buy: function () {
  		if (this.$store.state.userData.status) {
  			window.sessionStorage.goodsDetailsTure = JSON.stringify(this.goodsDetailsTure);
  			this.$router.push({name:'confirmOrder', query:{goods:this.goodsDetailsTure}});
  		}else {
  			this.$toast({
	    		text: '请在会员中心登录',
	    		time: 2000
	    	})
  		}
  	}
  }
}
</script>

<style lang="scss">

@import '../scss/colorStyle.scss';
@import '../scss/textClamp.scss';
@import '../scss/flexBox.scss';

.goodsDetails-container {
	img {
		width: 100%;
		height: 12rem;
	}
	.details-params {
		margin: .4rem;
		padding: .8rem;
		background-color: #fff;
		box-shadow: 2px 3px 5px #a8a8a8;
		border-radius: .5rem;
		font-family: '黑体';
		@include flexBox(flex, space-around, '');
		flex-direction: column;
		> p:nth-child(1) {
			@include textClamp(2);
			font-size: .8rem;
			letter-spacing: 3px;
			line-height: 1.2rem;
		}
		> p:nth-child(2) {
			color: red;
			font-size: .8rem;
		}
		> * {
			margin-bottom: 1rem;
		}
		> *:last-child {
			margin-bottom: 0;
		}
	}
}
.content {
	display: block;
	width: 100%;
	text-align: center;
	margin-bottom: 70px;
	> * {
		padding: 10px 0;
		background-color: #FFF;
	}
}

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
	letter-spacing: 1px;
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
