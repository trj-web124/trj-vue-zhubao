<template>
  <div id="release">
	<div class="userData">
		<img src="http://img12.3lian.com/gaoqing02/06/22/04.jpg" alt="">
		<p>{{$store.state.userData.userName}}</p>
		<div style="position: relative;">
			<input @change="uploadImg($event)" type="file" accept="image/*" style="position: absolute;height: 100%;width: 100%;opacity: 0;">
			<img src="../../dist/images/shexiangji.png" alt="">
		</div>
	</div>
	<textarea v-model="userMsg" placeholder="说点什么吧..." style="width: 100%;height:200px;padding: 20px;border: none;font-size: .8rem;word-wrap:break-word;word-break:break-all;box-sizing: border-box;"></textarea>
	<img :src="userImg" alt="" style="width: 100%;padding: 20px;box-sizing: border-box;">
	<button @click="releaseBtn">发布</button>
	<loading v-if="showLoading" class="loading-container" text='loading' duration='1s'></loading>
	<div v-if="showLoading" class="mark"></div>
  </div>
</template>

<script>

function compress(imgObj) {
	var canvas = document.createElement('canvas');
	ctx = canvas.getContext('2d');

	//	canvas.setAttribute('width',imgObj.width);
	//	canvas.setAttribute('height',imgObj.height);
	//  canvas.style.width = imgObj.width;
	//  canvas.style.height = imgObj.height;

	//利用canvas进行绘图
	var scale = imgObj.width / imgObj.height;
	var width1 = 720;
	var height1 = parseInt(width1 / scale);
	canvas.width = width1;
	canvas.height = height1;
	//console.log(canvas.width );
	ctx.drawImage(imgObj, 0, 0, width1, height1);

	//将原来图片的质量压缩到原先的0.02倍。
	var data = canvas.toDataURL('image/jpeg', 0.02); //data url的形式

	return data;

}

export default {
  name: 'release',
  data () {
    return {
      userMsg: '',
      userImg: '',
      showLoading: false
    }
  },
  methods: {
  	uploadImg (event) {
  		var that = this;
  		var reader = new FileReader();
  		reader.readAsDataURL(event.target.files[0]);
  		reader.onload = function(evt) {
			// console.log(evt);
			if (event.target.files[0].size > 512 * 512 * 2) {
				var img = new Image();
				img.src = evt.srcElement.result;
				img.onload = function() {
					var imgBase64 = compress(img);
					that.userImg = imgBase64
				}
			} else {
				that.userImg = evt.srcElement.result
			}
		}
		console.log(this.userImg)
  	},
  	releaseBtn () {
  		if (!this.userMsg) {
  			this.$toast({
	    		text: '请输入内容',
	    		time: 2000
	    	})
  			return
  		}
  		if (!this.userImg) {
  			this.$toast({
	    		text: '请上传图片',
	    		time: 2000
	    	})
  			return
  		}
  		// this.showLoading = true;不需要这个了，用toast
  		let releaseData = {
			showId: new Date ().getTime(),
			userName: this.$store.state.userData.userName,
			userImg: 'http://img12.3lian.com/gaoqing02/06/22/04.jpg',
			showContent: this.userMsg,
			showImg: this.userImg,
			createdTime: new Date ().getTime(),
			likeNum: 0,
			commentsNum: 0
	    }
	    mogondb_aiShowList.push(releaseData);
	    this.$toast({
    		text: '发布成功',
    		time: 2000
    	})
	    setTimeout( () => {
	    	this.$router.goBack();
	    },1500)
  	}
  },
  created: function () {
  	this.changeTitle('发布买家秀');
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';
.userData {
	@include flexBox(flex, space-between, center);
	padding: 10px;
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
}

button {
	width: 90%;
	padding: 10px 20px;
	margin: 20px;
	font-size: 1rem;
	background-color: $activeColor;
	color: #FFF;
	border: none;
	border-radius: .3rem;
}

.loading-container {
	position: fixed;
	top: 40%;
	left: 50%;
	transform: translate3d(-50%,-50%,0);
}

.mark {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: #000;
	opacity: .3;
}
</style>
