<template>
  <NavBar/>
</template>

<script>
import NavBar from './components/NavBar.vue'

import Estudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
import EstudianteGuarda from './modules/estudiante/pages/GuardaEstudiante.vue'
import EstudianteActualizar from './modules/estudiante/pages/ActualizarEstudiante.vue'
import EstudianteEliminar from './modules/estudiante/pages/EliminarEstudiante.vue'



export default {
  name: 'App',
  components: {
    Estudiante,EstudianteGuarda,EstudianteActualizar,EstudianteEliminar,NavBar
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
}
</style>
