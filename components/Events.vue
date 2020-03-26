<template>
<div>
    <div class="events">

        <div class="events-container">
            <div class="events-container__top">
                <!-- <img src="~assets/svg/bullhorn-red.svg" alt=""> -->
                <h3>Upcoming Events</h3>
                <div class="button button--primary" @click.stop="doModal">add my event</div>
            </div>

            <div class="events-container__bottom">
                <!-- <h3>Events Calendar</h3> -->
            <!-- <div class="button button--primary adjust" @click.stop="doModal">Add my event</div> -->
                <div class="events-container__bottom--calendar">
                    <List :events="getEvents" :class="{hide: calActive}"/>  
                </div>
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
    data() {
        return {
            calActive: false,
        }
    },
    computed: {
        ...mapGetters({
            getCalPage: 'events/getCalPage',
            getCalPageRightDisabled: 'events/getCalPageRightDisabled',
            getCalPageLeftDisabled: 'events/getCalPageLeftDisabled',        
            getPagedEvents: 'events/getPagedEvents',
            getEvents: 'events/getEvents'    
        })
    },
    methods: {
        pageRight(type) {
            if(!(this.getCalPageRightDisabled)) {
                this.calActive = true
                setTimeout(() => {
                    this.$store.commit('events/pageRight', type) 
                    this.calActive = false
                }, 500)
            }
        },
        pageLeft(type) {
            if(!(this.getCalPageLeftDisabled)) {
                this.calActive = true
                setTimeout(() => {
                    this.$store.commit('events/pageLeft', type) 
                    this.calActive = false
                }, 500)
            } 
        },
        doModal() {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'event')
        }
    },
    mounted() {
        if(!(this.$store.state.timers.events.running)) {
            this.$store.dispatch('timers/startCycleEvents')
        }
    }

}
</script>

<style lang="scss" scoped>

.flip {
    transform: scaleX(-1);
}

h3 {
    font-size: 6rem;
    font-family: $font4;
    color: $color1;
    text-align: center;
    border-top: 4px solid $color1;
    border-bottom: 4px solid $color1;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    border-radius: 1rem;
}

.indicator {
    background: $color1 !important;
}

.hide {
    opacity: 0;
    transition: all .4s ease;
}


.disabled {
    filter: opacity(50%);
}

.events {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 6rem;
    box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.75);
    
    &-container {

            &__top {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 3rem 0 3rem 0;
                font-family: $font2;
                
                & img {
                    width: 6%;
                    margin: 0 5rem;
                }
            }

            &__bottom {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: top;

                &--calendar {
                    padding: 1rem 0;
                    height: 40rem;
                    width: 80%;
                    margin: 0 auto;
                    overflow: auto;
                    border-radius: .5rem;
                    border: .5rem solid $liteGrey;
                }
            }
    }
}

    


</style>