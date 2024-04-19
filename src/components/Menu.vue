<template>
  <div class="min-h-screen">
    <ul
      class="list-none text-lg min-h-screen leading-8 font-bold inline-block px5 bg-amber"
    >
      <li
        v-for="route in routes"
        :key="route.link"
        class="hover:text-white py5 uppercase"
      >
        <RouterLink :to="route.link" class="text-current no-underline">
          {{ route.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { routes } from "../data";
</script>

<style scoped></style>
