<template>
  <div class="h-screen w-screen">
    <div v-if="isAuthenticated" class="">
      <div class="w-screen h-16 border-2 border-gray-200 flex items-center justify-between">
        <div class="w-2/5 h-8 flex justify-center">
          <button v-if="postBeingCreated" @click="postBeingCreated = false" class="border-2 border-DarkBlue px-4">Go Back</button>
          <button v-else @click="postBeingCreated = true" class="border-2 border-DarkBlue px-4">Create a post</button>
        </div>
        <div>
          Hello, {{ userId }}
        </div>
        <div  class="w-2/5 h-8 flex justify-center">
          <button @click="userId = ''; isAuthenticated = false" class="border-2 border-DarkBlue px-4">Logout</button>
        </div>
      </div>
      <div v-if="postBeingCreated" class="w-screen flex justify-center">
        <div class="flex flex-col w-3/5">
          <label for="login">Post Title</label>
          <input type="text" v-model="postTitle" placeholder="write your thoughts over here" class="outline-none border-2 mb-3 pl-2 border-gray-400 rounded">
          <label for="login">Email Id/User Id</label>
          <input type="text" v-model="post" placeholder="write your thoughts over here" class="outline-none border-2 mb-3 pl-2 border-gray-400 rounded">
          <button @click="postIt()" class="border-2 border-DarkBlue px-4">post it</button>
        </div>
      </div>
      <div v-if="!postBeingCreated" class="mt-8 w-screen h-8 border-2 border-gray-400 h-auto">
        <div class="text-center">
          <p class="mt-2">Old Posts</p>
        </div>
        <div v-for="(post, i) in fetchedPost" :key="i" class="border-2 border-gray-400 p-4 m-2 w-auto">
          <div class="flex flex-col">
            <p>Title: {{ post.title }}</p>
            <p>Content: {{ post.body }}</p>
          </div>
        </div>
        <div v-if="fetchedPost.length===0" class="border-2 border-gray-400 p-4 m-2 w-auto">
          <div class="flex items-center justify-center">
            <p>No post available</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center items-center flex-col mt-32">
      <div class="flex flex-col">
        <label for="login">Email Id/User Id</label>
        <input type="text" v-model="userId" placeholder="Enter your email/user id" class="outline-none border-2 mt-3 pl-2 border-gray-400 rounded">
      </div>
      <div>
        <button class="border-2 px-6 py-2 mt-6 border-activeBlue" @click="login()">login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: '',
      post: '',
      postTitle: '',
      fetchedPost: [],
      postBeingCreated: false,
      isAuthenticated: false
    }
  },
  methods: {
    login () {
      if (this.userId.length > 0) {
        this.isAuthenticated = true
        this.$axios.get('http://localhost:3000/posts').then((res) => {
          this.fetchedPost = res.data
          this.fetchedPost = this.fetchedPost.filter((key) => this.userId === key.userId)
        })
      }
    },
    postIt () {
      const payload = {
        userId: this.userId,
        title: this.postTitle,
        body: this.post
      }
      this.$axios.post('http://localhost:3000/posts', payload).then((res) => {
        console.log('posted')
        this.postTitle = ''
        this.post = ''
      })
    }
  }
}
</script>

<style>
</style>