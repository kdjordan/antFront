<template>
    <GoogleMapLoader
        :mapConfig="mapConfig"
        apiKey="AIzaSyA7XF3a9PWX6ApyqWcnzaQuH7PL49Pb82k">

        <template slot-scope="{ google, map }">
            <GoogleMapMarker
                v-for="marker in markers"
                :key="marker.id"
                :marker="marker"
                :google="google"
                :map="map"
            />
        </template>
    </GoogleMapLoader>
    
</template>

<script>
import GoogleMapLoader from './sub/GoogleMapLoader'
import GoogleMapMarker from './sub/GoogleMapMarker'
import { mapSettings } from '@/static/constants/mapSettings'


export default {
    components: {
    GoogleMapLoader,
    GoogleMapMarker
  },
  data() {
      return {
          markers: [
        {
          id: "a",
          position: { lat: 43.286620, lng: -93.202380 }
        },
        {
          id: "b",
          position: { lat: 42.583190, lng: -87.820270 }
        },
        {
          id: "c",
          position: { lat: 6, lng: 97 }
        }
      ],
      }
  },
  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: { lat: 41.8780, lng: -93.0977 }
      }
    },
    mapCenter() {
        return this.markers[1].position;
    }
  },

}
</script>

<style>

</style>