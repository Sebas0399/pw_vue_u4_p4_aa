<template>
  <nav class="menu">
    <ul>
      <li class="nav-item">
        <router-link
          class="nav-link active"
          aria-current="page"
          to="/actualizar"
          >Actualizar</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link active"
          aria-current="page"
          to="/consultar"
          >Consultar</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link active"
          aria-current="page"
          to="/guardar"
          >Guardar</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link active"
          aria-current="page"
          to="/eliminar"
          >Eliminar</router-link
        >
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

.router-link-active{
  background-color: #04AA6D;

}
</style>