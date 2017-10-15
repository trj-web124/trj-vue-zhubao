<template>
  <div id="aixiu">
  	<aixiuList :showList="showListData"></aixiuList>
  	<div class="releaseBtn" @click="toRelease">
  		<p>+</p>
  	</div>
  </div>
</template>

<script>
import aixiuList from './aixiuList.vue';
export default {
  name: 'aixiu',
  data () {
    return {
      showListData: []
    }
  },
  created: function () {
  	this.showListData = mogondb_aiShowList;
  	if (this.$route.query.ctrl) {
  		this.changeTitle('我的买家秀');
  		this.$store.commit('_showFalse');
  	}
  },
  components: {
  	aixiuList
  },
  methods: {
  	toRelease () {
  		this.$router.push({name:'release'})
  	}
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
.releaseBtn {
	position: fixed;
	bottom: 2rem;
	right: 1rem;
	background-color: $activeColor;
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	@include flexBox(flex, space-around, center);
	p {
		color: #FFF;
		font-size: 1.6rem;
	}
}
</style>
