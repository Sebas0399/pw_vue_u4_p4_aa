<template>
  <ResponsiveB/>
</template>

<script>
import NavBar from './components/NavBar.vue'

import Estudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
import EstudianteGuarda from './modules/estudiante/pages/GuardaEstudiante.vue'
import EstudianteActualizar from './modules/estudiante/pages/ActualizarEstudiante.vue'
import EstudianteEliminar from './modules/estudiante/pages/EliminarEstudiante.vue'
import ResponsiveA from './components/Responsive1.vue'
import ResponsiveB from './components/Responsive2.vue'



export default {
  name: 'App',
  components: {
    ResponsiveB,EstudianteGuarda,EstudianteActualizar,EstudianteEliminar,NavBar
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
