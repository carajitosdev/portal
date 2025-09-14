<template>
  <div class="container mx-auto px-4 pt-24 pb-16">
    <h1 class="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-100">
      Nuestros Servicios
    </h1>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="servicio in servicios" :key="servicio.titulo" 
           class="group bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-green-800/10 transition-all">
        <div class="bg-green-500/20 p-4 w-16 h-16 rounded-lg mb-6 group-hover:bg-green-500/30 transition-all">
          <i :class="servicio.icono" class="text-3xl text-green-300"></i>
        </div>
        <h3 class="text-xl font-bold text-green-200 mb-4">{{ servicio.titulo }}</h3>
        <p class="text-green-100/80 mb-6">{{ servicio.descripcion }}</p>
        <ul class="space-y-3">
          <li v-for="(caracteristica, index) in servicio.caracteristicas" 
              :key="index"
              class="flex items-center gap-3 text-green-100/70">
            <i class="fas fa-check text-green-400"></i>
            <span>{{ caracteristica }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const servicios = [
  {
    titulo: 'Desarrollo Web',
    descripcion: 'Creamos aplicaciones web modernas y escalables',
    icono: 'fas fa-code',
    caracteristicas: [
      'Single Page Applications',
      'APIs RESTful',
      'Aplicaciones PWA',
      'Optimización de rendimiento'
    ]
  },
  {
    titulo: 'DevOps & Cloud',
    descripcion: 'Automatización y gestión de infraestructura',
    icono: 'fas fa-cloud',
    caracteristicas: [
      'CI/CD Pipelines',
      'Kubernetes',
      'AWS/Azure/GCP',
      'Monitoreo y Logs'
    ]
  },
  {
    titulo: 'Consultoría Técnica',
    descripcion: 'Asesoramiento experto para tus proyectos',
    icono: 'fas fa-brain',
    caracteristicas: [
      'Arquitectura de software',
      'Revisión de código',
      'Optimización de procesos',
      'Capacitación de equipos'
    ]
  }
]
</script>
