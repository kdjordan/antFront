<template>
<div class="alerts">       
    <a :href="`${getAlerts.ref}`" target="_blank">
        <div class="alerts__button" :style="{background: getBackground}">
            <div class="alerts__type">
                New {{getAlerts.type}} Alert : &nbsp;
            </div>
            <div class="alerts__mssg">
                <i>{{getAlerts.mssg}}</i>
            </div>
        </div>
    </a> 
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({ 
            getAlerts: 'alerts/getAlerts'
        }),
        getBackground() {
            switch (this.getAlerts.type) {
                case 'shop':
                    return '#a53b2d'
                    break
                case 'event':
                    return '#5397C2'
                    break
                case 'winery':
                    return '#56b4a6'
                    break
                case 'brewery':
                    return '#f79f24'
                    break
                case 'lodging':
                    return '#6bb487'
                    break
                case 'other':
                    return '#2da56a'
                    break
                case 'food':
                    return '#d96536'
                    break
                default:
                    return 'transparent'
            }
        }
    },
    mounted() {
        if(!(this.$store.state.timers.events.running)) {
            this.$store.dispatch('timers/startCycleAlerts')
        }
    }

}
</script>

<style lang="scss" scoped>

.alerts {
    width: 80%;
    margin: 0 auto;
    &__button {
        padding: .7rem 2rem;
        background: $shop;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid white;
        border-radius: 2rem;
        transition: all .4s;

        &:hover {
            color: $liteGrey;
        }
    }

    &__type {
        text-transform: uppercase;
        font-family: $font2;
        font-size: 1.3rem;
        font-weight: bold;
    }

    &__mssg {
        font-family: $font4;
        text-transform: none;
    }
}
</style>