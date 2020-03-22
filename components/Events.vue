<template>
<div>
    <div class="events">

        <div class="events-container">

            <div class="events-container__top">
                <img src="~assets/svg/bullhorn-red.svg" alt="">
                <h2>Upcoming Events</h2>
            </div>
            <div class="button events-btn gold" @click.stop="doModal">
                add my event
            </div>
        
            <div class="events-container__bottom">

                <div class="events-container__bottom--left">
                    <h3>Events Calendar</h3>
                    <div class="events-container__bottom--calendar">
                        <List :events="getPagedEvents[getCalPage]" :class="{hide: calActive}"/>  
                    </div>

                    <div class="events__indicators">
                        <img src="~assets/svg/minus.svg" alt=""  :class="{disabled: getCalPageLeftDisabled}" @click="pageLeft('cal')">
                        <div class="events__indicators--block-container">
                            <div v-for="(num, index) in getPagedEvents.slice(0, getPagedEvents.length)" 
                                :key="index" 
                                class="events__indicators--block"  
                                :class="{indicator: getCalPage == `${index}`}">
                            </div>
                    
                        </div>
                        <img src="~assets/svg/plus.svg" alt="" :class="{disabled: getCalPageRightDisabled}" @click="pageRight('cal')">
                    </div>

                </div>

                <div class="events-container__bottom--right">
                    <h3>Featured Events</h3>
                    <div class="events-container__bottom--right__container">
                        <a :href="`${getFeaturedEvent.featuredLink}`" target="_blank">
                            <transition name="fade" mode="out-in">
                                <img :src="`${getFeaturedEvent.featuredImgUrl}`" 
                                alt="" class="events-container__bottom--right-img" 
                                :key="`${getEventPage}`">
                            </transition>
                        </a>
                    </div>
                    <div class="events__indicators">
                        <img src="~assets/svg/minus.svg" alt=""  :class="{disabled: getEventPageLeftDisabled}" @click="pageLeft('event')">
                        <div class="events__indicators--block-container">
                            <div v-for="(num, index) in getFeaturedEvents.slice(0, getFeaturedEvents.length)" 
                                :key="index" 
                                class="events__indicators--block"  
                                :class="{indicator: getEventPage == `${index}`}">
                            </div>

                        </div>
                        <img src="~assets/svg/plus.svg" alt="" :class="{disabled: getEventPageRightDisabled}" @click="pageRight('event')">
                    </div>
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
            getEventPageLeftDisabled: 'events/getEventPageLeftDisabled',
            getEventPageRightDisabled: 'events/getEventPageRightDisabled',
            getFeaturedEvents: 'events/getFeaturedEvents',              
            getFeaturedEvent: 'events/getFeaturedEvent',        
            getEventPage: 'events/getEventPage'        
        })
    },
    methods: {
        pageRight(type) {
            if(!(this.getCalPageRightDisabled) && type == 'cal') {
                this.calActive = true
                setTimeout(() => {
                    this.$store.commit('events/pageRight', type) 
                    this.calActive = false
                }, 500)
            }   else if (!(this.getEventPageRightDisabled) && type == 'event'){
                    this.$store.commit('events/pageRight', type) 
                    this.$store.commit('timers/stopEventsCycle')
            }
        },
        pageLeft(type) {
            if(!(this.getCalPageLeftDisabled) && type == 'cal') {
                this.calActive = true
                setTimeout(() => {
                    this.$store.commit('events/pageLeft', type) 
                    this.calActive = false
                }, 500)
            } else if (!(this.getEventPageLeftDisabled) && type == 'event') {
                this.$store.commit('events/pageLeft', type)             
                this.$store.commit('timers/stopEventsCycle')             
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

h3 {
    font-size: 3rem;
    font-family: $font4;
    margin-bottom: 2rem;
    color: $color1;
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
    border-top: 12px dotted #a6d0bc;
    margin-top: 2rem;
    border-bottom: 12px dotted #a6d0bc;
    
    &-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        max-width: 120rem;
        width: 100%;
        padding-bottom: 4rem;

            &__top {
                margin-top: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: $font3;
                color: $color1;
                font-size: 3rem;
                
                & img {
                    width: 10%;
                    margin-right: 3rem;
                }
            }

            &__bottom {
                display: flex;
                justify-content: space-around;
                align-items: top;
                width: 100%;
                margin-top: 3rem;

                &--left {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                &--calendar {
                    height: 33rem;
                    margin-bottom: 1rem;
                }

                &--right {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    &__container {
                        width: 50rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                    }

                    &-img {
                        height: 30rem;
                        margin-bottom: 1rem;
                    }
                }

            }
    }

    &__indicators {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

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