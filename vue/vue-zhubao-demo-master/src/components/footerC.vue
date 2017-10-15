<template>
  <div id="footerC">
	<nav class="bar" v-if="footerCShow">
		<template v-for="(item,index) in navData">
			<div class="bar-item" v-on:click="addClass(item.titleName,index)">
				<!-- <router-link v-on:click="addClass(index)" to="/newListC" v-bind:class="item.idx==onCtrl ? 'on': '' ">{{item.titleName}}</router-link> -->
				<img v-if="!(item.idx==onCtrl)" :src="item.imgUrl" alt="">
				<img v-else :src="item.imgUrlActive" alt="">
				<a v-bind:class="item.idx==onCtrl ? 'on': '' ">{{item.titleName}}</a>
			</div>
		</template>
	</nav>
  </div>
</template>

<script>

export default {
  name: 'footerC',
  data () {
    return {
      navData: [{
      	idx: 0,
      	titleName: '多好',
      	imgUrl: '../../dist/images/duohao.png',
      	imgUrlActive: '../../dist/images/duohao-active.png'
      },{
      	idx: 1,
      	titleName: '爱秀',
      	imgUrl: '../../dist/images/aishow.png',
      	imgUrlActive: '../../dist/images/aishow-active.png'
      },{
      	idx: 2,
      	titleName: '会员中心',
      	imgUrl: '../../dist/images/gerenzhongxin.png',
      	imgUrlActive: '../../dist/images/gerenzhongxin-active.png'
      }],
      onCtrl: 0
    }
  },
  methods: {
  	addClass: function (titleName, idx) {
  		this.onCtrl = idx;
  		// this.$router.push('/newListC');
  		switch (idx) {
  			case 0:
	  			this.$router.push({name:'home'});
	  			break;
	  		case 1:
	  			this.$router.push({name:'aixiu'});
	  			break;
	  		case 2:
	  			this.$router.push({name:'me'});
	  			break;
  		}
  		this.changeTitle(titleName);
  	}
  },
  computed: {
    footerCShow () {
      return this.$store.state.footerCShow
    }
	}
}
</script>

<style lang="scss" scoped>

@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';

.bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #FFF;
	height: 2.5rem;
	@include flexBox;
	@include borderTop(1px,#d1d1d1);
	.bar-item {
		@include flexBox(flex, '', center);
		flex-direction: column;
		img {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	a {
		font-size: .7rem;
		color: $colorDefaultTitle;
		font-family: '黑体';
	}
	a.on {
		color: $activeColor;
	}
}
</style>
