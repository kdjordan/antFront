<template>
<div class="events-container">
  <h3>Featured Events</h3>
  <div class="button button--primary w-50 m__b--2 m__t--2" @click.stop="doModal()">Add My Event</div>
    <div class="events-container__bottom--right__container  m__t--3">
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
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
    ...mapGetters({
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
        width: 60%;

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