<template>
<div>
    <div class="events">
        <div class="events__container">
            <div class="events__container--top">
                <img src="~assets/svg/bullhorn-grn.svg" alt="">
                <h2>Upcoming Events</h2>
            </div>
            <div class="events__container--bottom">
                <img src="~assets/images/left.svg" alt="">
                <div class="events__container--bottom-container">
                    <List :events="getEvents" />
                </div>
                <div class="events__container--bottom-container">
                    <List :events="getEvents" />
                </div>
                <img src="~assets/images/right.svg" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import List from '@/components/sub/EventsList'

import { mapGetters } from 'vuex'

export default {
    components: {
        List
    },
    computed: {
        ...mapGetters({
            getEvents: 'events/getEvents',
            
        })
    },
    data() {
        return {
            
        }
    }

}
</script>

<style lang="scss" scoped>

img {
    max-height: 12rem;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        filter: opacity(50%);
    }
}

.events {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 12px dotted #a6d0bc;
    margin-top: 2rem;
    border-bottom: 12px dotted #a6d0bc;
    
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        max-width: 120rem;
        width: 100%;
        // border: 1px solid red;
        padding-bottom: 4rem;

            &--top {
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: $font3;
                color: $color2;
                font-size: 3rem;
                margin: 3rem 0;
                

                & img {
                    width: 10%;
                    margin-right: 3rem;
                }
            }

            &--bottom {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;

                &-container {
                    margin: 0 1.5rem;
                }
            }

        }
    }

    


</style>