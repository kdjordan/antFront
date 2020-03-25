<template>
  <div>
   <BannerAds />
    <AlertBar />
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
    <Events />
  </div>
</template>

<script>
import BannerAds from '@/components/BannerAds'
import AlertBar from '@/components/AlertBar'
import Events from '@/components/Events'
import Map from '@/components/Map'
import Sponsers from '@/components/Sponsers'
import FeaturedEvents from '@/components/sub/FeaturedEvents'
import { mapSettings } from '../static/constants/mapSettings'

export default {
  transition: 'fade',
  components: {
    BannerAds,
    AlertBar,
    Events,
    Map,
    Sponsers,
    FeaturedEvents
  },
}
</script>

<style lang="scss" scoped>

.map-container {
  padding: 3rem 1rem 9rem 1rem;
  width: 100%;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.75);

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
 