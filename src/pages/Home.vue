<template>
  <div class="space-y-16">
    <!-- Hero Banner -->
    <section class="relative h-screen overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-green-700"></div>
      <div class="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
        <h1 class="text-7xl font-bold mb-8 animate-fade-in">Nekerit Studios</h1>
        <p class="text-2xl max-w-3xl mb-12 animate-slide-up">Uniendo desarrolladores, creando el futuro del software</p>
        <div class="flex gap-4">
          <a href="https://discord.gg/nekerit" target="_blank" rel="noopener noreferrer">
            <button class="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all">
            Únete ahora
            </button>
          </a>
          <a href="./Servicios">
            <button class="px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-purple-900 transition-all">
              Explorar servicios
            </button>
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-24 bg-gradient-to-b from-green-900/50 to-transparent">
      <div class="container mx-auto px-4">
        <!-- Intro Section -->
        <div class="text-center max-w-4xl mx-auto mb-20">
          <h2 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-100">
            Potenciando el Futuro Digital
          </h2>
          <div class="text-green-100/90">
            En Nekerit, reunimos el talento y la pasión por la tecnología para crear soluciones que transforman la manera en que el mundo interactúa con el software.
          </div>
        </div>

        <!-- Stats Section -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div class="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div class="text-4xl font-bold text-green-300 mb-2">+30</div>
            <div class="text-green-100/80">Desarrolladores</div>
          </div>
          <div class="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div class="text-4xl font-bold text-green-300 mb-2">+10</div>
            <div class="text-green-100/80">Proyectos Completados</div>
          </div>
          <div class="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div class="text-4xl font-bold text-green-300 mb-2">+10</div>
            <div class="text-green-100/80">Países</div>
          </div>
          <div class="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div class="text-4xl font-bold text-green-300 mb-2">98%</div>
            <div class="text-green-100/80">Satisfacción</div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="grid md:grid-cols-2 gap-16 items-start">
          <div class="space-y-8">
            <div class="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
              <h3 class="text-2xl font-bold text-green-300 mb-4">Nuestra Historia</h3>
              <p class="text-green-100/80 leading-relaxed mb-4">
                Fundada en 2024, Nekerit nació con la visión de crear un espacio donde los desarrolladores pudieran colaborar, aprender y crecer juntos.
              </p>
              <p class="text-green-100/80 leading-relaxed">
                Hoy, somos una comunidad global de innovadores tecnológicos que trabajan en proyectos de vanguardia y comparten conocimientos para impulsar el progreso digital.
              </p>
            </div>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 class="text-xl font-semibold mb-3 text-green-300">Misión</h3>
                <p class="text-green-100/80">Impulsar la innovación tecnológica a través de la colaboración y el conocimiento compartido, creando soluciones que impacten positivamente en la sociedad.</p>
              </div>
              <div class="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 class="text-xl font-semibold mb-3 text-green-300">Visión</h3>
                <p class="text-green-100/80">Ser la comunidad líder global en desarrollo de software, reconocida por nuestra excelencia técnica y compromiso con la innovación sostenible.</p>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <h3 class="text-2xl font-bold text-green-300">Nuestros Servicios</h3>
            <div class="space-y-6">
              <div class="group bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
                <div class="flex items-start gap-4">
                  <div class="bg-blue-500/20 p-4 rounded-lg group-hover:bg-blue-500/30 transition-all">
                    <i class="fas fa-code text-2xl text-blue-300"></i>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-blue-200 mb-2">Desarrollo de Software</h4>
                    <p class="text-blue-100/80 mb-4">Creamos aplicaciones web y móviles utilizando las últimas tecnologías y mejores prácticas de desarrollo.</p>
                    <ul class="space-y-2 text-blue-100/70">
                      <li class="flex items-center gap-2">
                        <i class="fas fa-check text-blue-400"></i>
                        Aplicaciones Web Modernas
                      </li>
                      <li class="flex items-center gap-2">
                        <i class="fas fa-check text-blue-400"></i>
                        Desarrollo Móvil Multiplataforma
                      </li>
                      <li class="flex items-center gap-2">
                        <i class="fas fa-check text-blue-400"></i>
                        APIs y Microservicios
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="group bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
                <div class="flex items-start gap-4">
                  <div class="bg-blue-500/20 p-4 rounded-lg group-hover:bg-blue-500/30 transition-all">
                    <i class="fas fa-cloud text-2xl text-blue-300"></i>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-blue-200 mb-2">Cloud & DevOps</h4>
                    <p class="text-blue-100/80 mb-4">Implementamos soluciones cloud-native y automatización de procesos para mejorar la eficiencia y escalabilidad.</p>
                    <ul class="space-y-2 text-blue-100/70">
                      <li class="flex items-center gap-2">
                        <i class="fas fa-check text-blue-400"></i>
                        Infraestructura como Código (IaC)
                      </li>
                      <li class="flex items-center gap-2">
                        <i class="fas fa-check text-blue-400"></i>
                        Contenedorización y Orquestación
                      </li>
                      <li class="flex items-center gap-2">
                        <i class="fas fa-check text-blue-400"></i>
                        Monitoreo y Optimización de Rendimiento
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="group bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
                <div class="flex items-start gap-4">
                  <div class="bg-blue-500/20 p-4 rounded-lg group-hover:bg-blue-500/30 transition-all">
                    <i class="fas fa-brain text-2xl text-blue-300"></i>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-blue-200 mb-2">Consultoría Técnica</h4>
                    <p class="text-blue-100/80 mb-4">Asesoramos en arquitectura de software y mejores prácticas de desarrollo para maximizar el potencial de tus proyectos.</p>
                    <ul class="space-y-2 text-blue-100/70">
                      <li class="flex items-center gap-2">
                        <i class="fas fa-check text-blue-400"></i>
                        Auditoría y Mejora de Código
                      </li>
                      <li class="flex items-center gap-2">
                        <i class="fas fa-check text-blue-400"></i>
                        Diseño de Arquitectura Escalable
                      </li>
                      <li class="flex items-center gap-2">
                        <i class="fas fa-check text-blue-400"></i>
                        Capacitación y Talleres
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Valores -->
            <div class="bg-white/5 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-4 text-blue-300">Nuestros Valores</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center gap-3">
                  <i class="fas fa-star text-blue-400"></i>
                  <span class="text-blue-100">Excelencia Técnica</span>
                </div>
                <div class="flex items-center gap-3">
                  <i class="fas fa-users text-blue-400"></i>
                  <span class="text-blue-100">Colaboración</span>
                </div>
                <div class="flex items-center gap-3">
                  <i class="fas fa-lightbulb text-blue-400"></i>
                  <span class="text-blue-100">Innovación</span>
                </div>
                <div class="flex items-center gap-3">
                  <i class="fas fa-shield-alt text-blue-400"></i>
                  <span class="text-blue-100">Confiabilidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Tecnologías que dominamos</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="tech in techStack" :key="tech.name" 
               class="bg-white bg-opacity-10 p-6 rounded-xl hover:transform hover:scale-105 transition-all">
            <i :class="tech.icon" class="block text-center mb-4"></i>
            <h3 class="text-center font-semibold">{{ tech.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-16 bg-gradient-to-b from-transparent to-green-900/20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.name"
               class="bg-white bg-opacity-5 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all">
            <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
              <p class="text-sm opacity-80 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag"
                      class="px-3 py-1 bg-green-500/20 rounded-full text-xs">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const techStack = [
  { 
    name: 'React', 
    icon: 'fab fa-react text-4xl text-[#61DAFB]'
  },
  { 
    name: 'Vue', 
    icon: 'fab fa-vuejs text-4xl text-[#42b883]'
  },
  { 
    name: 'Node.js', 
    icon: 'fab fa-node-js text-4xl text-[#339933]'
  },
  { 
    name: 'Python', 
    icon: 'fab fa-python text-4xl text-[#3776AB]'
  },
  { 
    name: 'TypeScript', 
    icon: 'devicon-typescript-plain text-4xl text-[#007ACC]'
  },
  { 
    name: 'Docker', 
    icon: 'fab fa-docker text-4xl text-[#2496ED]'
  },
  { 
    name: 'AWS', 
    icon: 'fab fa-aws text-4xl text-[#FF9900]'
  },
  { 
    name: 'MongoDB', 
    icon: 'devicon-mongodb-plain text-4xl text-[#47A248]'
  }
];

const projects = [
  {
    name: 'CloudScale',
    description: 'Plataforma de automatización cloud-native para escalado dinámico',
    image: '/projects/cloudscale.jpg',
    tags: ['AWS', 'Kubernetes', 'Go']
  },
  {
    name: 'DevMetrics',
    description: 'Dashboard analytics para equipos de desarrollo',
    image: '/projects/devmetrics.jpg',
    tags: ['React', 'GraphQL', 'Node.js']
  },
  {
    name: 'CodeSync',
    description: 'Herramienta de colaboración en tiempo real para programadores',
    image: '/projects/codesync.jpg',
    tags: ['WebSocket', 'Vue', 'MongoDB']
  }
];
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>