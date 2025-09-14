<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex flex-col text-white bg-gradient-to-r from-green-900 via-green-700 to-green-400">
    <NavBar />
    <div class="w-full">
      <router-view></router-view>
    </div>
    <Footer />
    <CookieConsent />
  </div>
</template>
<style>
/* We can remove the scoped styles as we are using Tailwind now */
</style>
