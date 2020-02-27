<template>
  <div id="map">
      Map Here
  </div>
</template>

<script>
export default {
    methods: {
        initMap() {
            console.log('called')
        }
    },
mounted() {
    
        console.log('calling fetchhh from map')
        this.$axios.get('/map/api').
        then((res) => {
            this.initMap();
            console.log(res);
        }).catch((err) => {
            console.log('the error is ::');
            console.log(err);
        })
    
}

}
</script>

<style>

</style>