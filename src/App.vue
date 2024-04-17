<script setup lang="ts">
const url =
  "https://alfred-skyblue.github.io/unocss-docs-cn/presets/attributify";
</script>

<template>
  <h1><a :href="url" class="no-underline" text-black>文档地址</a></h1>
  <!-- Phosphor 图标中的基本锚点图标 -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- 来自 Material Design 图标的橙色闹钟 -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- 大号 Vue 标志 -->
  <div class="i-logos-vue text-3xl" />
  <!-- Linght 模式下显示太阳，Dark 模式下显示月亮，引用自 Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji 笑脸，悬停时变成眼泪 -->
  <div
    class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
  />

  <div m-2 rounded text-teal-400>hello</div>
  <button
    class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600"
  >
    Button
  </button>
  <button class="border border-red">Button</button>
  <button border="~ red">Button</button>
  <button border="~ red-500">Button</button>

  <div border="~ red-500" w-100>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste
    necessitatibus quisquam molestias distinctio ipsa similique nam. Facilis
    cupiditate aut maiores accusantium nam, odio tenetur itaque aperiam
    excepturi animi unde.
  </div>

  <p class="mt-10 bg-slate-500 p-10 text-lg text-white" lg="text-blue">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt
    eveniet alias, facilis distinctio cumque quo quidem praesentium blanditiis
    provident aliquid tempore laudantium mollitia incidunt dolorum quasi
    adipisci, numquam assumenda?
  </p>
</template>

<style scoped></style>
