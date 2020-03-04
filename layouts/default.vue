<template>
  <div>
    <TopNav />
    <BannerAds />
    <AlertBar />
    <!-- <Map class="map" /> -->
    <Events />
    <nuxt />
    <Footer />
    <BotBar />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import BannerAds from '@/components/BannerAds'
import AlertBar from '@/components/AlertBar'
import Events from '@/components/Events'
import Footer from '@/components/Footer'
import BotBar from '@/components/BottomBar'
import Map from '@/components/Map'

export default {
  components: {
    BannerAds,
    AlertBar,
    TopNav,
    Events,
    BotBar,
    Footer,
    Map
  }

}
</script>
<style lang="scss">

*, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
   background-image: url('~assets/images/top-bg.jpg');
    background-position: top;
    background-repeat: repeat;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    min-height: 100vh;
    font-family: 'Roboto';
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  text-transform: uppercase;
}

.map {
  height: 75rem;
  padding-bottom: 8rem;
}
</style>
