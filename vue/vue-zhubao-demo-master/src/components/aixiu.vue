<template>
  <div id="aixiu">
  	<aixiuList :showList="showListData"></aixiuList>
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
  },
  components: {
  	aixiuList
  }
}
</script>

<style lang="scss" scoped>

</style>
