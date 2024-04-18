<template>
  <div class="mx-auto bg-slate-500 max-w-7xl">
    <h1 class="text-4xl">App</h1>
    <!-- 注意这里改为 :personList -->
    <HelloWorld :a="message" :count="count" :personList="personList" />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const message = ref("Hello, Vite!");
const count = ref(0);

const personList = reactive([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Susan", age: 35 },
]);
</script>

<style lang="scss" scoped></style>
