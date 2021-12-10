<template>
  <div id="app" class="">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>


<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
