<template>
  <div id="navC">
    <nav class="nav">
      <ul>
        <li 
        v-for="(item,index) in navData" 
        :class=" onCtrl == index ? 'on' : '' " 
        v-on:click="changeNav(item.id)"
        >{{item.name}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'navC',
  data () {
    return {
      navData: [],
      onCtrl: 0
    }
  },
  methods: {
    changeNav (idx) {
      this.onCtrl = idx;
      if (idx == 0 ) {
        this.$router.push({name: 'home'});
        this.changeTitle('多好');
      }else {
        this.$router.push({name: 'goodsList', query:{idx:idx}})
      }
    }
  },
  created: function () {
    this.$ajax.get(url_navData).then( (res) => {
      this.navData = res.data.navData;
    })
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/colorStyle.scss';
@import '../scss/flexBox.scss';
@import '../scss/borderStyle.scss';

.nav ul{
  @include flexBox;
  @include borderBottom;
  list-style-type: none;
  padding: 15px 0;
  li {
    color: $colorDefaultText;
    font-size: .7rem;
    font-family: '黑体';
    &.on {
      color: $activeColor;
    }
  }
}

</style>
