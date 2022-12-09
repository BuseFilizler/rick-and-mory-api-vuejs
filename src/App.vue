<template>
  <div id="app" class="h-screen w-screen">
    <TheHeader></TheHeader>
    <NavBar></NavBar>
    <router-view />

  </div>
</template>

<script>
import NavBar from '../src/components/header/TheNavbar.vue'
import TheHeader from './components/header/TheHeader.vue'



export default {
  data() {
    return {
      character: []
    }
  },
  components: {
    NavBar,
    TheHeader,

  },

}
</script>
