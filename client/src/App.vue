<template>
  <div id="app" class="container-fluid h-100">
    <nav-bar />
    <div class="container-fluid">
      <error />
      <router-view />
    </div>
    <footer class="bg-light text-center p-3">
      &copy; 2020
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Error from "./components/Error";

export default {
  components: {
    NavBar,
    Error
  }
};
</script>
