<template>
  <div id="login">
	<input v-model="userName" type="text" placeholder="userName">
	<input v-model="passWord" type="passWord" placeholder="passWord">
	<button @click="login">login</button>
	<p>样式我就不搞了哈，原项目没有这个页面，我这种渣渣设计水平就算了-_-#</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userName: null,
      passWord: null
    }
  },
  methods: {
  	login () {
  		let flag = this.userName == mogondb_userName && this.passWord == mogondb_passWord ? true : false;
  		if (flag) {
  			let data = {
  				userName:this.userName,
  				passWord:this.passWord
  			};
  			this.$store.commit('_login',data);
  			this.$store.commit('_showTrue');
  			this.$router.push({name:'me'});
  		}
  	}
  },
  created: function () {
    this.$toast({
      text: '请先登录',
      time: 2000
    })
    this.$store.commit('_showTrue');
  }
}
</script>

<style lang="scss" scoped>
#login {
	padding-top: 60px;
	input {
		display: block;
		padding: 20px;
		margin: 20px;
		font-size: .8rem;
		border: none;
		border-bottom: 1px solid pink;
	}
	button {
		display: block;
		padding: 10px;
		margin: 20px;
		font-size: .8rem;
	}
	p {
		margin: 20px;
	}
}
</style>
