<template>
  <div class="topnav">
      <div class="topnav__top">
        <div class="topnav__top--images">
          <img src="~/assets/images/logo.png" alt="iowa antique network logo">
          <img src="~/assets/images/this-is-iowa.jpg" alt="iowa antique network logo">
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
    background-image: url('~assets/images/top-bg.jpg');
    background-position: center;
    background-size: cover;

    &__top {
        padding: 2rem;

        &--images {
            display: flex;
            justify-content: space-around;
            align-content: center;
            flex: 1 1 40%;
        //   & > * {
        //       width: 30%;
        //   }
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