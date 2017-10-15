<template>
  <div id="app">
    <headerC v-bind:titleName="$store.state.titleName"></headerC>
    <transition :name="transitionName"> 
      <router-view class="Router"></router-view>
    </transition>
    <footerC></footerC>
  </div>
</template>

<script>

import headerC from "./components/headerC.vue"
import footerC from "./components/footerC.vue"

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-right'  // 默认动态路由变化为slide-right
    }
  },
  methods: {
    
  },
  components:{
    headerC:headerC,
    footerC:footerC
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
  },
  created: function () {
    // console.log(mogondb_userName);
    // console.log(mogondb_passWord);
    // console.log(mogondb_userOrder);
    
  }
}
</script>

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.Router {
  position: absolute;
  width: 100%;
  height: 100%;
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
