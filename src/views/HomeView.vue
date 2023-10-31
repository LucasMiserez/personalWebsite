<script setup lang="ts">
import TerminalComponent from '@/components/TerminalComponent.vue'
import OutputComponent from '@/components/OutputComponent.vue'
</script>

<template>
  <main class="mb-5">
    <p class="text-center">
      -------------------------------------------------------------------------------------------------------------------
    </p>
    <h1 class="text-3xl font-bold text-center"><a href="/">Lucas Miserez</a></h1>
    <p class="text-center">
      Welcome to my portfolio website! Enter 'help' to see the list of available commands
    </p>
    <p class="text-center">
      -------------------------------------------------------------------------------------------------------------------
    </p>
  </main>
  <div class="flex justify-center">
    <TerminalComponent class="mx-5" />
    <div class="flex flex-col">
      <span v-for="n in 30" :key="n">|</span>
    </div>
    <OutputComponent class="mx-5" />
  </div>
</template>
