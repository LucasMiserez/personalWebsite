<script setup lang="ts">
import { reply, commandClick } from "./commands";
</script>

<template>
  <div class="w-full xl:w-1/3">
    <h1 class="text-3xl font-bold text-center">Output</h1>
    <ul class="overflow-y-auto h-full sm:h-[40rem]">
      <li
        v-if="reply"
        v-for="(value, index) in reply"
        :key="index"
        class="flex overflow-y-auto"
      >
        <button
          v-if="value.htmlType.toString() === 'click'"
          @click="commandClick(value.htmlText.toString())"
          :class="value.htmlClass"
        >
          {{ value.htmlText }}
        </button>

        <a
          v-else-if="value.htmlType.toString() == 'link'"
          :href="value.htmlLink?.toString()"
          target="_blank"
          :class="value.htmlClass"
        >
          {{ value.htmlText }}
        </a>
        <iframe
          v-else-if="value.htmlType.toString() == 'iframe'"
          :src="value.htmlText.toString()"
          width="100%"
          :class="value.htmlClass"
        ></iframe>
        <p v-else :class="value.htmlClass">
          {{ value.htmlText }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
