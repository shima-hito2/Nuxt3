<template>
  <div>{{ data }}</div>
</template>

<!-- <script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.get('https://localhost:3000/api/users')
    console.log('response')
    console.log(response)
    return { posts: response.data }
  }
}
</script> -->

<script setup>
const { data } = await useFetch('/api/users');
console.log(data)
</script>

<!-- <template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    console.log('aa')
    const response = await $fetch('https://jsonplaceholder.typicode.com/posts')
    return { posts: response.data }
  }
}
</script> -->