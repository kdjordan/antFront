<template>
  <div class="topnav">
      <div class="topnav__top">
        <div class="topnav__top--images">
            
              <img src="~/assets/images/logo.png" class="left" alt="iowa antique network logo">
            
            
              <img src="~/assets/images/this-is-iowa.jpg" class="right" alt="iowa antique network logo">
            
        </div>
      </div>
      <nav>
          <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">find dealers</a></li>
              <li><a href="#">upcoming events</a></li>
              <li><a href="#">daily news</a></li>
              <li><a href="#">vendors needed</a></li>
              <li><a href="#">advertise</a></li>
              <li><a href="#">contact</a></li>
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
    &__top {
        padding: 3rem;

        &--images {
            display: flex;
            justify-content: space-around;
            align-items: center;

            & .left {
                max-width: 25%;
            }

            & .right {
                width: 30%;
                max-width: 50rem;
            }
        }
    }

    & nav {
        width: 100%;
        background: $color1;

        & ul {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            padding: 1.9rem 0;
            font-family: $font4;

            & li {
                margin: 0 2rem;;
            }
            & a {
                color: white;
            }

            & a::after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                background: white;
                transition: width .3s;
            }
            & a:hover::after {
                width: 100%;
            }
        }
    }
   

}

</style>