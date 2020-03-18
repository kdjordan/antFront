<template>
  <div class="footer">
      <div class="footer__container">
          <div class="col center">
              <h4 class="col__title">JOIN THE NETWORK</h4>   
                <ul class="footer__links">
                    <li class="footer__link"><a href="">Get A Banner Ad</a></li>
                    <li class="footer__link"><a href="">Get A Map Pin</a></li>
                    <li class="footer__link"><a href="">Add Your Event</a></li>
                    <li class="footer__link"><a href="">Become a Sponser</a></li>
                </ul>
              <div class="social-container">
                  
                <h4 class="col__title social">SOCIAL MEDIA</h4>
                <div class="social-container__items">
                    <a href="#"><font-awesome-icon :icon="['fab', 'facebook-square']" class="social-container__item" /></a>
                    <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" class="social-container__item" /></a>
                    <a href="#"><font-awesome-icon :icon="['fab', 'youtube']" class="social-container__item" /></a>
                    <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" class="social-container__item" /></a>
                    <a href="#"><font-awesome-icon :icon="['fab', 'pinterest']" class="social-container__item" /></a>
                </div>

                

              </div>
          </div>
          <div class="col">
              <h4 class="col__title">QUESTIONS ?</h4>
              <ul class="footer__links">
                  <li class="footer__link"><a href="#">Why Us ?</a></li>
                  <li class="footer__link"><a href="#">FAQ</a></li>
                  <li class="footer__link"><a href="#">How To Use</a></li>
                  <li class="footer__link"><a href="#">Ready to Advertise ?</a></li>
                  <li class="footer__link"><a href="#">Contact</a></li>
              </ul>
          </div>
          <div class="col">
              <h4 class="col__title">LINKS WE LIKE</h4>
              <ul class="footer__links">
                  <li class="footer__link"><a href="#">Collectors Journal</a></li>
                  <li class="footer__link"><a href="#">This is Iowa</a></li>
                  <li class="footer__link"><a href="#">Iowa Freedom Rocks</a></li>
                  <li class="footer__link"><a href="#">Travel Iowa</a></li>
                  <li class="footer__link"><a href="#">Iowa Adventurer</a></li>
                  <li class="footer__link"><a href="#">Iowa Road Trip</a></li>
              </ul>
          </div>
          <div class="col">
              <h4 class="col__title">ROAD TRIP INFO</h4>
              <ul class="footer__links">
                  <li class="footer__link"><a href="#">Iowa Gas Prices</a></li>
                  <li class="footer__link"><a href="#">Iowa Weather</a></li>
                  <li class="footer__link"><a href="#">Road Conditions</a></li>
                  <li class="footer__link"><a href="#">Lincoln Highway 30</a></li>
                  <li class="footer__link"><a href="#">Iowa Highway 6</a></li>
              </ul>
          </div>
          <div class="col">
              <h4 class="col__title">NETWORK SITES</h4>
              <ul class="footer__links">
                  <li class="footer__link"><a href="#">Wisconsin Antique Network</a></li>
                  <li class="footer__link"><a href="#">Minnesota Antique Network</a></li>
                  <li class="footer__link"><a href="#">Nebraska Antique Network</a></li>
                  <li class="footer__link"><a href="#">Missouri Antique Network</a></li>
                  <li class="footer__link"><a href="#">South Dakota Antique Network</a></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {

}
</script>

<style lang="scss" scoped>

.social {
    margin-bottom: 1rem;
}

h4 {
    font-weight: bold;
    margin-bottom: 1.6rem;
}

.col {
    min-height: 20rem;
}

.center {
    text-align: center;
}

.social-container__item {
    cursor: pointer;
    font-size: 3rem;
    color: $color2;
    transition: all .4s;

    &:hover {
        filter: opacity(50%);
    }
}

.dealer-button {
    border: 2px solid $color2;
    border-radius: 3rem;
    padding: 1.5rem 2rem;
    color: $color2;
    font-family: $font4;
    margin-bottom: 2rem;
}

.footer {
    font-size: 1.4rem;
    
    &__container {
        padding: 4rem 0;
        display: flex;
        justify-content: space-evenly;
        align-items: top;
        flex: 1 1 20%;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: 140rem;
    }

    &__links {
        margin: 1.1rem 0;
        
    }

    &__link {
        margin: 1.5rem 0;
        

        & a {
            color: black;
            transition: all .4s;
        }

         a:hover {
             color: $color2;
         }
    }
}
</style>