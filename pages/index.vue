<template>
  <div>
   <!-- <Carousel /> -->
    
    <div class="map-container">
      <div class="map-container__inner">
        <div class="map-container__left">
          <Map class="map" />
        </div>
        <div class="map-container__right">
          <FeaturedEvents />
        </div>
      </div>
    </div>
    <!-- <Events />  -->
  </div>
</template>

<script>
import AlertBar from '@/components/AlertBar'
import Events from '@/components/Events'
import Map from '@/components/Map'
import Sponsers from '@/components/Sponsers'
import FeaturedEvents from '@/components/sub/FeaturedEvents'
import Carousel from '@/components/sub/Carousel'
import { mapSettings } from '../static/constants/mapSettings'

export default {
  transition: 'fade',
  components: {
    AlertBar,
    Events,
    Map,
    Sponsers,
    FeaturedEvents,
    Carousel
  },
}
</script>

<style lang="scss" scoped>

.map-container {
  padding: 3rem 1rem 4rem 1rem;
  width: 100%;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: top;
    max-width: 180rem;
    margin: 0 auto;
  }
  

  &__left {
    width: 60%;
    margin: 0 .5rem;
  }

  &__right {
    width: 40%;
    min-width: 40rem;
    margin: 0 .5rem;
  }
}

.map {
  height: 50rem;
}


</style>
 