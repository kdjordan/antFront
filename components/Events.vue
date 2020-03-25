<template>
<div>
    <div class="events">

        <div class="events-container">
            <div class="events-container__top">
                <img src="~assets/svg/bullhorn-red.svg" alt="">
                <h3>Upcoming Events</h3>
                <img src="~assets/svg/bullhorn-red.svg" class="flip" alt="">
            </div>

            <div class="events-container__bottom">
                <!-- <h3>Events Calendar</h3> -->
            <!-- <div class="button button--primary adjust" @click.stop="doModal">Add my event</div> -->
                <div class="events-container__bottom--calendar">
                    <List :events="getPagedEvents[getCalPage]" :class="{hide: calActive}"/>  
                </div>
        
                <div class="events__indicators">
                    <img src="~assets/svg/minus.svg" alt=""  :class="{disabled: getCalPageLeftDisabled}" @click="pageLeft">
                    <div class="events__indicators--block-container">
                        <div v-for="(num, index) in getPagedEvents.slice(0, getPagedEvents.length)" 
                            :key="index" 
                            class="events__indicators--block"  
                            :class="{indicator: getCalPage == `${index}`}">
                        </div>
                
                    </div>
                    <img src="~assets/svg/plus.svg" alt="" :class="{disabled: getCalPageRightDisabled}" @click="pageRight">
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
            getPagedEvents: 'events/getPagedEvents'    
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

.adjust {
    font-family: $font2;
}

h3 {
    font-size: 7rem;
    font-family: $font3;
    color: $color1;
    text-align: center;
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
    
    &-container {
    //    width: 100%;

            &__top {
                // background: $color1;
                padding: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: $font2;
                color: white;
                font-size: 3rem;
        
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
                width: 80%;
                margin-top: 3rem;

                &--calendar {
                    height: 33rem;
                    margin-bottom: 1rem;
                }
            }
    }

    &__indicators {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        margin: 0 auto;

        & img {
            height: 3rem;
            cursor: pointer;
            transition: all .4s;

            &:hover {
                filter: opacity(50%);
            }
        }

        &--block-container {
            display: flex;
            margin-bottom: 2rem;
        }
        
        &--block {
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 2rem;
            background: $color2;
            margin: 0rem .5rem;
            margin-top: 2rem;
        }
    }


}

    


</style>