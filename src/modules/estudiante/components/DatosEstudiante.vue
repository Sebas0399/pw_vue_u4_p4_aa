<template>
  <div class="container-form">
    <input v-model="cedula" type="text">
    <button @click="consultarEstudiante">Consultar</button>
    <label for="">Nombre</label>
    <input v-model="nombre" type="text">
    <label for="">Apellido</label>
    <input  v-model="apellido" type="text">
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      nombre: null,
      apellido: null,

      cedula: null,
    };
  },

  methods: {
    async consultarEstudiante() {

      const data=await obtenerEstudianteFachada(this.cedula);
      console.log(data)
      this.nombre=data.nombre
      this.apellido=data.apellido
    },
  },
};
</script>

<style>
.container-form{
    display: grid;
    justify-content: center;
    align-items: center;
}
input{
    border-radius: 5px;
    margin: 10px;
}
</style>