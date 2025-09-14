<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-full opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-full opacity-0"
  >
    <div v-if="!cookiesAccepted" 
         class="fixed bottom-0 left-0 right-0 bg-green-900/95 backdrop-blur-md p-4 shadow-lg z-50">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-sm text-blue-100">
          Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra 
          <a href="/politica-cookies" class="text-blue-400 hover:underline">política de cookies</a>.
        </div>
        <div class="flex gap-4">
          <button @click="acceptCookies" 
                  class="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition-colors">
            Aceptar
          </button>
          <button @click="rejectCookies"
                  class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
            Rechazar
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const cookiesAccepted = ref(false);

onMounted(() => {
  const storedPreference = localStorage.getItem('cookies-accepted');
  cookiesAccepted.value = storedPreference === 'true';
});

const acceptCookies = () => {
  localStorage.setItem('cookies-accepted', 'true');
  cookiesAccepted.value = true;
};

const rejectCookies = () => {
  localStorage.setItem('cookies-accepted', 'false');
  cookiesAccepted.value = true;
};
</script>
