<template>
  <div class="flex flex-col">
    <h1>Props</h1>

    <h1>father:{{ car }}</h1>

    <h3>儿子传递过来的数据{{ Palyer }}</h3>
    <Child :car="car" :send="GetPlayer" />
    <h1 class="bg-amber py9">自定义事件</h1>
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import { ref } from "vue";
let car = ref("Tesla");
let Palyer = ref("");
// .
const GetPlayer = (value) => {
  Palyer.value = value;
};
</script>

<style lang="scss" scoped></style>
