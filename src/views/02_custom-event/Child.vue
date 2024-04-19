<template>
  <div class="w-full bg-emerald mt20">
    <h1 class="text-2xl">子组件</h1>
    <button @click="emit('haha')" class="w2xl h-[40px] border-none">
      test
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
const emit = defineEmits(["haha"]);
</script>

<style scoped></style>
