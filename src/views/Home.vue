<template>
  <div class="h-wrapper">
    <div class="flex flex-row gap-10 items-center my-40">
      <div class="w-1/3">
        <div class="display-rack">
          <img class="cat-image" src="../assets/images/shared/desktop/image-headphones.png" />
          <p class="font-bold">HEADPHONES</p>
          <span>SHOP</span>
        </div>
      </div>
      <div class="w-1/3 relative">
        <img class="cat-image" src="../assets/images/shared/desktop/image-speakers.png" />
        <div class="display-rack">
          <p class="font-bold">SPEAKERS</p>
          <span>SHOP</span>
        </div>
      </div>
      <div class="w-1/3 relative">
        <img class="cat-image" src="../assets/images/shared/desktop/image-earphones.png" />
        <div class="display-rack">
          <p class="font-bold">EARPHONES</p>
          <span>SHOP</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-10">
      <div class="sect1">
      <img class="" src="../assets/images/shared/desktop/image-speakers.png" />
      </div>

      <div>

      </div>

      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },

  data() {
    return {

    }
  },
  
}
</script>

<style scoped>
.display-rack {
  width: 100%;
  height: 200px;
  background: #f2f2f2;
  text-align: center;
  border-radius: 5px;
  padding: 132px 0px;
}
.cat-image {
  position: absolute;
  top: -102px;
  /* margin-bottom: -20px; */
}
.sect1 {
  background-color: rgb(217, 126, 74);
  border-radius: 5px;
  width: 100%;
  /* height: 250px; */
  padding: 70px 0px;
}
</style>
