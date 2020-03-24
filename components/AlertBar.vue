<template>
<div>
<div class="wave-top"></div>
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
  <div class="wave-bottom"></div>
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

.wave-top {
    @include wavy(-7px, 2rem, $color1);
}

.wave-bottom {
    @include wavy(27px, 2rem, $color1);
}

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
        flex: 1 1 50%;
        margin-left: 2rem
    }

    &__right {
        margin-right: 2rem;
        flex: 1 1 50%;
    }
}
</style>