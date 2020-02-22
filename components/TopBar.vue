<template>
  <div class="topbar">
      <div class="topbar__container">
        <ul>
            <li><a href="#">contact</a></li>
            <li><a href="#">admin login</a></li>
        </ul>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.topbar {
    width: 100%;
    padding: 3px 0;
    background: $color2;
    border-bottom: 4px solid #b2cfc4;
    font-family: $font1;

    &__container ul{
        display: flex;
        justify-content: flex-end;
        margin-right: 5rem;

        & li {
            margin: 1rem;

            & a {
                color: white;
            }
        }
        
    }

}

.topbar::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #6b9f8b;
}
</style>