<template>
  <div class="footer">
      <div class="footer__container">
          <div class="col">
              <h4 class="col__title">BECOME A DEALER</h4>
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
          </div>
          <div class="col">
              <h4 class="col__title">ROAD TRIP INFO</h4>
          </div>
          <div class="col">
              <h4 class="col__title">NETWORK SITES</h4>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

h4 {
    font-weight: bold;
}
.footer {
    width: 80%;
    margin: 4rem auto;
    font-size: 1.4rem;
    

    &__container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1 1 20%;
        flex-wrap: wrap;
    }

    &__links {
        margin: 1rem 0;
        font-weight: bold;
    }

    &__link {
        margin: 1rem 0;
        

        & a {
            color: black;
        }
    }
}
</style>