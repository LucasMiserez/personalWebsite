<script setup lang="ts">
import { onMounted } from "vue";
import {
  commands,
  handleCommand,
  commandInput,
  inputRef,
  changeCommandColor,
  handleKeyPress,
} from "./commands";

onMounted(() => {
  inputRef.value?.focus();
  document.addEventListener("click", focusInput);
});

const focusInput = () => {
  inputRef.value?.focus();
};

const submitCommand = () => {
  handleCommand(commandInput.value as string);
  commandInput.value = "";
};
</script>

<template>
  <div class="w-full xl:w-1/3">
    <h1 class="text-3xl font-bold text-center">Terminal</h1>
    <ul class="overflow-y-auto h-[10rem] sm:h-[40rem]">
      <li v-for="(item, index) in commands" :key="index" class="flex">
        <span>(base)</span>
        <span>:</span>
        <span class="text-blue-500">~</span>
        <span>$&nbsp</span>
        <p>{{ item }}</p>
      </li>
      <li class="flex">
        <span>(base)</span>
        <span>:</span>
        <span class="text-blue-500">~</span>
        <span>$&nbsp</span>
        <form @submit.prevent @submit="submitCommand">
          <input
            ref="inputRef"
            v-model="commandInput"
            type="text"
            class="bg-transparent border-none outline-none"
            @input="changeCommandColor"
            @keydown="handleKeyPress"
          />
        </form>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
