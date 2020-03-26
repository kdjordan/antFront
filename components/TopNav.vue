<template>
  <div class="topnav">  
      <div class="topnav__container">
        <div class="topnav__left">
                <NuxtLink to="/"><img src="~/assets/svg/alt-logo-red3.svg" class="left" alt="iowa antique network logo"></NuxtLink>
        </div>
        
        <nav class="topnav__right">
            <ul>
                <li>
                    <a href="#">find dealers</a>
                </li>
                <li>
                    <a href="#">upcoming events</a>
                </li>
                <li>
                    <NuxtLink to="/daily-news">daily news</NuxtLink>
                </li>
                <li>
                    <a href="#">vendors needed</a>
                </li>
                <li>
                    <NuxtLink to="/advertise">advertise</NuxtLink>
                </li>
                <li>
                    <a href="#" @click.prevent="doModal">contact</a>
                </li>
                <li>
                    <a href="#">login</a>
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
    box-shadow: 0 2px 8px -4px rgba(0,0,0,.75);
    padding: 1rem;

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
                // flex: 1 1 15%;
                transition: all .4s ease;

                // & img {
                //     margin-bottom: 2rem;
                //     max-height: 5rem;
                // }
            }

            & a {
                color: black;
                font-size: 1.5rem;
                text-align: center;
            }

            & li:hover {
                transform: translateY(-1rem);
            }

        }
   }
}

</style>