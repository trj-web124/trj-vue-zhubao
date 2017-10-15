<template>
  <div id="claListNav">
	<div class="list-container">
		<ul>
			<li v-for="(item,index) in listData" @click="toPage(item.listName)">
				<img :src="item.imgUrl" alt="">
				<p>{{item.listName}}</p>
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
export default {
  name: 'claListNav',
  data () {
    return {
      
    }
  },
  props: {
  	listData: {
  		type: Array
  	}
  },
  methods: {
  	toPage (pageName) {
  		console.log(pageName);
  		switch (pageName) {
  			case '我的买家秀':
  				this.$router.push({name: 'myShow', query: {ctrl:true}})
  				break;
  			case '待付款':
  				this.$router.push({name: 'myOrder', query: {idx:1}})
  				break;
  			case '待发货':
  				this.$router.push({name: 'myOrder', query: {idx:2}})
  				break;
  			case '待收货':
  				this.$router.push({name: 'myOrder', query: {idx:3}})
  				break;
  			case '售后/退款':
  				break;
  		}
  	}
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';

.list-container ul{
	@include flexBox;
	list-style-type: none;
	padding: 20px 0;
	li {
		@include flexBox;
		flex-direction: column;
		img {
			width: 1.5rem;
			height: 1.5rem;
		}
		p {
			font-size: .4rem;
			color: $colorDefaultText;
			font-family: '黑体';
			margin-top: .4rem;
		}
	}
}
</style>
