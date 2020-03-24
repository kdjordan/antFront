<template>
  <div>
   <BannerAds />
    <AlertBar />
    <div class="map-container">
      <div class="map-container__left">
        <Map class="map" />
      </div>
      <div class="map-container__right">
        <FeaturedEvents />
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 8rem;

  &__left {
    flex-grow: 1;
    width: 45%;
    margin-left: 5%;
  }

  &__right {
    flex: 1 1 50%;
  }
}

.map {
  height: 50rem;
}


</style>
 