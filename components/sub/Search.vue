<template>
  <div class="search">  
    <input type="text" placeholder="Search for a shop or event...">
    <img role="img" src="~assets/svg/mag-glass.svg" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.search {
    width: 100%;
    position: relative;


    & input {
        width: 30rem;
        float: right;
        border-radius: 2rem;
        outline: none;
        border: none;
        padding: .9rem 2rem;
        font-family: $font4;
        font-size: 1.6rem;
    }

    & img {
        width: 2.2rem;
        z-index: 1;
        position: absolute;
        top: .8rem;
        right: 1.2rem;
    }
}
</style>