<template>
  <div class="h-screen w-screen flex justify-center items-center flex-col">
    <div class="flex flex-col">
      <label for="login">Email Id/User Id</label>
      <input type="text" v-model="userId" placeholder="Enter your email/user id" class="outline-none border-2 mt-3 pl-2 border-gray-400 rounded">
    </div>
    <div>
      <button class="border-2 px-6 py-2 mt-6 border-activeBlue" @click="login()">login</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: '',
      authInfo: {}
    }
  },
  methods: {
    login () {
      this.$axios.post('https://my-json-server.typicode.com/typicode/demo/posts', {
        userId: this.userId,
        title: "Hello World",
        body: 'hello user'
      }).then((res) => {
        console.log('posted')
      })
    }
  }
}
</script>

<style>
</style>