<template>
  <div>
   <BannerAds />
    <AlertBar />
    <!-- <Map class="map" /> -->
    <Events />
    <Sponsers />
  </div>
</template>

<script>
import BannerAds from '@/components/BannerAds'
import AlertBar from '@/components/AlertBar'
import Events from '@/components/Events'
import Map from '@/components/Map'
import Sponsers from '@/components/Sponsers'

export default {
  fetch({store}) {
       store.dispatch('news/loadNews').then((res) => {
                store.dispatch('events/loadData')
                store.dispatch('events/loadFeaturedEvents')
            }).catch((e) => {
                console.log(e)
            })
  },
  components: {
    BannerAds,
    AlertBar,
    Events,
    Map,
    Sponsers,
  }
  
}
</script>

<style lag="scss" scoped>

.map {
  height: 75rem;
  padding-bottom: 8rem;
}

</style>
