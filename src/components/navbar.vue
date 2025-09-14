<template>
  <nav class="fixed w-full top-0 z-50 bg-green-900/80 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo y Nombre -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center gap-2">
            <img src="@/assets/logo.png" alt="Logo Nekerit" class="h-8 w-8" />
            <span class="text-xl font-bold bg-gradient-to-r from-green-400 to-green-100 bg-clip-text text-transparent">
              Nekerit
            </span>
          </router-link>
        </div>

        <!-- Links de Navegación Desktop -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link v-for="item in navigationItems" 
                        :key="item.path"
                        :to="item.path"
                        class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        :class=" [
                          $route.path === item.path 
                            ? 'bg-green-500/20 text-white' 
                            : 'text-gray-300 hover:bg-green-500/10 hover:text-white'
                        ]">
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Botón de Menú Móvil -->
        <div class="md:hidden">
          <button @click="toggleMenu" 
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy-800 focus:outline-none">
            <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'" class="h-6 w-6"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Menú Móvil -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isOpen" class="md:hidden bg-navy-900/95 backdrop-blur-md">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link v-for="item in navigationItems"
                      :key="item.path"
                      :to="item.path"
                      @click="closeMenu"
                      class="block px-3 py-2 rounded-md text-base font-medium transition-colors"
                      :class=" [
                        $route.path === item.path 
                          ? 'bg-green-500/20 text-white' 
                          : 'text-gray-300 hover:bg-green-500/10 hover:text-white'
                      ]">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isOpen = ref(false);

const navigationItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Contacto', path: '/contacto' }
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.router-link-active {
  @apply bg-blue-500/20 text-white;
}
</style>