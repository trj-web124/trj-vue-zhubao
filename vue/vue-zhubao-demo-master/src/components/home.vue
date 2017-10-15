<template>
  <div id="home">
	<navC></navC>
	<transition :name="transitionName"> 
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>

import navC from "./navC.vue"

export default {
  name: 'home',
  data () {
    return {
    	transitionName: 'slide-right'  // 默认动态路由变化为slide-right
    }
  },
  components: {
  	navC
  },
  created: function () {
  	this.changeTitle('多好');
  },
　watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack;
      if(isBack) {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
      this.$router.isBack = false;
    }
  }
}
</script>

<style lang="scss" scoped>

.Router {
  position: absolute;
  width: 100%;
  transition: all .5s ease;
  /*top: 40px;*/
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
