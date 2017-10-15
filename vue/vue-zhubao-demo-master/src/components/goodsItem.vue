<template>
  <div id="goodsItem">
	<div class="goodsItem">
      <img :src="goods.imgUrl" alt="">
      <div>
        <h4>{{goods.title}}</h4>
        <p>
        <span>¥{{goods.price}}</span>
        <span>x{{goodsNum}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'goodsItem',
  data () {
    return {
      
    }
  },
  created: function () {

  },
  props: {
  	goods: {
  		type: Object
  	},
  	goodsNum: {
  		type: Number
  	}
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';
@import '../scss/textClamp.scss';
.goodsItem {
  display: flex;
  height: 4rem;
  margin: .2rem 0;
  @include borderBottom;
  img {
    flex: 0 0 5rem;
    width: 5rem;
    padding-left: .8rem;
  }
  div {
    flex: 1;
    padding: .4rem .8rem;
    @include flexBox(flex, space-between, '');
    flex-direction: column;
    h4 {
      font-size: .7rem;
      @include textClamp(2);
      margin-bottom: .2rem;
      color: $colorDefaultText;
    }
    p {
      font-size: .7rem;
      color: red;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
