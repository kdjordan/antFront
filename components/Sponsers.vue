<template>
  <div class="sponsers">
      <div class="sponsers__top">
          Make Sure to Visit Our Sponsers !
      </div>
      <div class="sponsers__bottom">
        <div v-for="(sponser, index) in getSponsers" :key="index">
            <img :src="`${sponser.url}`" :alt="`${sponser.name}`" class="sponsers__image">
                <!-- <h3>{{sponser.name}}</h3> -->
            
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
    data() {
        return {
          
        }
    }


}
</script>

<style lang="scss" scoped>

.sponsers {
    padding: 5rem 0;
    background: $color2;
    margin-top: 2rem;

        &__top {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 4rem;
            font-family: $font4;
            margin-bottom: 5rem;
        }

        &__bottom {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

    & h3 {
        // text-align: center;
        font-family: $font4;
    }

    &__image {
        max-width: 25rem;
    }
}
</style>