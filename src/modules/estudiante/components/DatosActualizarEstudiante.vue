<template>
    <div class="container-form">
        <label for="">Id</label>
    <input v-model="id" type="text">
  <label for="">Cedula</label>
    <input v-model="cedula" type="text">
    <label for="">Nombre</label>
    <input  v-model="nombre" type="text">
    <label for="">Apellido</label>
    <input  v-model="apellido" type="text">
    <label for="">Provincia</label>
    <input  v-model="provincia" type="text">
    <button @click="actualizarEstudiante">Actualizar</button>
</div>
</template>

<script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: null,
      provincia:null,
      id:null

    };
  },

  methods: {
    async actualizarEstudiante() {
        const data={
            cedula:this.cedula,
            nombre:this.nombre,
            apellido:this.apellido,
            provincia:"Pichincha"
        }
      await actualizarEstudianteFachada(data,this.id);
      
    },
  },
};
</script>

<style scoped>
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