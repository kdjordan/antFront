<template>
  <div class="alert">
      <div class="alert__left">
        <Alerts />
      </div>
      <div class="alert__right">
          <Search />
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
    }

}
</script>

<style lang="scss" scoped>

.alert {
    height: 6rem;
    width: 100%;
    background: $color1;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__left {
        flex: 1 1 50%;
    }

    &__right {
        text-align: center;
        flex: 1 1 50%;
    }
}

</style>