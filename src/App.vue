<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import './assets/theme.css'
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore()
    store.commit('loadTasks')
  },
  components: {
    TheNavbar
  }
}
</script>
