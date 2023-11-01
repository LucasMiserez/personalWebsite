<script setup lang="ts">
import TerminalComponent from "@/components/TerminalComponent.vue";
import OutputComponent from "@/components/OutputComponent.vue";
import { emptyTab } from "@/components/commands";
</script>

<template>
  <main class="lg:mb-5">
    <p class="text-center hidden sm:block">
      -------------------------------------------------------------------------------------------------------------------
    </p>
    <h1 class="text-3xl font-bold text-center mx-2">
      <a href="/">Lucas Miserez</a>
    </h1>
    <p class="text-center mx-2">
      Welcome to my portfolio website! Enter
      <button @click="emptyTab" class="font-bold">'help'</button>
      to see the list of available commands
    </p>
    <p class="text-center hidden sm:block">
      -------------------------------------------------------------------------------------------------------------------
    </p>
  </main>
  <div class="flex sm:flex-row flex-col justify-center">
    <TerminalComponent class="sm:mx-5 px-5 sm:px-0" />
    <div class="sm:flex flex-col hidden">
      <span v-for="n in 30" :key="n">|</span>
    </div>
    <OutputComponent class="sm:mx-5 px-5 sm:px-0" />
  </div>
</template>
