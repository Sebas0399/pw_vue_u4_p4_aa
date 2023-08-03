<template>
    <div class="container-form">
        <label for="">Id</label>
    <input v-model="id" type="text">
  
    <button @click="eliminarEstudiante">Eliminar</button>
</div>
</template>

<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
     
      id:null

    };
  },

  methods: {
    async eliminarEstudiante() {
       
      const data=await eliminarEstudianteFachada(this.id);
      console.log(data)
      
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