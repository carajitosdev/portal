<template>
  <footer class="mt-auto py-12 bg-black">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-12 mb-8">
        <div>
          <h3 class="text-xl font-bold text-green-400 mb-4">Nekerit</h3>
          <p class="text-gray-400">
            Creamos soluciones tecnológicas innovadoras para impulsar el futuro digital.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-green-400 mb-4">Enlaces rápidos</h4>
          <div class="space-y-2">
            <router-link to="/" class="block text-gray-400 hover:text-white transition-colors">Inicio</router-link>
            <router-link to="/servicios" class="block text-gray-400 hover:text-white transition-colors">Servicios</router-link>
            <router-link to="/contacto" class="block text-gray-400 hover:text-white transition-colors">Contacto</router-link>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-green-400 mb-4">Síguenos</h4>
          <div class="flex gap-4">
            <a href="https://github.com/nekerit" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="https://instagram.com/@hugo.ae" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 text-center text-gray-500">
        <p>&copy; 2024 Nekerit. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useAnimations } from '../composables/useAnimations';
const { animateOnScroll } = useAnimations();
</script>