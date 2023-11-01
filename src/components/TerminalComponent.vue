<script setup lang="ts">
import { onMounted } from "vue";
import {
  commands,
  handleCommand,
  commandInput,
  inputRef,
  changeCommandColor,
  handleTabKey,
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
  <div class="w-full">
    <p><span v-for="n in 46" :key="n">---</span></p>
    <h1 class="text-3xl font-bold text-center">Terminal</h1>
    <p><span v-for="n in 46" :key="n">---</span></p>
    <div class="overflow-y-auto h-[40rem]">
      <div
        v-for="(item, index) in commands"
        :key="index"
        class="flex overflow-y-auto"
      >
        <span>(base)</span>
        <span>:</span>
        <span class="text-blue-500">~</span>
        <span>$&nbsp</span>
        <p>{{ item }}</p>
      </div>
      <ul class="flex">
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
            @keydown="handleTabKey"
          />
        </form>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
