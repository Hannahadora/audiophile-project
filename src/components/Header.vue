<template>
  <div class="header">
    <Nav />
  </div>
</template>


<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "Header",
  components: {
    Nav,
  },
};
</script>

<style>
.header {
    background: #000;
    padding-top: 20px;
    padding-bottom: 40px;
}
</style>