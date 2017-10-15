<template>
  <div id="aixiu">
  	<scroller :refreshLayerColor="'#FC83AB'" :loadingLayerColor="'#FC83AB'" delegate-id="myScroller" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
		<div class="aixiu-container" v-for="(item,index) in showList">

			<div class="userData">
				<img :src="item.userImg" alt="">
				<p>{{item.userName}}</p>
				<span>{{item.createdTime | formatTime}}</span>
			</div>

			<p class="content">{{item.showContent}}</p>

			<img :src="item.showImg" alt="" style="width: 100%;">

			<div class="details-container">
				<div class="like">
					<img src="../../dist/images/zan.png" alt="">
					<span>{{item.likeNum}}</span>
				</div>
				<div class="comments">
					<span>{{item.commentsNum}}条评论</span>
				</div>
			</div>

			<div class="ctrl-container">

				<div class="like">
					<img src="../../dist/images/dianzan.png" alt="">
					<span>赞</span>
				</div>

				<div class="like">
					<img src="../../dist/images/pinglun.png" alt="">
					<span>评论</span>
				</div>

			</div>

			<div style="height: 10px;background-color: #f2f2f2;"></div>

		</div>
		</scroller>
  </div>
</template>

<script>
export default {
  name: 'aixiu',
  data () {
    return {
      infiniteNum: 1,
      refreshNum: 1,
      randomImg: [
      'http://img3.3lian.com/2006/002/07/047.jpg',
      'http://img3.3lian.com/2006/002/07/024.jpg',
      'http://img3.3lian.com/2006/002/07/025.jpg'
      ]
    }
  },
  props: {
  	showList: {
  		type: Array
  	}
  },
  methods: {
		infinite(done) {
			setTimeout(()=> {
				let randomImgData = this.randomImg[Math.floor(Math.random()*10/4)]
				let newAishowData = {
					showId: new Date().getTime(),
					userName: 'liyiwei',
					userImg: 'http://img12.3lian.com/gaoqing02/06/22/04.jpg',
					showContent: '这是新增的数据，通过上拉加载得到的，第' + this.infiniteNum++ + '条，数据采用本地全局变量保存，模拟数据库，刷新了就没有了哦',
					showImg: randomImgData,
					createdTime: new Date().getTime(),
					likeNum: 0,
					commentsNum: 0
			  }
			  mogondb_aiShowList.push(newAishowData)
		  	if (this.infiniteNum <= 3) {
		  		done()
		  	}else {
		  		done(true)
		  	}
		  },1500)
		},
		refresh(done) {
		  setTimeout(()=> {
		  	let randomImgData = this.randomImg[Math.floor(Math.random()*10/4)]
				let newAishowData = {
					showId: new Date().getTime(),
					userName: 'liyiwei',
					userImg: 'http://img12.3lian.com/gaoqing02/06/22/04.jpg',
					showContent: '这是新增的数据，通过下拉刷新得到的，第' + this.refreshNum++ + '条，数据采用本地全局变量保存，模拟数据库，刷新了就没有了哦',
					showImg: randomImgData,
					createdTime: new Date().getTime(),
					likeNum: 0,
					commentsNum: 0
			  }
			  mogondb_aiShowList.unshift(newAishowData)
		  	done()
		  },1500)
		}
	},
	created () {
		
	}
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';
.aixiu-container {
	padding: 0 15px;
	.userData {
		@include flexBox(flex, space-between, center);
		padding: 10px 0;
		img {
			height: 1.8rem;
			width: 1.8rem;
			border-radius: .3rem;
		}
		p {
			flex: 4;
			padding: 0 10px;
			color: $colorDefaultTitle;
			font-size: .8rem;
		}
		span {
			flex: 2;
			font-size: .4rem;
			color: $colorDefaultText;
			text-align: right;
		}
	}
	.content {
		font-size: .7rem;
		color: $colorDefaultText;
		font-family: '黑体';
		line-height: 1rem;
		text-indent: 2em;
		letter-spacing: 2px;
	}
	.details-container {
		@include flexBox(flex, space-between, center);
		padding: .4rem 0;
		@include borderBottom;
		.like {
			@include flexBox(flex, space-between, center);
			img {
				width: .8rem;
				height: .8rem;
			}
			span {
				font-size: .6rem;
				margin: 0 .3rem;
			}
		}
		.comments {
			@include flexBox(flex, space-between, center);
			span {
				font-size: .6rem;
				color: $colorDefaultText;
			}
		}
	}
	.ctrl-container {
		@include flexBox(flex, space-between, center);
		padding: .4rem 2rem;
		.like {
			@include flexBox(flex, space-between, center);
			img {
				width: .8rem;
				height: .8rem;
			}
			span {
				font-size: .6rem;
				margin: 0 .3rem;
			}
		}
	}
}
</style>
