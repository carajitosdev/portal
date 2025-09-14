<template>
  <div class="container mx-auto px-4 pt-24 pb-16">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-100">
        Contáctanos
      </h1>

      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h3 class="text-xl font-bold text-green-300 mb-6">Información de Contacto</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="bg-green-500/20 p-3 rounded-lg">
                  <i class="fas fa-envelope text-green-300"></i>
                </div>
                <div>
                  <p class="text-sm text-green-100/70">Email</p>
                  <p class="text-green-100">contacto@nekerit.dev</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="bg-green-500/20 p-3 rounded-lg">
                  <i class="fas fa-map-marker-alt text-green-300"></i>
                </div>
                <div>
                  <p class="text-sm text-green-100/70">Ubicación</p>
                  <p class="text-green-100">Barcelona, España</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h3 class="text-xl font-bold text-green-300 mb-6">Síguenos</h3>
            <div class="flex gap-4">
              <a href="https://github.com/nekerit" class="bg-green-500/20 p-3 rounded-lg hover:bg-green-500/30 transition-colors">
                <i class="fab fa-github text-green-300"></i>
              </a>
              <a href="https://linkedin.com/company/nekerit" class="bg-green-500/20 p-3 rounded-lg hover:bg-green-500/30 transition-colors">
                <i class="fab fa-linkedin text-green-300"></i>
              </a>
              <a href="https://twitter.com/nekerit" class="bg-green-500/20 p-3 rounded-lg hover:bg-green-500/30 transition-colors">
                <i class="fab fa-twitter text-green-300"></i>
              </a>
            </div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="bg-white/5 backdrop-blur-sm rounded-xl p-8 space-y-6">
          <div>
            <label class="block text-sm font-medium text-green-200 mb-2">Nombre</label>
            <input v-model="formData.name" type="text" required
                   class="w-full bg-white/10 rounded-lg px-4 py-3 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-green-200 mb-2">Email</label>
            <input v-model="formData.email" type="email" required
                   class="w-full bg-white/10 rounded-lg px-4 py-3 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-green-200 mb-2">Mensaje</label>
            <textarea v-model="formData.message" rows="4" required
                      class="w-full bg-white/10 rounded-lg px-4 py-3 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          </div>
          <button type="submit" 
                  :disabled="sending"
                  class="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white font-medium py-3 rounded-lg transition-colors">
            {{ sending ? 'Enviando...' : 'Enviar mensaje' }}
          </button>
          <div v-if="message" :class="{'text-green-400': !error, 'text-red-400': error}"
               class="text-center mt-4">
            {{ message }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const sending = ref(false);
const message = ref('');
const error = ref(false);

const handleSubmit = async () => {
  sending.value = true;
  message.value = '';
  error.value = false;

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok) {
      message.value = 'Mensaje enviado correctamente';
      formData.name = '';
      formData.email = '';
      formData.message = '';
    } else {
      throw new Error(data.error || 'Error al enviar el mensaje');
    }
  } catch (err) {
    error.value = true;
    message.value = err.message || 'Error al enviar el mensaje';
  } finally {
    sending.value = false;
  }
};
</script>
