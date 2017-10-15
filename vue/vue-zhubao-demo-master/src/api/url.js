var url_navData = './src/api/navData.json';
var url_swipeData = './src/api/swipeData.json';
var url_goodsDetails = './src/api/goodsDetails.json';


var mogondb_userName = 'liyiwei';  // 本地模拟一个用户名字，作为后面的登录验证
var mogondb_passWord = '123qwe';  // 本地模拟一个用户密码，作为后面的登录验证

var mogondb_userOrder = [{
	orderId:1504080148770,
	orderSn:1504080148770,
	orderStatus:1,
	orderStatueText:'待付款',
	orderFreight: 1.00,
	orderMoney: 133.00,
	goodsNum:1,
	goods:{
		id: 5,
		title:'六福珠宝招财猫黄金吊坠女玉石玉髓龙猫金镶玉吊坠定价HSA170022',
		imgUrl:'http://img3.3lian.com/2006/002/07/037.jpg',
		content:"<p>这是一段富文本内容和图片详情</p><img src='http://img3.3lian.com/2006/002/07/037.jpg' alt=''>",
		price: 132.00
	},
	address:{
		receiveName: 'liyiwei',
		receivePhone: 13088888888,
		receiveProv: '广东省',
		receiveCity: '阳江市',
		receiveDistr: '江城区',
		receiveAddr: '西平路6号'
	}
},{
	orderId:1504080148771,
	orderSn:1504080148771,
	orderStatus:2,
	orderStatueText:'待发货',
	orderFreight: 1.00,
	orderMoney: 133.00,
	goodsNum:1,
	goods:{
		id: 5,
		title:'六福珠宝招财猫黄金吊坠女玉石玉髓龙猫金镶玉吊坠定价HSA170022',
		imgUrl:'http://img3.3lian.com/2006/002/07/037.jpg',
		content:"<p>这是一段富文本内容和图片详情</p><img src='http://img3.3lian.com/2006/002/07/037.jpg' alt=''>",
		price: 132.00
	},
	address:{
		receiveName: 'liyiwei',
		receivePhone: 13088888888,
		receiveProv: '广东省',
		receiveCity: '阳江市',
		receiveDistr: '江城区',
		receiveAddr: '西平路6号'
	}
},{
	orderId:1504080148772,
	orderSn:1504080148772,
	orderStatus:3,
	orderStatueText:'待收货',
	orderFreight: 1.00,
	orderMoney: 133.00,
	goodsNum:1,
	goods:{
		id: 5,
		title:'六福珠宝招财猫黄金吊坠女玉石玉髓龙猫金镶玉吊坠定价HSA170022',
		imgUrl:'http://img3.3lian.com/2006/002/07/037.jpg',
		content:"<p>这是一段富文本内容和图片详情</p><img src='http://img3.3lian.com/2006/002/07/037.jpg' alt=''>",
		price: 132.00
	},
	address:{
		receiveName: 'liyiwei',
		receivePhone: 13088888888,
		receiveProv: '广东省',
		receiveCity: '阳江市',
		receiveDistr: '江城区',
		receiveAddr: '西平路6号'
	}
}]



var mogondb_aiShowList = [{
		showId: 1502080148770,
		userName: 'liyiwei',
		userImg: 'http://img12.3lian.com/gaoqing02/06/22/04.jpg',
		showContent: '这里默认有一条爱秀评论数据，评论发布在个人中心模块我的买家秀模块里面发布，因为没有后台数据，所以发布的时候用户头像和发布图片用固定的，内容则是发布时写的内容，原项目这里点击进去还可以看到爱秀详情页，可以发表评论和点赞的，这里没后台做起来比较麻烦，省略了，这里是整个商城的买家秀模块，而个人中心里面的是用户自己的，这里也不作区分了总体合在一起了，可以到微信小程序看原项目的效果(注意，这里没有使用本地缓存，页面刷新后发布的数据就没了哦)',
		showImg: 'http://img12.3lian.com/gaoqing02/06/22/05.jpg',
		createdTime: 1502080148770,
		likeNum: 66,
		commentsNum: 12
    },{
		showId: 1503640144771,
		userName: 'liyiwei',
		userImg: 'http://img12.3lian.com/gaoqing02/06/22/04.jpg',
		showContent: '这里默里片点击进去还可以看到爱秀详情页，可以发表评论和点赞的，这里没后台做起来比较麻烦，省略了，这里是整个商城的买家秀模块，而个人中心里面的是用户自己的，这里也不作区分了总体合在一起了，可以到微信小程序看原项目的效果(注意，这里没有使用本地缓存，页面刷新后发布的数据就没了哦)',
		showImg: 'http://img3.3lian.com/2006/002/07/037.jpg',
		createdTime: 1503640144771,
		likeNum: 138,
		commentsNum: 72
    },{
		showId: 1503880148772,
		userName: 'liyiwei',
		userImg: 'http://img12.3lian.com/gaoqing02/06/22/04.jpg',
		showContent: '这里默认里面发布项目这里点击进去还可以看到爱秀详情页，可以发表评论和点击进去还可以看到爱秀详情页，可以发表评论和点击进去还可以看到爱秀详情页，可以发表评论和',
		showImg: 'http://img3.3lian.com/2006/002/07/036.jpg',
		createdTime: 1503880148772,
		likeNum: 3,
		commentsNum: 2
    }]


var mogondb_myAddress = [{
	receiveName: '测试名1',
	receivePhone: 13011111111,
	receiveProv: '广东省',
	receiveCity: '阳江市',
	receiveDistr: '江城区',
	receiveAddr: '西平路6号',
},{
	receiveName: '测试名2',
	receivePhone: 13022222222,
	receiveProv: '广东省',
	receiveCity: '阳江市',
	receiveDistr: '江城区',
	receiveAddr: '东风二路鸳鸯湖66号',
}]