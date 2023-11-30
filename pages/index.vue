<script setup>
const { dataToDo } = useToDo();
</script>

<template>
  <div>
    <ul>
      <li v-for="n in dataToDo" :key="n.id">{{ n.title }}</li>
    </ul>
  </div>
</template>