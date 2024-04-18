<template>
  <div bg-amber text-white py-2>
    <h1 class="text-4xl">HelloWorld</h1>
    <p>{{ a }}</p>
    <div>{{ count }}</div>
    <div class="bg-blue w-full text-dark">
      <p v-for="item in personList" :key="item.name">
        {{ item.name }} - {{ item.age }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { a, count, personList } = defineProps<{
  a: string;
  count: number;
  personList: { name: string; age: number }[];
}>();
</script>

<style scoped></style>
