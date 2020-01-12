<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title">Smoothie App!</span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab pink">
          <!--powodem dla którego dajemy a tag jest dodanie klas materialize na tag a, a nie bezpośrednio na router-link-->
          <router-link :to="{ name: 'AddSmoothie' }">
            <i class="material-icons">add</i>
            <!--add i dodaje ikonę plusa-->
          </router-link>
        </a>
      </div>
    </nav>
  </div>

</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .navbar nav {
    padding: 0 20px;

  }

</style>

<!--i teraz trzeba zaimportować NAVBAR do root component-->
