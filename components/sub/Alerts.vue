<template>
  <div class="alerts">
    <div class="alerts" :class="{show: active, hide: !active}">       
        <a :href="`${getMessage.ref}`" target="_blank">
            <div class="alerts__button" :style="{background: getBackground}">
                <div class="alerts__type">
                    New {{getMessage.type}} Alert : &nbsp;
                </div>
                <div class="alerts__mssg">
                    <i>{{getMessage.mssg}}</i>
                </div>
            </div>
        </a> 
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            active: true
        }
    },
    computed: {
        ...mapGetters({ 
            getNews: 'news/getNews',
            getMessage: 'news/getMessage'
        }),
        getBackground() {
            switch (this.getMessage.type) {
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
    methods: {
        cycleAlerts() {
            setInterval(() => {
                this.active = !this.active;
                setTimeout(() => {
                    this.$store.commit('news/getNextMessage')
                    this.active = !this.active
                }, 500)
            }, 5000)
        }
    },
    mounted() {
        this.cycleAlerts();
    }

}
</script>

<style lang="scss" scoped>

.show {
    opacity: 1;
    transition: all .4s;
}

.hide {
    opacity: 0;
    transition: all .4s;
}

.alerts {
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