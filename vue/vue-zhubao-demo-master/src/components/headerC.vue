<template>
  <div id="headerC">
    <header class="bgc">
    	<span v-if="!footerCShow" @click="back"><</span>
    	<span v-if="footerCShow"></span>
		<h1 class="headerText">{{titleName}}</h1>
		<span></span>
	</header>
  </div>
</template>

<script>

import {mapState} from "vuex"

export default {
  name: 'headerC',
  data () {
    return {
      
    }
  },
  props: ['titleName'],
  created: function () {
  	this.changeTitle('多好');
  },
  methods: {
  	back: function () {
  		this.$router.goBack();
  	}
  },
  computed:mapState([
  		'footerCShow'
  	])
}
</script>

<style lang="scss" scoped>

@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';

.bgc {
	background-color: $bgColor;
	color: #FFF;
	height: 1.8rem;
	@include flexBox(flex, space-between, center);
	padding: 0 20px;
}

.headerText {
	color: #FFF;
	text-align:center;
	font-size: .8rem;
}

</style>
