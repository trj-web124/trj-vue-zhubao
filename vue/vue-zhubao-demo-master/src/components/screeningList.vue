<template>
  <div id="screeningList" :style="{'left': showScreeningCtrl ? '20%' : '120%'}">

	<p class="title">筛选</p>
	<p class="content">价格区间 (元)</p>
	<div class="price-input">
		<input type="number" placeholder="最低价" v-model="lowest">
		<span>-</span>
		<input type="number" placeholder="最高价" v-model="highest">
	</div>
	<template v-for="(v,k) in screeningList">
		<div class="border-t">
			<p class="content arrow" @click="showScreeningBoxCtrl(v)">{{v.screeningName}}</p>
			<div class="screening-box" v-if="v.screeningShow">
				<span @click="chooseCla(item)" v-for="(item,index) in v.screeningCla" class="screening-item" :class="item.itemSelected ? 'on' : ''">{{item.itemName}}</span>
			</div>
		</div>
	</template>
	<div class="btn-group">
		<button @click="reset">重置</button>
		<button @click="complete">完成</button>
	</div>
  </div>
</template>

<script>

var screeningList = [{
	screeningName:'适用对象',
	screeningCla:[{
		itemName:'女',
		itemSelected:false
	},{
		itemName:'情侣',
		itemSelected:false
	},{
		itemName:'男',
		itemSelected:false
	},{
		itemName:'儿童',
		itemSelected:false
	}],
	screeningShow:true
},{
	screeningName:'材料',
	screeningCla:[{
		itemName:'圆形',
		itemSelected:false
	},{
		itemName:'近圆',
		itemSelected:false
	},{
		itemName:'水滴形',
		itemSelected:false
	},{
		itemName:'异性',
		itemSelected:false
	},{
		itemName:'椭圆形',
		itemSelected:false
	}],
	screeningShow:true
},{
	screeningName:'年龄',
	screeningCla:[{
		itemName:'20岁',
		itemSelected:false
	},{
		itemName:'20岁-25岁',
		itemSelected:false
	},{
		itemName:'25岁-30岁',
		itemSelected:false
	},{
		itemName:'30岁-35岁',
		itemSelected:false
	},{
		itemName:'35岁-40岁',
		itemSelected:false
	}],
	screeningShow:true
}]

export default {
  name: 'screeningList',
  data () {
    return {
      screeningList: screeningList,
      lowest:null,
      highest: null
    }
  },
  props: {
  	showScreeningCtrl: {
  		type: Boolean
  	}
  },
  methods: {
  	showScreeningBoxCtrl (v) {
  		v.screeningShow = !v.screeningShow;
  	},
  	chooseCla (v) {
  		v.itemSelected = !v.itemSelected;
  	},
  	reset () {
  		for (var i = 0; i < this.screeningList.length; i++) {
  			for (var j = 0; j < this.screeningList[i].screeningCla.length; j++) {
  				this.screeningList[i].screeningCla[j].itemSelected = false;
  			}
  		}
  		this.lowest = this.highest = null;
  	},
  	complete () {
  		let chooseClaArr = [];
  		for (var i = 0; i < this.screeningList.length; i++) {
  			for (var j = 0; j < this.screeningList[i].screeningCla.length; j++) {
  				if(this.screeningList[i].screeningCla[j].itemSelected == true) {
  					chooseClaArr.push(this.screeningList[i].screeningCla[j].itemName)
  				}
  			}
  		}
  		alert(`最低价是：${this.lowest},最高价是：${this.highest}`);
  		alert(chooseClaArr);
  		this.$emit('hiddenScreeningCtrl');
  	}
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';
#screeningList {
	position: fixed;
	bottom: 0;
	right: 0;
	top: 0;
	width: 80%;
	background-color: #FFF;
	margin-top: 1.8rem;
	margin-bottom: 2.5rem;
	transition: all .5s;
	overflow: scroll;
	z-index: 99;
	.title {
		padding: .6rem .8rem;
		font-size: .4rem;
		color: $colorDefaultTitle;
		background-color: #f2f2f2;
	}
	.content {
		padding: .6rem .8rem;
		font-size: .6rem;
		color: $colorDefaultTitle;
	}
	.price-input {
		 padding: 10px;
		 margin: 0 10px;
		 background-color: #f2f2f2;
		 @include flexBox(flex, space-between, center);
		 > span {
		 	margin: 0 20px;
		 	flex: 1;
		 	text-align: center;
		 }
		 input {
		 	width: 100%;
		 	height: 30px;
		 	border: none;
		 	text-align: center;
		 	font-size: .6rem;
		 }
	}
}

.border-t {
	@include borderTop(1px);
	margin-bottom: 10px;
}

.arrow:after {
	content: '';
	width: 8px;
	height: 8px;
	position: absolute;
	border-width: 1px 1px 0 0;
	border-color: #666;
	border-style: solid;
	transform: rotate3d(0,0,1,135deg);
	-webkit-transform: rotate3d(0,0,1,135deg);
	right: 1rem;
}


.screening-box {
	display: flex;
	flex-wrap: wrap;
	.screening-item{
		width: 30%;
		text-align: center;
		padding: .6rem .4rem;
		box-sizing: border-box;
		background-color: #f2f2f2;
		margin: .2rem;
		font-size: .7rem;
		color: #333;
		font-family: '黑体';
		border-radius: .2rem;
		&.on {
			background-color: $activeColor;
			color: #FFF;
		}
	}
}

.btn-group {
	display: flex;
	justify-content: space-between;
	button {
		width: 100%;
		border: none;
		background-color: $activeColor;
		padding: .4rem;
		color: #FFF;
		font-size: 1rem;
		font-family: '黑体';
	}
	button:nth-child(1) {
		background-color: $bgColor;
	}
}
</style>
