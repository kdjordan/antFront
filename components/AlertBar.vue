<template>
  <div class="alert">
      <div class="alert__container">
        <div class="alert__left">
            <div class="button white-btn size-50" @click.stop="doModal()">Add My Business</div>
        </div>
        <div class="alert__middle">
            <Alerts />
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
    height: 6rem;
    background: $color1;

    &__container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 6rem;
        max-width: 180rem;
        margin: 0 auto;
    }

    &__left {
        flex: 1 1 33%;
        margin-left: 2rem
    }

    &__middle {
        flex: 1 1 33%;
    }

    &__right {
        margin-right: 2rem;
        flex: 1 1 33%;
    }
}
</style>