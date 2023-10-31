<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { commands, handleCommand, commandInput } from './commands'

const inputRef = ref(null) as { value: HTMLInputElement | null }

onMounted(() => {
  inputRef.value?.focus()
  document.addEventListener('click', focusInput)
})

const focusInput = () => {
  inputRef.value?.focus()
}

const submitCommand = () => {
  handleCommand(commandInput.value as string)
  commandInput.value = ''
}
</script>

<template>
  <div class="w-full">
    <p><span v-for="n in 46" :key="n">---</span></p>
    <h1 class="text-3xl font-bold text-center">Terminal</h1>
    <p><span v-for="n in 46" :key="n">---</span></p>
    <div v-for="(item, index) in commands" :key="index" class="flex">
      <span>(base)</span>
      <span>:~&nbsp;</span>
      <p>{{ item }}</p>
    </div>
    <div class="flex">
      <span>(base)</span>
      <span>:~&nbsp;</span>
      <form @submit.prevent @submit="submitCommand">
        <input
          ref="inputRef"
          v-model="commandInput"
          type="text"
          class="bg-transparent border-none outline-none"
        />
      </form>
    </div>
  </div>
</template>

<style scoped></style>
