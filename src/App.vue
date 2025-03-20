<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponente from './components/HeaderComponente.vue';
import FooterComponente from './components/FooterComponente.vue';
</script>

<template>
  <main class="main">
    <HeaderComponente />
    <RouterView />
    <FooterComponente />
  </main>
</template>

<style scoped>
</style>
