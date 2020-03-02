<template>
  <div class="topbar">
      <div class="topbar__container">
       <div class="alerts" :class="{show: active, hide: !active}">       
            <span class="alerts__type large" :class="{orange: getMssg.type == 'shop'}">New {{getMssg.type}}</span>
            <span class="alerts__mssg">{{getMssg.mssg}}</span>
            <!-- <span class="alerts__details">
                <a :href="`${getMssg.ref}`" _target="blank">DETAILS</a>
                </span> -->
       </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            active: true,
            alerts: [
                {
                    id: 1,
                    type: 'shop',
                    ref: 'https://google.com',
                    mssg: "Jerry'\s Collectables"
        
                },
                {
                    id: 2,
                    type: 'event',
                    ref: 'https://google.com',
                    mssg: "Caroline'\s Antique Show"
                }
            ]
        }
    },
    computed: {
        getMssg() {
            return this.alerts[this.index]
        }
    },
    methods: {
        cycleAlerts() {
            setInterval(() => {
                this.active = !this.active;
                setTimeout(() => {
                    if(this.index == this.alerts.length-1) {
                        this.index = 0;
                    } else {
                        this.index++;
                    }
                this.active = !this.active;
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

.orange {
    background: $colorOrange !important;
}

.show {
    opacity: 1;
    transition: all .4s;
}

.hide {
    opacity: 0;
    transition: all .4s;
}

.alerts {
    color: white;
    text-align: center;
    padding: 1rem 0;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &__details {
        border: 2px solid $color1;
        padding: .2rem .5rem;
        border-radius: .3rem;
        font-size: 1rem;
        transition: all .4s;

        & a {
            color: $color1;
        }

        &:hover, &:hover a{
            background: transparent;
            color: white;
        }

    }

    &__mssg {
        margin-right: 1rem;
    }

    &__type {
        text-transform: uppercase;
        background: $color1;
        color: white;
        padding: .2rem .5rem;
        border-radius: .3rem;
        margin: 0 .5rem;
        font-size: 1.2rem;
        transition: all .4s;

         & a {
            color: white;
        }

        &:hover, &:hover a{
            background: transparent;
            color: $color1;
        }

    }

}

.large {
    font-size: 2rem;
    margin-right: 2rem;
    padding: .5rem 1rem;
}

.topbar {
    width: 100%;
    padding: 3px 0;
    background: $color2;
    border-bottom: 4px solid #b2cfc4;
    font-family: $font1;

    // &__container {
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    // }

}

.topbar::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #6b9f8b;
}

</style>