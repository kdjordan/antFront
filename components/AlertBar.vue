<template>

<div class="alert">
    <div class="alert__container">
    <div class="alert__left">
        <transition name="fade" mode="out-in">
            <Alerts />
        </transition>
    </div>
    <div class="alert__right">
        <Search />
    </div>
    </div>
</div>

</template>

<script>
import Alerts from '@/components/sub/Alerts'
import Search from '@/components/sub/Search'

export default {
    components: {
        Alerts,
        Search
    },
    methods: {
        doModal() {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'map')
        }
    }
}
</script>

<style lang="scss" scoped>

.alert {
    background: $color1;

    &__container {
         display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 180rem;
        margin: 0 auto;
        height: 6rem;
    }

    &__left {
        width: 60%;
    }

    &__right {
        width: 40%;
    }
}
</style>