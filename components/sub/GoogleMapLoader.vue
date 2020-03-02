<template>
  <div>
    <div
      class="google-map"
      ref="googleMap"
    ></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
    <div class="legend">
      <div class="legend__flags-container">
        
          <div class="legend__flags-container--entry">
            <img src="~/assets/icons/antique.png" alt="">
            <div class="legend__flags-container--title">Shops</div>
          </div>

           <div class="legend__flags-container--entry">
            <img src="~/assets/icons/food.png" alt="">
            <div class="legend__flags-container--title">Food</div>
          </div>
          
          <div class="legend__flags-container--entry">
            <img src="~/assets/icons/winery.png" alt="">
            <div class="legend__flags-container--title">Winery</div>
          </div>

          <div class="legend__flags-container--entry">
            <img src="~/assets/icons/brewery.png" alt="">
            <div class="legend__flags-container--title">Brewery</div>
          </div>


           <div class="legend__flags-container--entry">
            <img src="~/assets/icons/lodging.png" alt="">
            <div class="legend__flags-container--title">Lodging</div>
          </div>

          <div class="legend__flags-container--entry">
            <img src="~/assets/icons/other.png" alt="">
            <div class="legend__flags-container--title">Other</div>
          </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  props: {
    mapConfig: Object,
    apiKey: String
  },

  data() {
    return {
      google: null,
      map: null
    };
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: `${process.env.MAP_KEY}`
    });
    this.google = googleMapApi;
    this.initializeMap();
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 5rem;
}

.legend {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9rem;
  font-family: $font2;


  &__flags-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 70%;

    &--entry {
      display: flex;
      justify-content: center;
      align-items: center;

    }

    &--title {
      margin-left: 1rem;
      font-size: 2rem;
    }
  }
}
.google-map {
  width: 100%;
  min-height: 100%;
}
</style>
