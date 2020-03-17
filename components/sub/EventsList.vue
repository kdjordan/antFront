<template>
  <div class="list">
        <div v-for="(event, index) in events" :key="index" class="listings">
            <div class="card">
                <div class="card__date">
                    <div class="card__date--month">
                        {{event.dates[0].month}}
                    </div>
                    <div class="card__date--day">
                        {{event.dates[0].day}}<span v-if="event.dates.length > 1">-</span>
                    </div>
                </div>
                <div class="card__details">
                    <div class="card__details--title">
                        {{event.title}}
                    </div>
                    <div class="card__details--desc">
                        {{event.desc.slice(0, 40)}}...
                    </div>
                    <div class="card__details--time">
                        START: <span class="card__details--time-details">{{event.dates[0].start}}</span> -
                        END: <span class="card__details--time-details">{{event.dates[0].end}}</span>
                    </div>
                </div>
                <div class="card__more" @click="showEvent(event)">
                    MORE
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    props: ['events'],
    data() {
        return {

        }
    },
    methods: {
        showEvent(event) {
            console.log(event)
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'event')
            this.$store.commit('modal/setEventModal', event)
        }
    }
}
</script>

<style lang="scss">

.list {
    display: flex;
    flex-direction: column;
}


.listings {
    // width: 80%;
    margin: 0 auto;
}

.card {
    font-family: $font2;
    display: flex;
    color: $color2;
    margin: .2rem 0;

    &__date {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid $color1;
        margin-right: 1rem;

        &--month {
            text-transform: uppercase;
            color: white;
            background: $color1;
            padding: .2rem .4rem;
        }

        &--day {
            margin-top: 1rem;
            color: $color1;
        }
    }

    &__details {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        color: $color1;
        

        &--title {
            align-items: flex-start;
            font-size: 1.9rem;
            margin-bottom: .2rem;
        }

        &--time {
            color: $color1;
            font-size: 1.2rem;
            
            & span {
                color: $color1;
            }

            &-details {
                font-size: 1.8rem;
            }
        }
    }

    &__more {
        cursor: pointer;
        font-size: 1rem;
        color: $color1;
        border: 2px solid $color1;
        align-self: flex-start;
        padding: 0 .5rem;
        transition: all .4s;
    }

    &__more:hover {
        background: $color1;
        color: white;
    }
}

.controls {
    cursor: pointer;
    filter: opacity(80%);
    width: 8rem;
    transition: all .4s;

    &:hover,
    &:active {
        filter: opacity(40%);
    }
}
</style>