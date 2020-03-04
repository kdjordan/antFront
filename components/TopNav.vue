<template>
  <div class="topnav">  
    <div class="topnav__left">
            <img src="~/assets/images/logo.png" class="left" alt="iowa antique network logo">
    </div>
    
    <nav class="topnav__right">
        <ul>
            <!-- <li>
                <img src="~assets/svg/satellite.svg" alt=""><a href="#">home</a>
            </li> -->
            <li>
                <img src="~assets/svg/satellite.svg" alt=""><a href="#">find dealers</a>
            </li>
            <li>
                <img src="~assets/svg/radio.svg" alt=""><a href="#">upcoming events</a>
            </li>
            <li>
                <img src="~assets/svg/newstv.svg" alt=""><a href="#">daily news</a>
            </li>
            <li>
                <img src="~assets/svg/bullhorn.svg" alt=""><a href="#">vendors needed</a>
            </li>
            <li>
                <img src="~assets/svg/tower.svg" alt=""><a href="#">advertise</a>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.topnav {
    display: flex;
    align-items: center;
    border-bottom: 2px solid#cbcbcb;

   &__left {
       flex: 1 1 30%;
       height: 20rem;

       & img {
           width: 100%;
           max-width: 35rem;
           padding: 2rem;
       }
   }

   &__right {
        flex: 1 1 100%;
        height: 20rem;
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
                        max-height: 7rem;
                    }
                }

                & a {
                    color: #777777;
                    font-size: 1.5rem;
                }

                & li:hover {
                    transform: translateY(-1rem);
                }
    
            }
   }
    
        
    
   

}

</style>