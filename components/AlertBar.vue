<template>
  <div class="alert">
      <div class="alert__container">
        <div class="alert__left">
            <div class="button signup-btn wide" @click.stop="doModal()">Add My Business</div>
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
            console.log('launching')
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/buttons.scss';

.alert {
    height: 6rem;
    background: $color1;

    &__container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 6rem;
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

.wide {
    width: 50%;
    color: $color1;
}

</style>