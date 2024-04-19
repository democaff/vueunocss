<template>
  <div class="text-emerald bg-blue block h-full w3xl shadow-xl rounded-2xl p8">
    <h1>propsChild</h1>
    <h1 class="text-slate-100">{{ Palyer }}</h1>

    <h1>传过来的数据{{ car }}</h1>
    <button px10 py5 rounded @click="send(Palyer)">Send</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let Palyer = ref("modelY玩具车");
defineProps(["car", "send"]);
</script>

<style scoped></style>
