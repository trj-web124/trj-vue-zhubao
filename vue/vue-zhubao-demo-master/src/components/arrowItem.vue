<template>
  <div id="arrowItem">
  	<div class="arrowItem-container">
  		<span>{{leftText}}</span>
  		<span>{{rightText}}</span>
  		<img v-if="arrowCtrl" src="../../dist/images/jiaotou.png" alt="">
  	</div>
  </div>
</template>

<script>

export default {
  name: 'arrowItem',
  data () {
    return {
      
    }
  },
  props: {
  	arrowCtrl:{
	  	type: Boolean,
	    required: true
  	},
  	leftText:{
	  	type: String,
	    required: true
  	},
  	rightText:{
	  	type: String
  	}
  },
  created: function () {

  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';
@import '../scss/textClamp.scss';
.arrowItem-container {
	@include flexBox(flex, space-between, '');
	position: relative;
	padding: .5rem 1rem;
	@include borderBottom;
	img {
		position: absolute;
		top: 50%;
		right: 0;
		width: 8px;
		height: 8px;
		transform: translate3d(0,-50%,0);
		padding: 0 10px;
	}
	span {
		font-size: .6rem;
		font-family: '黑体';
		color: $colorDefaultText;
	}
}
</style>
