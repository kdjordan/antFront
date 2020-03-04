<template>
  <div class="search">
      <input type="text" placeholder="Search for a shop or event...">
      <img src="~assets/svg/mag-glass.svg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

// ::placeholder {
//     padding-left: 2rem;
//     font-family: $font4;
//     font-size: 1.4rem;
// }



.search {

    & input {
        width: 80%;
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
        position: relative;
        top: .4rem;
        right: 4rem;
    }
}
</style>