<template>
  <div class="topnav">  
      <div class="topnav__container">
        <div class="topnav__left">
                <img src="~/assets/images/logo-solo.png" class="left" alt="iowa antique network logo">
        </div>
        
        <nav class="topnav__right">
            <ul>
                <!-- <li>
                    <img src="~assets/svg/home.svg" alt=""><a href="#">home</a>
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
                <li>
                    <img src="~assets/svg/contact.svg" alt=""><a href="#">contact</a>
                </li>
                <li>
                    <img src="~assets/svg/lock.svg" alt=""><a href="#">login</a>
                </li>
            </ul>
        </nav>
    </div>

      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.topnav {
    border-bottom: 12px dotted #a6d0bc;
    

    &__container {
        display: flex;
        align-items: center;
        margin: 0 auto;
        max-width: 120rem;
        width: 100%;
   }

   &__left {
       flex: 1 1 30%;

       & img {
           width: 90%;
           max-width: 35rem;
           padding-left: 4rem;
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