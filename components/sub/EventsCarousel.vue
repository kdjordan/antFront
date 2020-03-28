<template>
  <div class="carousel">
      <h3>Featured Events</h3>
      <div class="underline short"></div>
      <div class="button button--primary w-50  m__b--3" @click.stop="doModal">add my featured event</div>
      <div class="carousel__container">
          <img src="~assets/svg/minus.svg" alt=""  class="indicator"  @click="moveLeft">
          <div class="image">
              <img src="~/assets/images/featured-events/fx-ackermans.png" alt="">
          </div>
          <div class="image">
              <img src="~/assets/images/featured-events/fx-geneva.png" alt="">
          </div>
          <div class="image">
              <img src="~/assets/images/featured-events/fx-junkwood.png" alt="">
          </div>
          <div class="image">
              <img src="~/assets/images/featured-events/fx-junkin-sisters.png" alt="">
          </div>
          <img src="~assets/svg/plus.svg" alt=""  class="indicator"  @click="moveRight">
      </div>

  </div>
</template>

<script>
export default {
    methods: {
        moveRight() {
            console.log('clicked right')
        },
        moveLeft() {
            console.log('clicked right')
        }
    }

}
</script>

<style lang="scss" scoped>

.short {
    width: 60%;
}

.indicator {
    cursor: pointer;
    width: 3rem;
}

.w-50 {
    margin: 0 auto;
    width: 25rem;
    margin-bottom: 2rem;
}

h3 {
    margin: 0 auto;
    font-size: 5rem;
    font-family: $font4;
    color: $color1;
    text-align: center;
    margin-bottom: 2rem;
}

.image {
    margin: 0 1.5rem;

    & img {
        width: 100%;
        max-width: 60rem;
        height: 100%;
        max-height: 40rem;
    }
}

.carousel {
    // border: 1px solid red;
    width: 100%;

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: 0 auto;
    }
}

</style>