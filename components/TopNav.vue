<template>
  <div class="topnav">  
      <div class="topnav__container">
        <div class="topnav__left">
                <NuxtLink to="/"><img src="~/assets/images/logo-solo.png" class="left" alt="iowa antique network logo"></NuxtLink>
        </div>
        
        <nav class="topnav__right">
            <ul>
                <!-- <li>
                    <img src="~assets/svg/home.svg" alt=""><a href="#">home</a>
                </li> -->
                <li>
                    <a href="#"><img src="~assets/svg/satellite.svg" alt="">find dealers</a>
                </li>
                <li>
                    <a href="#"><img src="~assets/svg/radio.svg" alt="">upcoming events</a>
                </li>
                <li>
                    <NuxtLink to="/daily-news"><img src="~assets/svg/newstv.svg" alt="">daily news</NuxtLink>
                </li>
                <li>
                    <a href="#"><img src="~assets/svg/bullhorn.svg" alt="">vendors needed</a>
                </li>
                <li>
                    <NuxtLink to="/advertise"><img src="~assets/svg/tower.svg" alt="">advertise</NuxtLink>
                </li>
                <li>
                    <a href="#" @click.prevent="doModal"><img src="~assets/svg/contact.svg" alt="">contact</a>
                </li>
                <li>
                    <a href="#"><img src="~assets/svg/lock.svg" alt="">login</a>
                </li>
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
    // border-bottom: 12px dotted #a6d0bc;
    border-bottom: 1px solid $colorGrey;

    &__container {
        display: flex;
        align-items: center;
        margin: 0 auto;
        max-width: 120rem;
        width: 100%;
   }

   &__left {
       flex: 1 1 30%;
       transition: all .4s;

       & img {
           width: 90%;
           max-width: 35rem;
           padding-left: 4rem;
       }

       &:hover {
           transform: translateY(-.3rem);
       }
   }

   &__right {
        flex: 1 1 90%;
        padding: 0 2rem;

            & ul {
                display: flex;
                justify-content: space-evenly;
                align-items: baseline;
                font-family: $font4;

                & li {
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 20rem;
                    flex: 1 1 10%;
                    transition: all .4s ease;

                    & img {
                        margin-bottom: 2rem;
                        max-height: 6rem;
                    }
                }

                & a {
                    color: black;
                    font-size: 1.3rem;
                    text-align: center;
                }

                & li:hover {
                    transform: translateY(-1rem);
                }
    
            }
   }
    
        
    
   

}

</style>