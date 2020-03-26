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

img {
    width: 60%;
}

.banner-ads {
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;


}

</style>