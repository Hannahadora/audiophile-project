<template>
  <div class="h-wrapper nav">
    <div>
      <img src="../assets/images/shared/desktop/logo.svg" alt="logo" />
    </div>
    <div>
      <ul class="flex items-center justify-center gap-10">
        <li class="nav-list-items">Home</li>
        <li class="nav-list-items">Headphones</li>
        <li class="nav-list-items">Speakers</li>
        <li class="nav-list-items">Earphones</li>
      </ul>
    </div>
    <div>
      <img src="../assets/images/shared/desktop/icon-cart.svg" alt="cart" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.nav-list-items {
    text-transform: capitalize;
    color: #fff;
}
</style>