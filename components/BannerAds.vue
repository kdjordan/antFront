<template>
<div class="banner-ads">
    <img src="~assets/banners/dixie-banner.png" alt="">
</div>
</template>

<script>
export default {
    methods: {
        doModal() {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'banner')
        }
    }

}
</script>

<style lang="scss" scoped>


.banner-ads {
    // height: 20rem;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;


}

</style>