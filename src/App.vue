<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <EstudianteEliminar/>
</template>

<script>
import Estudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
import EstudianteGuarda from './modules/estudiante/pages/GuardaEstudiante.vue'
import EstudianteActualizar from './modules/estudiante/pages/ActualizarEstudiante.vue'
import EstudianteEliminar from './modules/estudiante/pages/EliminarEstudiante.vue'



export default {
  name: 'App',
  components: {
    Estudiante,EstudianteGuarda,EstudianteActualizar,EstudianteEliminar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
