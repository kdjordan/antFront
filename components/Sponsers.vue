<template>
<div>
  <div class="sponsers">
      <div class="sponsers__top">
          <div class="sponsers__top--title">Make Sure to Visit Our Sponsers !</div>
          <div class="button button--primary" @click.stop="doModal">become a sponser</div>
      </div>
      <div class="sponsers__bottom">
        <div v-for="(sponser, index) in getSponsers" :key="index">
            <img :src="`${sponser.url}`" :alt="`${sponser.name}`" class="sponsers__image">        
        </div>
      </div>
  </div>
</div>
</template>

<script>


import { mapGetters } from 'vuex'

export default {
    
computed: {
    ...mapGetters({
        getSponsers: 'sponsers/getSponsers'
    }),
     
},
methods: {
        doModal() {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'sponser')
        }
    }
}
</script>

<style lang="scss" scoped>

.sponsers {
    padding: 5rem 0;
    box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.75);

    // background: $color2;

        &__top {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 2rem;

            &--title {
                color: $color1;
                font-size: 4rem;
                padding: 1rem 2rem;
                font-family: $font4;
                margin-bottom: 2rem;
                // border-top: 4px solid $color1;
                border-bottom: 4px solid $color1;
                border-radius: 1rem;
            }
            
        }

        &__bottom {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

    & h3 {
        font-family: $font4;
       
    }

    &__image {
        max-width: 25rem;
    }
}
</style>