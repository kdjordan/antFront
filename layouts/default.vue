<template>
  <div>
    <TopBar />
    <TopNav />
    <nuxt />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import TopNav from '@/components/TopNav.vue'
export default {
  components: {
    TopBar,
    TopNav
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
