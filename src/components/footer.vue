<template>
  <footer class="mt-auto py-12 bg-navy-900/80">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-12 mb-8">
        <div>
          <h3 class="text-xl font-bold text-blue-300 mb-4">Nekerit</h3>
          <p class="text-blue-100/70">
            Creamos soluciones tecnológicas innovadoras para impulsar el futuro digital.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-blue-300 mb-4">Enlaces rápidos</h4>
          <div class="space-y-2">
            <router-link to="/" class="block text-blue-100/70 hover:text-blue-100">Inicio</router-link>
            <router-link to="/servicios" class="block text-blue-100/70 hover:text-blue-100">Servicios</router-link>
            <router-link to="/contacto" class="block text-blue-100/70 hover:text-blue-100">Contacto</router-link>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-blue-300 mb-4">Síguenos</h4>
          <div class="flex gap-4">
            <a href="#" class="text-blue-100/70 hover:text-blue-100">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="#" class="text-blue-100/70 hover:text-blue-100">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" class="text-blue-100/70 hover:text-blue-100">
              <i class="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-blue-800/50 pt-8 text-center text-blue-100/60">
        <p>&copy; 2024 Nekerit. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useAnimations } from '../composables/useAnimations';
const { animateOnScroll } = useAnimations();
</script>