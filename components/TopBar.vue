<template>
  <div class="topbar">
      <div class="topbar__container">
       <div class="alerts" :class="{show: active, hide: !active}">       
            <div class="alerts__container">
                <a :href="`${getMessage.ref}`" target="_blank">
                <div class="alerts__container--button" :style="{background: getBackground}">
                    <div class="alerts__type">
                        New {{getMessage.type}} Alert :&nbsp;&nbsp;
                    </div>
                    <div class="alerts__mssg">
                         <i>{{getMessage.mssg}}</i>
                    </div>
                </div>
                    </a>
            </div>
       </div>
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
                    console.log('huh')
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
    padding: 1rem 0;

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
        

        &--button {
            padding: 1rem 2rem;
            background: $shop;
            color: white;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border: 2px solid white;
            border-radius: 2rem;
            transition: all .4s;

            &:hover {
                color: $liteGrey;
            }
        }

    }

    &__type {
        font-family: $font2;
    }

    &__mssg {
        font-family: $font4;
        text-transform: none;
    }
}

.topbar {
    width: 100%;
    padding: 3px 0;
    font-family: $font1;
}

.topbar::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #6b9f8b;
}

</style>