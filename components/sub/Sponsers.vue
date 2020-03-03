<template>
  <div class="sponsers">
      <div v-for="(sponser, index) in sponsers" :key="index">
          <img :src="`${sponser.url}`" :alt="`${sponser.name}`" class="sponsers__image">
            <h3>{{sponser.name}}</h3>
          
      </div>

  </div>
</template>

<script>
export default {
props: ['sponsers']

}
</script>

<style lang="scss" scoped>

.sponsers {

    & h3 {
        // text-align: center;
        font-family: $font4;
    }

    &__image {
        max-width: 25rem;
    }
}
</style>