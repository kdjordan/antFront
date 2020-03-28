<template>
<div>
    <div class="events">

        <div class="events-container">
            <div class="events-container__top">
                <h3>Upcoming Events</h3>
                <div class="underline"></div>
                <div class="button button--primary" @click.stop="doModal">add my event</div>
            </div>

            <div class="events-container__bottom">
            <div class="events-container__bottom--instruct">
              <span>"click" on an event for details : "scroll" for more events</span> 
            </div>
                <div class="events-container__bottom--calendar">
                    <List :events="getEvents" :class="{hide: calActive}"/>  
                </div>
            </div>
        </div>     
    </div>
    <EventsCarousel />
</div>
</template>

<script>
import List from '@/components/sub/EventsList'
import EventsCarousel from '@/components/sub/EventsCarousel'


import { mapGetters } from 'vuex'

export default {
    transition: 'fade',
    components: {
        List,
        EventsCarousel
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
    padding-top: 3rem;
    margin-bottom: 2rem;
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
    padding-bottom: 6rem;
    
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

            &--instruct {
                font-weight: bold;
                text-transform: uppercase;
                color: $color1;
                padding-bottom: .5rem;
                text-align: center;
                width: 80%;
                margin: 0 auto;

                & span {
                    border-left: 4px solid $color1;
                    border-right: 4px solid $color1;
                    border-radius: 1rem;
                    padding: 0 1rem;
                }
            }

            &--calendar {
                height: 40rem;
                width: 80%;
                margin: 0 auto;
                overflow: auto;
                border-radius: .5rem;
                border: .5rem solid $color2
            }
        }
    }
}
</style>