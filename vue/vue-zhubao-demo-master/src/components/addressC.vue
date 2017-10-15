<template>
  <div id="addressC">
	<div class="address-container" @click="toMyAddress">
		<img src="../../dist/images/dingdandizhi.png" alt="">
		<div>
			<p>收货人:{{address.receiveName}}<span>{{address.receivePhone}}</span></p>
			<p>收货地址:{{address.receiveProv}}{{address.receiveCity}}{{address.receiveDistr}}{{address.receiveAddr}}</p>
		</div>
		<img class="arrow" src="../../dist/images/jiaotou.png" alt="">
	</div>
	<div style="display: flex;">
		<div v-for="item in colorArr" style="flex:1;height: 3px;margin: 0;" :style="{'background-color': item}"></div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'addressC',
  data () {
    return {
      colorArr: ['red','blue','purple','yellow','green','red']
    }
  },
  props: {
  	address: {
  		type: Object
  	}
  },
  methods: {
  	toMyAddress () {
  		this.$emit('toMyAddress');
  	}
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';

.address-container {
	@include flexBox(flex, space-around, center);
	padding: 10px 0;
	> div {
		@include flexBox(flex, space-around, '');
		flex-direction: column;
		padding: 0 10px;
		color: $colorDefaultText;
		p {
			@include flexBox(flex, space-between, '');
			font-size: .8rem;
			font-family: '黑体';
			padding: 5px 0;
		}
		p:nth-child(2) {
			font-size: .6rem;
			line-height: 1rem;
		}
	}
	> img {
		padding: 0 10px;
		height: 30px;
		width: 30px;
	}
	.arrow {
		padding: 0 10px;
		height: 10px;
		width: 10px;
	}
}

</style>
