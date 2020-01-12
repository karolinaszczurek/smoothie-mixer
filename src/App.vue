<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>

  import Navbar from "@/components/Navbar"
//  @ oznacza idź do root directory, czyli do folderu src
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style>

</style>
