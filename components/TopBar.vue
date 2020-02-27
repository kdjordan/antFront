<template>
  <div class="topbar">
      <div class="topbar__container">
       <div class="alerts">
            <span class="alerts__type">New {{getMssg.type}}</span>
            {{getMssg.mssg}}
            <span class="alerts__type">
                <a :href="`${getMssg.ref}`" _target="blank">MORE INFO</a>
                </span>
       </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            active: '',
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
                if(this.index == this.alerts.length-1) {
                    this.index = 0;
                } else {
                    this.index++;
                }
            }, 5000)
        }
    },
    mounted() {
        this.cycleAlerts();
    }

}
</script>

<style lang="scss" scoped>

.alerts {
    color: white;
    text-align: center;
    padding: 1rem 0;
    font-size: 2rem;

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

.topbar {
    width: 100%;
    padding: 3px 0;
    background: $color2;
    border-bottom: 4px solid #b2cfc4;
    font-family: $font1;

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

}

.topbar::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #6b9f8b;
}

</style>