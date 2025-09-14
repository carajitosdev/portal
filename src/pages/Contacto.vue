<template>
  <div class="container mx-auto px-4 pt-24 pb-16">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100">
        Contáctanos
      </h1>

      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h3 class="text-xl font-bold text-blue-300 mb-6">Información de Contacto</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="bg-blue-500/20 p-3 rounded-lg">
                  <i class="fas fa-envelope text-blue-300"></i>
                </div>
                <div>
                  <p class="text-sm text-blue-100/70">Email</p>
                  <p class="text-blue-100">contacto@nekerit.dev</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="bg-blue-500/20 p-3 rounded-lg">
                  <i class="fas fa-map-marker-alt text-blue-300"></i>
                </div>
                <div>
                  <p class="text-sm text-blue-100/70">Ubicación</p>
                  <p class="text-blue-100">Barcelona, España</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h3 class="text-xl font-bold text-blue-300 mb-6">Síguenos</h3>
            <div class="flex gap-4">
              <a href="#" class="bg-blue-500/20 p-3 rounded-lg hover:bg-blue-500/30 transition-colors">
                <i class="fab fa-github text-blue-300"></i>
              </a>
              <a href="#" class="bg-blue-500/20 p-3 rounded-lg hover:bg-blue-500/30 transition-colors">
                <i class="fab fa-linkedin text-blue-300"></i>
              </a>
              <a href="#" class="bg-blue-500/20 p-3 rounded-lg hover:bg-blue-500/30 transition-colors">
                <i class="fab fa-twitter text-blue-300"></i>
              </a>
            </div>
          </div>
        </div>

        <form class="bg-white/5 backdrop-blur-sm rounded-xl p-8 space-y-6">
          <div>
            <label class="block text-sm font-medium text-blue-200 mb-2">Nombre</label>
            <input type="text" class="w-full bg-white/10 rounded-lg px-4 py-3 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-blue-200 mb-2">Email</label>
            <input type="email" class="w-full bg-white/10 rounded-lg px-4 py-3 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-blue-200 mb-2">Mensaje</label>
            <textarea rows="4" class="w-full bg-white/10 rounded-lg px-4 py-3 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
