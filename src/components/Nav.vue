<template>
  <div class="nav">
    <div>
      <img src="../assets/images/shared/desktop/logo.svg" alt="logo" />
    </div>
    <div class="flex items-center justify-center gap-10">
      <router-link to="/" class="nav-list-items">Home</router-link>
      <router-link to="/products/headphones" class="nav-list-items"
        >Headphones</router-link
      >
      <router-link to="/products/speakers" class="nav-list-items">Speakers</router-link>
      <router-link to="/products/earphones" class="nav-list-items"
        >Earphones</router-link
      >
    </div>
    <div>
      <router-link to="/cart">
        <img src="../assets/images/shared/desktop/icon-cart.svg" alt="cart" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
}

.nav-list-items {
  text-transform: uppercase;
  color: #fff;
  padding: 24px 0px;
  font-size: 14px;
  font-weight: 600;
}

.nav a.router-link-active {
  color: #D87E4A;
}
</style>