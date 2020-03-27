<template>
  <div class="carousel">
      <div class="carousel__container">
          <div class="image">
              <img src="~/assets/images/featured-events/fx-As2.png" alt="">
          </div>
          <div class="image">
              <img src="~/assets/images/featured-events/fx-geneva.png" alt="">
          </div>
          <div class="image">
              <img src="~/assets/images/featured-events/fx-junkwood.png" alt="">
          </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.image {
    margin: 0 1rem;

    & img {
        max-height: 20rem;
    }
}

.carousel {
    padding: 2rem;
    border: 1px solid red;
    width: 100%;

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>