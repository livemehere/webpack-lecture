<template>
  <div>
    <h1>Vue.js</h1>
    <p>{{ message }}</p>
    <input type="text" v-model="message" placeholder="message"/>
  </div>
</template>

<script setup>
import {ref} from "vue";
const message = ref('hello');
</script>

<style scoped>
 h1 {
   color: red;
 }
</style>

