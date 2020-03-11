<template>
  <div class="list">
        <div v-for="(event, index) in events" :key="index" class="listings">
            <div class="card">
                <div class="card__date">
                    <div class="card__date--month">
                        {{event.month}}
                    </div>
                    <div class="card__date--day">
                        {{event.day}}
                    </div>
                </div>
                <div class="card__details">
                    <div class="card__details--title">
                        {{event.title}}
                    </div>
                    <div class="card__details--desc">
                        {{event.desc}}
                    </div>
                    <div class="card__details--time">
                        START: <span>{{event.timeStart}} pm</span> ::
                        END: <span>{{event.timeEnd}} pm</span>
                    </div>
                </div>
                <div class="card__more" @click="showEvent(event.id)">
                    MORE{{event.id}}
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
        showEvent(id) {
            console.log(id)
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
        border: 2px solid $color2;
        // height: 50%;
        
        margin-right: 1rem;

        &--month {
            color: white;
            background: $color2;
            padding: .2rem .4rem;
        }

        &--day {
            margin-top: .4rem;
            color: $color2;
        }
    }

    &__details {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        

        &--title {
            color: $color1;
            align-items: flex-start;
        }

        &--time {
            color: $color2;
            
            & span {
                color: $color1;
            }
        }
    }

    &__more {
        cursor: pointer;
        font-size: 1rem;
        border: 2px solid $color3;
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