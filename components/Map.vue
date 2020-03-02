<template>
    <GoogleMapLoader
        :mapConfig="mapConfig"
        apiKey=MAP_KEY>

        <template slot-scope="{ google, map }">
            <GoogleMapMarker
                v-for="marker in getMarkers"
                :key="marker.id"
                :marker="marker"
                :google="google"
                :map="map"
                :info="marker.info"
            />
        </template>
    </GoogleMapLoader>
   
</template>

<script>
import GoogleMapLoader from './sub/GoogleMapLoader'
import GoogleMapMarker from './sub/GoogleMapMarker'
import { mapSettings } from '@/static/constants/mapSettings'
import { mapGetters } from 'vuex'

export default {
    components: {
    GoogleMapLoader,
    GoogleMapMarker
  },
  data() {
      return {
          MAP_KEY: process.env.MAP_KEY,
          markers: [
        {
          id: "a",
          position: { lat: 43.286620, lng: -93.202380 },
          info : {
            name: "Barn Boy Antiques",
            type: "shop",
            address: "125 W 4th St, Grand Island, NE 68801",
            directions: "https://www.google.com/maps/dir/125+W+4th+St,+Grand+Island,+NE+68801",
            hours: "Open Monthly"
          }
        },
        {
          id: "b",
          position: { lat: 42.583190, lng: -87.820270 },
          info: {
            name: "Lulu Birds",
            type: "shop",
            address: "720-58th St , Kenosha, WI 53140",
            directions: "https://www.google.com/maps?saddr=+720-58th+St+,Kenosha,WI,53140",
            hours: "TH: 1 to 5pm, F: 10 to 5pm, SAT: 10 to 4pm, SUN: 11 to 3pm"
          }
        },
      ],
      }
  },
  computed: {
    ...mapGetters({
      getMarkers : 'mapMarkers/getMarkers'
    }), 
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
  methods: {
    test() {
      console.log('clicked')
    }
  }

}
</script>

<style>

</style>