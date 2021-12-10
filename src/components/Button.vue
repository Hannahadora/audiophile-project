<template>
  <div>
    <button
      class="h-button"
      :class="{ 'p-btn': pryBtn, 's-btn': secBtn, 't-btn': tertBtn }"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  data: "Button",
  props: {
    pryBtn: Boolean,
    secBtn: Boolean,
    tertBtn: Boolean,
  },
};
</script>

<style scoped>
.h-button {
  padding: 10px 24px;
  border-radius: 5px;
}
.p-btn {
  background: rgb(217, 126, 74);
  color: rgb(250, 250, 250);
}
.s-btn {
  background: #000000;
  color: rgb(250, 250, 250);
}
.t-btn {
  background: rgb(217, 126, 74);
  color: #000000;
  border: 1px solid #000;
}
</style>