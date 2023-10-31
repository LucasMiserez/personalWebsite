<script setup lang="ts">
import { reply, historyClick, types } from './commands'
</script>

<template>
  <div class="w-full">
    <p><span v-for="n in 46" :key="n">---</span></p>
    <h1 class="text-3xl font-bold text-center">Output</h1>
    <p><span v-for="n in 46" :key="n">---</span></p>
    <div v-for="(item, index) in reply" :key="index" class="flex overflow-y-auto">
      <button v-if="types.toString() == 'click'" @click="historyClick(item.toLocaleString())">
        {{ item }}
      </button>
      <a
        v-else-if="types.toString() == 'link'"
        :href="item.toString()"
        target="_blank"
        class="underline"
      >
        {{ item }}
      </a>
      <iframe
        v-else-if="types.toString() == 'iframe'"
        :src="item.toString()"
        width="100%"
        class="border-none h-[40rem]"
      ></iframe>
      <p v-else>
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
