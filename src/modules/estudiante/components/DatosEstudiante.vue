<template>
  <div class="datos">
    <input v-model="cedula" type="text">
    <button @click="consultarEstudiante">Consultar</button>
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: null,
    };
  },

  methods: {
    async consultarEstudiante() {
      await obtenerEstudianteFachada(this.cedula);
    },
  },
};
</script>

<style>
</style>