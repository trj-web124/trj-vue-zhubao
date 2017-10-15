<template>
  <div id="resGoods" style="margin-bottom: 2.5rem;">
	<div class="res-container">
		<template v-for="item in resImgList">
		<img :src="item" alt="">
		</template>
	</div>
  </div>
</template>

<script>
export default {
  name: 'resGoods',
  data () {
    return {
      resImgList: [
      'http://img3.3lian.com/2006/002/07/042.jpg',
      'http://img3.3lian.com/2006/002/07/043.jpg',
      'http://img3.3lian.com/2006/002/07/044.jpg',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';

.res-container {
	padding: 10px;
	&:after {
		clear:both;
		content:'.';
		display:block;
		width: 0;
		height: 0;
		visibility:hidden;
	}
	img {
		width: 50%;
		height: 6rem;
		float: left;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 1rem;
		&:nth-of-type(3n) {
			width: 100%;
			height: 12rem;
		}
	}
}
</style>
