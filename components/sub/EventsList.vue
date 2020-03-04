<template>
  <div class="list">
      <!-- <img src="~assets/images/left.svg" class="controls" alt=""> -->
      
        <div v-for="(event, index) in events" :key="index" class="listings">
            <!-- {{event}} -->
            <div class="card">
                <div class="card__date">
                    <div class="card__date--month">
                        {{event.month}}
                    </div>
                    <div class="card__date--day">
                        {{event.day}}
                    </div>
                </div>
                <div class="card__details">
                    <div class="card__details--title">
                        {{event.title}}
                    </div>
                    <div class="card__details--desc">
                        {{event.desc}}
                    </div>
                    <div class="card__details--time">
                        START: {{event.timeStart}} pm ::
                        END: {{event.timeEnd}} pm
                    </div>
                </div>
                <div class="card__more">
                    MORE
                </div>
            </div>
         </div>
        <!-- <img src="~assets/images/right.svg" class="controls" alt=""> -->
    </div>
</template>

<script>
export default {
    props: ['events']
}
</script>

<style lang="scss">

.list {
    display: flex;
    flex-direction: column;
}


.listings {
    // width: 80%;
    margin: 0 auto;
}

.card {
    font-family: $font2;
    display: flex;
    color: $color2;
    margin: .2rem 0;

    &__date {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid $color2;
        // height: 50%;
        
        margin-right: 1rem;

        &--month {
            color: white;
            background: $color2;
            padding: .2rem .4rem;
        }

        &--day {
            color: $color2;
        }
    }

    &__details {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        

        &--title {
            color: $color1;
            align-items: flex-start;
        }
    }

    &__more {
        font-size: 1rem;
        border: 2px solid $color3;
        align-self: flex-start;
        padding: 0 .5rem;
    }
}

.controls {
    cursor: pointer;
    filter: opacity(80%);
    width: 8rem;
    transition: all .4s;

    &:hover,
    &:active {
        filter: opacity(40%);
    }
}
</style>