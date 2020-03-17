<template>
  <div class="banner">
    <h2 class="banner__title">Our Premium Advertising Space !</h2>
    <div class="banner__desc"><p>Our banner ads are a great way to get maximum visibility for your brand or business. The placement of these ads provide a perfect opporotunity for you to engage with our visitors and put your best image forward.
    Your image banner links to a websiste of your choice ! A limited number of these sapces are available per month which gives you maximum visibility.</p>  </div>
      <div class="banner__get-email">
          <!-- <input type="text" v-model="email" placeholder="Email address here..."> -->
          <div class="button events-btn wide">SIGN ME UP</div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/buttons.scss';

.banner {
    width: 100%;

    &__title {
        background: $color1;
        text-align: center;
        color:white;
        padding: 2rem 0;
        font-family: $font4;
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
    }

    &__desc {
        padding: 2rem;
    }

    &__get-email {
        font-size: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;

        & input {
            margin-right: 1rem;
            border-radius: 2rem;
            outline: none;
            border: 1px solid $liteGrey;
            padding: .5rem 3rem;
            
        }
    }

    .wide {
        width: 13rem;
    }
}

</style>