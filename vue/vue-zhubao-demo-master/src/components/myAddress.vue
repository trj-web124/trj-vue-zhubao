<template>
  <div id="myAddress">

	<div class="vux-1px-t">
    <swipeout>
      <swipeout-item v-for="(v,k) in myAddress" @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
        <div slot="right-menu">
          <swipeout-button @click.native="del(v,k)" type="warn" style="background-color: #FC83AB;font-size: 1rem;">{{'删除'}}</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-t">
        	<div class="address-list" @click="chooseAddress(v)">
						<div class="slide">
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
					</div>
        </div>
      </swipeout-item>
    </swipeout>
  </div>
	<button class="add" @click="toAddpage">新增地址</button>
  </div>
</template>

<script>
import swipeout from './vux/swipeout.vue'
import swipeoutItem from './vux/swipeout-item.vue'
import swipeoutButton from './vux/swipeout-button.vue'

export default {
  name: 'myAddress',
  data () {
    return {
      myAddress: [],
      disabled: false
    }
  },
  created: function () {
  	this.changeTitle('收货地址');
  	this.$store.commit('_showFalse');
  	this.myAddress = mogondb_myAddress;
  	console.log(this.$route.query.ctrl)
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
    handleEvents (type) {
      console.log('event: ', type)
    }
  },
  components: {
    swipeout,
    swipeoutItem,
    swipeoutButton
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
