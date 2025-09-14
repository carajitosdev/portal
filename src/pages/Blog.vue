<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>
    <div class="grid gap-8 md:grid-cols-2">
      <article v-for="post in posts" :key="post.titulo" 
               class="bg-white/5 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">{{ post.titulo }}</h2>
        <p class="text-gray-300 mb-4">{{ post.extracto }}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-400">{{ post.fecha }}</span>
          <button class="px-4 py-2 bg-blue-500/20 rounded hover:bg-blue-500/30">
            Leer más
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = [
  {
    titulo: 'Introducción a Vue 3',
    extracto: 'Descubre las nuevas características de Vue 3 y cómo aprovecharlas...',
    fecha: '2024-03-15'
  },
  {
    titulo: 'DevOps en la práctica',
    extracto: 'Mejores prácticas para implementar DevOps en tu equipo...',
    fecha: '2024-03-10'
  }
]
</script>
