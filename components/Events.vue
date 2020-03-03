<template>
<div>
    <div class="events">
        <div class="events__container">
            <div class="events__list">
                <div class="events__list--top">
                    <img src="~assets/svg/bullhorn.svg" alt="">
                    <h2>Upcoming Events</h2>
                </div>
                <div class="events__list--bottom">
                    <List :events="getEvents" />
                </div>
            </div>
            <div class="events__sponsers">
                <Sponsers :sponsers="getSponsers" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import List from '@/components/sub/EventsList'
import Sponsers from '@/components/sub/Sponsers'

import { mapGetters } from 'vuex'

export default {
    components: {
        List,
        Sponsers
    },
    computed: {
        ...mapGetters({
            getEvents: 'events/getEvents',
            getSponsers: 'sponsers/getSponsers'
        })
    },
    data() {
        return {
            
        }
    }

}
</script>

<style lang="scss">

.events {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 12px dotted #a6d0bc;
    margin-top: 2rem;
    border-bottom: 12px dotted #a6d0bc;
    
    &__container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        max-width: 120rem;
        width: 100%;
    }

    &__list {

        &--top {
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: $font3;
            color: $color2;
            font-size: 3rem;
            margin: 3rem 0;
            flex: 3 1 75%;

            & img {
                width: 10%;
                margin-right: 3rem;
            }
        }

        &--bottom {
            flex: 1 1 25%;
        }
    }
    
}

</style>