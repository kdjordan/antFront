<template>
  <div>
      <h1>Dealers</h1>
      {{getDealer}}
      <img :src="`${getDealer.image}`" alt="">
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 

export default {

  transition: 'fade',
  computed: {
    ...mapGetters({
      getDealer: 'dealers/getDealer'
    })
  }

}
</script>

<style lang="scss" scoped>

</style>