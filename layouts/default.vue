<template>
  <div>
    <TopBar />
    <TopNav />
    <Map />
    <Events />
    <nuxt />
    <!-- <BotBar /> -->
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import TopNav from '@/components/TopNav'
import Events from '@/components/Events'
import BotBar from '@/components/BottomBar'
import Map from '@/components/sub/Map'

export default {
  components: {
    TopBar,
    TopNav,
    Events,
    BotBar,
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
</style>
