<template>
<div>
    <div class="nav">  
        <div class="nav__top">
            <NuxtLink to="/"><img src="~/assets/svg/logo.svg" class="logo" alt="iowa antique network logo"></NuxtLink>
            <BannerAds />    
           </div>
    </div>
    <div class="nav__bottom">
        <nav>
            <NuxtLink to="#" class="link">Find Dealers</NuxtLink>
            <NuxtLink to="#" class="link">Upcoming Events</NuxtLink>
            <NuxtLink to="/daily-news" class="link">Daily News</NuxtLink>
            <NuxtLink to="#" class="link">Vendors Needed</NuxtLink>
            <NuxtLink to="/advertise" class="link">Advertise</NuxtLink>
            <NuxtLink @click.native="doModal" to="#" class="link" >Contact</NuxtLink>
            <NuxtLink to="#" class="link" @click.prevent="doModal">Login</NuxtLink>
        </nav>

    </div>

</div>
</template>

<script>
import BannerAds from '@/components/BannerAds'
export default {
    components: {
        BannerAds
    },
    methods: {
        doModal() {
             this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'contact')
        }
    }

}
</script>
<style lang="scss">

.nav {
    width: 100%;

    &__top {
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 120rem;
        margin: 0 auto;
    }

    &__top .logo{
        width: 80%;
        transition: all .4s ease;

        &:hover {
           transform: translateY(-.3rem);
       }
    }

    &__bottom {
        width: 100%;
        background: $color1;
        border-bottom: 2px solid white;


        & nav {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 110rem;
            margin: 0 auto;
            

            & .link {
                font-family: $font4;
                color: white;
                cursor: pointer;
                padding: 1.2rem 2rem;
                align-self: stretch;
                background: $color1;
                transition: all .4s ease;
            }
            & .link:hover {
                background: $color2;
            } 
            
            & .link:hover {
                color: black;
            }
        }
    }

}

// .topnav {

//     &__top{

//         &--container {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             margin: 0 auto;
            
//             border-bottom: 2px solid $color1;
//         }
//    }

//    &__bottom nav {
//        width: 100%;
//        display: flex;
//    }

//    &__left {
//     //    width: 100%;
//        padding: 0 1rem;
//        transition: all .4s;

//        & img {
//            width: 60%;
//            min-width: 10rem;
//            padding: .5rem 0;
           
//        }

//        &:hover {
//            transform: translateY(-.3rem);
//        }
//    }

//    &__right {
//        flex-basis: 100%;
//     //    margin-left: 10%;
//         & ul {
//             display: flex;
//             justify-content: space-evenly;
//             align-items: baseline;
//             font-family: $font4;

//             & .link {
//                 cursor: pointer;
//                 display: flex;
//                 flex-direction: column;
//                 justify-content: center;
//                 align-items: space-around;
//                 padding: 2.9rem 0rem;
//                 width: 100%;
//                 align-self: stretch;
//                 transition: all .4s ease;
//             }

//             & a {
//                 color: black;
//                 line-height: 2rem;
//                 font-size: 1.5rem;
//                 text-align: center;
//                 transition: all .4s ease;
//             }

            
//             & .link:hover {
//                 background: $color2;
//             } 
            
//             & .link:hover {
//                 color: white;
//             }

//         }
//    }
// }

</style>