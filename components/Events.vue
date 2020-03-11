<template>
<div>
    <div class="events">
        <div class="events__container">
            <div class="events__container--top">
                <img src="~assets/svg/bullhorn-grn.svg" alt="">
                <h2>Upcoming Events</h2>
            </div>
            <div class="button events-button">
                add my event
            </div>
            <div class="events__container--bottom">
                <img src="~assets/images/left.svg" alt=""  :class="{disabled: getPageLeftDisabled}" @click="pageLeft">
                <div class="inner-container">
                    <div class="events__container--bottom-container">
                        
                        <List :events="getPagedEvents[getFirstPage]" :class="{hide: active}"/>
                        
                    </div>
                    <div v-if="getNumPages > 1" class="events__container--bottom-container">
                        
                        <List :events="getPagedEvents[getSecondPage]" :class="{hide: active}"/>
                        
                    </div>
                </div>
                <img src="~assets/images/right.svg" alt="" :class="{disabled: getPageRightDisabled}" @click="pageRight">
            </div>
            <div class="events__indicators">
                <div v-for="(num, index) in getPagedEvents.slice(0, getPagedEvents.length - 1)" 
                    :key="index" 
                    class="events__indicators--block"  
                    :class="{indicator: getFirstPage == `${index}`}"
                >
                </div>
            </div>
        </div>
    </div>
   <div>
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
            active: false
        }
    },
    computed: {
        ...mapGetters({
            getNumPages: 'events/getNumPages',
            getFirstPage: 'events/getFirstPage',
            getSecondPage: 'events/getSecondPage',
            getPageRightDisabled: 'events/getPageRightDisabled',
            getPageLeftDisabled: 'events/getPageLeftDisabled',        
            getPagedEvents: 'events/getPagedEvents',        
        }),
        getOffsetNumPages() {
            return this.indicators = this.getNumPages - 1
        }
    },
    methods: {
        pageRight() {
            if(!(this.getPageRightDisabled)) {
                this.active = true
                setTimeout(() => {
                    this.$store.commit('events/pageRight') 
                    this.active = false
                }, 500)
            }   
        },
        pageLeft() {
            if(!(this.getPageLeftDisabled)) {
                this.active = true
                setTimeout(() => {
                    this.$store.commit('events/pageLeft') 
                    this.active = false
                }, 500)
            }   
        }
    },
    mounted() {
        this.$store.dispatch('events/loadData')
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/buttons.scss';

.indicator {
    background: $color1 !important;
}

.hide {
    opacity: 0;
    transition: all .4s ease;
}


img {
    max-height: 12rem;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        filter: opacity(50%);
    }
}

.disabled {
    filter: opacity(50%);
}

.inner-container {
    display: flex;
    justify-content: space-between;
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
        padding-bottom: 4rem;

            &--top {
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: $font3;
                color: $color2;
                font-size: 3rem;
                margin: 3rem 0 1rem 0;
                
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
                margin-top: 3rem;

                &-container {
                    margin: 0 1.5rem;
                    align-items: top;
                }
            }

    }

    &__indicators {
        display: flex;
        
        &--block {
            display: block;
            width: 5rem;
            height: 1rem;
            border-radius: 5px;
            background: $color2;
            margin: 0rem .5rem;
            margin-top: 2rem;
        }
        // &:last-child {
        //     display: none;
        // }
    }


}

    


</style>