<template>
  <div class="w-full">
    <h1>customevent 自定义事件</h1>

    <!-- 帮定事件 -->
    <Child @haha="send" />
  </div>
</template>

<script setup>
import Child from "./Child.vue";

const send = () => {
  console.log("hello");
};
</script>

<style lang="scss" scoped></style>
