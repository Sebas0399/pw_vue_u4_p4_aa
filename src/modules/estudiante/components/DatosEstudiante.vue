<template>
  <div class="p-2 card position-absolute top-50 start-50 translate-middle rounded border border-primary border-4" >
    <input v-model="cedula" type="text" class="form-control">
    <button @click="consultarEstudiante" class="btn btn-primary mb-3">Consultar</button>
    <label for="" class="form-label">Nombre</label>
    <input v-model="nombre" type="text" class="form-control">
    <label for="" class="form-label">Apellido</label>
    <input  v-model="apellido" type="text" class="form-control">
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