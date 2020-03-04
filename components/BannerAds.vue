<template>
  <div class="banner-ads">
      <div class="banner-ads__left">
        <div class="banner-ads__left--text">Say Hello to Our Sponsers !</div>
        <div class="banner-ads__button">
            advertise with us
        </div>

      </div>
      <div class="banner-ads__right">
        <img src="~assets/banners/dixie-banner.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.banner-ads {
    height: 20rem;
    display: flex;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;

    &__left {
        flex:1 1 30%;
        text-align: center;

        &--text {
            font-family: $font4;
            font-size: 2rem;
        }
    }

    &__right {
        flex:1 1 70%;
        text-align: center;
    
        & img {
            width: 100%;
            max-width: 70rem;
            cursor: pointer;
        }
    }

    &__button {
        text-transform: uppercase;
        font-size: 1.3rem;
        cursor: pointer;
        color: $color2;
        border: 2px solid $color2;
        border-radius: 2rem;
        width: 60%;
        margin: 0 auto;
        padding: 1rem 2rem;
        margin-top: 2rem;
        transition: all .4s;
        
        &:hover {
            background: $color2;
            color: white;
        }
    }
}

</style>