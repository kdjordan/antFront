<template>
  <div class="topnav">  
      <div class="topnav__container">
        <div class="topnav__left">
                <NuxtLink to="/"><img src="~/assets/svg/alt-logo-red3.svg" class="left" alt="iowa antique network logo"></NuxtLink>
        </div>
        
        <nav class="topnav__right">
            <ul>
                <NuxtLink to="#" class="link">Find<br />Dealers</NuxtLink>
                <NuxtLink to="#" class="link">Upcoming<br />Events</NuxtLink>
                <NuxtLink to="/daily-news" class="link">Daily<br />News</NuxtLink>
                <NuxtLink to="#" class="link">Vendors Needed</NuxtLink>
                <NuxtLink to="#" class="link">Advertise</NuxtLink>
                <NuxtLink @click.native="doModal" to="#" class="link" >Contact</NuxtLink>
                <NuxtLink to="#" class="link" @click.prevent="doModal">Login</NuxtLink>
            </ul>
        </nav>
    </div>

      </div>
</template>

<script>
export default {
    methods: {
        doModal() {
             this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'contact')
        }
    }

}
</script>

<style lang="scss">

.topnav {
    box-shadow: 0 2px 8px -4px rgba(0,0,0,.75);
    // padding: 1rem;

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 120rem;
   }

   &__left {
       padding: 0 1rem;
       transition: all .4s;

       & img {
           width: 100%;
       }

       &:hover {
           transform: translateY(-.3rem);
       }
   }

   &__right {
       width: 80%;
       margin-left: 10%;
        & ul {
            display: flex;
            justify-content: space-evenly;
            align-items: baseline;
            font-family: $font4;

            & .link {
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: space-around;
                padding: 2.5rem 0rem;
                width: 100%;
                align-self: stretch;
                transition: all .4s ease;
            }

            & a {
                color: black;
                line-height: 2rem;
                font-size: 1.5rem;
                text-align: center;
                transition: all .4s ease;
            }

            & .link:hover {
                background: $color1;
            } 
            
            & .link:hover {
                color: white;
            }

        }
   }
}

</style>