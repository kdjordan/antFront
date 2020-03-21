<template>
  <div class="banner-ads">
      <div class="banner-ads__left">
        <div class="banner-ads__left--text">Say Hello to Our Sponsers !</div>
        <div class="button gold--banner-ads" @click.stop="doModal">
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
    methods: {
        doModal() {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'banner')
        }
    }

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
        flex: 1 1 70%;
        text-align: center;
    
        & img {
            width: 100%;
            max-width: 70rem;
            cursor: pointer;
        }
    }

}

</style>