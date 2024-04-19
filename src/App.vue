<template>
  <div  flex gap8 class="w-full h-fulls">
    <Menu />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<style scoped></style>
