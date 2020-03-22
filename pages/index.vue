<template>
  <div>
   <BannerAds />
    <AlertBar />
    <!-- <Map class="map" /> -->
    <Events />
  </div>
</template>

<script>
import BannerAds from '@/components/BannerAds'
import AlertBar from '@/components/AlertBar'
import Events from '@/components/Events'
import Map from '@/components/Map'
import Sponsers from '@/components/Sponsers'

export default {
  transition: 'fade',
  components: {
    BannerAds,
    AlertBar,
    Events,
    Map,
    Sponsers,
  },
}
</script>

<style lag="scss" scoped>

.map {
  height: 75rem;
  padding-bottom: 8rem;
}

</style>
