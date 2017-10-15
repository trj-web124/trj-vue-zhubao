<template>
  <div id="goodsList">

    <template v-for="(item,index) in goodsListData">
    <div class="goodsList" v-on:click="toGoodsDetails(item.id)">
      <img :src="item.imgUrl" alt="">
      <div>
        <h3>{{item.title}}</h3>
        <p>¥{{item.price | twoDecima}}</p>
      </div>
    </div>
    <div style="height: 10px;background-color: #f1f1f1;"></div>
    </template>

    <div class="screening" @click="showScreening">
      <p>筛选</p>
      <img src="../../dist/images/shaixuan.png" alt="">
    </div>

    <screening-list :showScreeningCtrl="showScreeningCtrl" v-on:hiddenScreeningCtrl="hiddenScreeningCtrl"></screening-list>

    <div v-if="showScreeningCtrl" class="layer" @click="showScreeningCtrl = !showScreeningCtrl"></div>

    <loading v-if="showLoading" class="loading-container" text='loading' duration='1s'></loading>
  </div>
</template>

<script>
import screeningList from "../components/screeningList.vue"

export default {
  name: 'goodsList',
  data () {
    return {
      goodsListData: [],
      routeParam: 0,
      showScreeningCtrl: false,
      showLoading: false
    }
  },
  methods: {
    getGoodsListData: function () {
      let dataIdx = this.routeParam;
      this.goodsListData = [];
      this.showLoading = true;
      var url = `./src/api/goodsListData${dataIdx}.json`;
      setTimeout( () => {
        this.$ajax.get(url).then( (res) => {
          this.goodsListData = res.data.goodsListData;
          this.showLoading = false;
        }).catch( (rej) => {
          console.log(rej);
        })
      },1500)
    },
    toGoodsDetails: function (id) {
      this.$router.push({name:'goodsDetails',query:{id}});
    },
    showScreening: function () {
      this.showScreeningCtrl = true;
    },
    hiddenScreeningCtrl: function () {
      this.showScreeningCtrl = false;
    }
  },
  created:function () {
    this.changeTitle('商品列表');
    this.routeParam = this.$route.query.idx;
    this.getGoodsListData();
    this.$store.commit('_showTrue');
  },
  watch: {
    '$route' (to, from) {
      // 获取最新的id 调用获取数据方法
      this.routeParam = to.query.idx;
      this.getGoodsListData();
    }
  },
  components: {
    screeningList
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/colorStyle.scss';
@import '../scss/textClamp.scss';
@import '../scss/flexBox.scss';

.goodsList {
  display: flex;
  height: 4rem;
  margin-bottom: .2rem;
  img {
    flex: 0 0 7rem;
    width: 6rem;
  }
  div {
    flex: 1;
    padding: .4rem .8rem;
    @include flexBox(flex, space-between, '');
    flex-direction: column;
    h3 {
      font-size: .7rem;
      @include textClamp(2);
      margin-bottom: .2rem;
      color: $colorDefaultTitle;
    }
    p {
      font-size: .7rem;
      color: red;
      text-align: right;
    }
  }
}

.screening {
  position: fixed;
  bottom: 4rem;
  right: 1rem;
  background-color: $activeColor;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  @include flexBox(flex, center, center);
  flex-direction: column;
  > p {
    text-align: center;
    font-size: .6rem;
    color: #FFF;
  }
  > img {
    width: .8rem;
    height: .8rem;
    margin-top: 5px;
  }
}


.layer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.4);
/*  -webkit-pointer-events: none;
  -moz-pointer-events: none;
  -ms-pointer-events: none;
  -o-pointer-events: none;
  pointer-events: none;*/
}


.loading-container {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
}
</style>
