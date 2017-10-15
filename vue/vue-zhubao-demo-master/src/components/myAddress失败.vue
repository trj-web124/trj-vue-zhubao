<template>
  <div id="myAddress">
	<div class="address-list" v-for="(v,k) in myAddress" @click="chooseAddress(v)" @touchstart="touchStart" @touchmove='touchMove' @touchend='touchEnd'>
		<div class="slide" :style="divSlider">
			<div>
				<span>收货人:{{v.receiveName}}</span>
				<span>{{v.receivePhone}}</span>
			</div>
			<div>
				<img src="../../dist/images/shouhuodizhi.png" alt="">
				<p>{{v.receiveProv}}{{v.receiveCity}}{{v.receiveDistr}}{{v.receiveAddr}}</p>
			</div>
			<div style="height: 10px;background-color: #f2f2f2;"></div>
		</div>
		<div class="del" :style="{width:`${deleteSlider}px`}" @click="del(v,k)">删除</div>
	</div>
	<p><span style="color: red;">bug:</span>这里为自己写的一个效果，本想滑动一个出来可以删除，但是会造成全部都出来，尚未找到方法解决，并且这个效果写的也是非常糟糕的</p>
	<swipeout-init></swipeout-init>
	<button class="add" @click="toAddpage">新增地址</button>
  </div>
</template>

<script>
import swipeoutInit from './swipeout-init.vue'

var startX = 0,
	endX = 0, //结束位置
	moveX = 0, //滑动时的位置
	disX = 0; //移动距离

export default {
  name: 'myAddress',
  data () {
    return {
      myAddress: [],
      deleteSlider: '' //滑动时的效果,使用v-bind:style="deleteSlider"
    }
  },
  created: function () {
  	this.changeTitle('收货地址');
  	this.$store.commit('_showFalse');
  	this.myAddress = mogondb_myAddress;
  	console.log(this.$route.query.ctrl)
  },
  computed: {
  	divSlider () {
  		return `transform:translateX(${-this.deleteSlider}px)`
  	}
  },
  methods: {
  	chooseAddress (v) {
  		if (this.$route.query.ctrl) {// 这里如果是从个人中心进来的，则路由里面带这个参数，不让选择地址了，因为这个组件和确认订单那里的收货地址用的是同一个组件，所以要区分两个场景，使用两个方法
  			return
  		}
  		window.sessionStorage.userAddress = JSON.stringify(v);
  		this.$router.goBack();
  	},
  	toAddpage () {
  		this.$router.push({name: 'addAddress'})
  	},
  	del (v, k) {
  		this.$toast({
  			text: '删除成功'
  		})
  		this.myAddress.splice(k, 1);
  	},
  	touchStart (ev) {
  		ev = ev || event;
  		if (ev.touches.length == 1) {
  			startX = ev.touches[0].clientX;
  		}
  		console.log(startX);
  	},
  	touchMove (ev) {
  		ev = ev || event;
  		if (ev.touches.length == 1) {
  			moveX = ev.touches[0].clientX;
  			disX = startX - moveX;
  			if(disX < 0 || disX == 0) {
				this.deleteSlider = 0;
			} else if(disX > 0) {
				this.deleteSlider = disX;
				if (disX > 100) {
					this.deleteSlider = 100;
				}
			}
  		}
  		console.log(moveX);
  		console.log(disX);
  		console.log(this.deleteSlider);
  	},
  	touchEnd (ev) {
  		if(ev.changedTouches.length == 1) {
			endX = ev.changedTouches[0].clientX;

			disX = startX - endX;

			if((disX * 3) > 100) {

				this.deleteSlider = 100;
			} else {
				//大于一半 滑动到最大值
				this.deleteSlider = 0;
			}
		}
  	}
  },
  components: {
  	swipeoutInit
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';

.address-list {
	display: flex;
	flex-direction: column;
	font-family: '黑体';
	position: relative;
	z-index: 2;
	.slide {
		transform: translate3d(0,0,0);
		transition: .8s;
		div:nth-child(1) {
			@include flexBox(flex, space-between, center);
			padding: 0.4rem .6rem;
			span {
				font-size: .8rem;
				color: $colorDefaultText;
			}
		}
		div:nth-child(2) {
			@include flexBox(flex, flex-start, center);
			padding: 0.4rem .6rem;
			img {
				width: 20px;
				height: 20px;
				margin-right: .4rem;
			}
			p {
				font-size: .8rem;
				color: $colorDefaultText;
			}
		}
	}
	
}

.add {
	position: absolute;
	bottom: 2rem;
	width: 90%;
	padding: 10px 20px;
	margin: 20px;
	font-size: 1rem;
	background-color: $activeColor;
	color: #FFF;
	border: none;
	border-radius: .3rem;
}

.del {
	position: absolute;
	top: 0;
	right: 0;
	background-color: red;
	height: 100%;
	width: 0px;
	transition: 1s;
	text-align: center;
	line-height: 90px;
	color: #FFF;
}
</style>
