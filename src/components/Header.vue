<template>
  <div class="header h-wrapper bg-black" :class="{ 'home-hero': !activeNav }">
    <div class="pt-7">
      <Nav />
    </div>
    <div
      v-if="!activeNav"
      class="flex flex-col items-start justify-center py-40"
    >
      <span class="baby-header h-track"> NEW PRODUCT </span>
      <h1 class="mt-3 h-leading-60">
        XX99MARK <br />
        II<br />
        HEADPHONE
      </h1>
      <div class="w-1/3 mt-3">
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>
      <Button :pryBtn="true" class="mt-6">SEE PRODUCT</Button>
    </div>
    <div v-else class="text-center py-40">
      <h2 class="heading">
        {{ activeNav }}
      </h2>
    </div>
  </div>
</template>


<script>
import Nav from "@/components/Nav.vue";
import Button from "./Button.vue";

export default {
  name: "Header",
  components: {
    Nav,
    Button,
  },

  computed: {
    activeNav() {
      return this.$route.name;
    },
  },
};
</script>

<style>
.header {
  padding-top: 20px;
  padding-bottom: 40px;
  max-height: 100vh;
  color: #fafafa;
}
</style>