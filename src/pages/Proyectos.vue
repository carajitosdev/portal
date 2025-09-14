<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-8">Proyectos</h1>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="proyecto in proyectos" :key="proyecto.nombre" 
           class="bg-white/5 rounded-lg overflow-hidden">
        <img :src="proyecto.imagen" :alt="proyecto.nombre" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ proyecto.nombre }}</h3>
          <p class="text-gray-300 mb-4">{{ proyecto.descripcion }}</p>
          <div class="flex gap-2">
            <span v-for="tech in proyecto.tecnologias" :key="tech"
                  class="px-2 py-1 text-sm bg-blue-500/20 rounded">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const proyectos = [
  {
    nombre: 'Proyecto Alpha',
    descripcion: 'Sistema de gestión empresarial',
    imagen: '/projects/alpha.jpg',
    tecnologias: ['Vue', 'Node.js', 'MongoDB']
  },
  {
    nombre: 'Proyecto Beta',
    descripcion: 'Plataforma de e-learning',
    imagen: '/projects/beta.jpg',
    tecnologias: ['React', 'Express', 'PostgreSQL']
  }
]
</script>
