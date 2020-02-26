<template>
    <div>
        <div class="events">
            <img src="~assets/images/event-icon.png" alt="">
            <h2>Upcoming Events</h2>
        </div>
        <List :events="events" />
    </div>
</template>

<script>
import List from '@/components/sub/EventsList';

export default {
    components: {
        List
    },
    data() {
        return {
            events: [
                {
                    month: 'feb',
                    day: 27,
                    title: 'Judy\'s ShitShow',
                    desc: 'Join us for a day of antiquing in out great shop ! We will have games and drawings, and special guests.',
                    timeStart: '12:00',
                    timeEnd: '4:00'
                },
                {
                    month: 'feb',
                    day: 27,
                    title: 'Marty\'s ShitShow',
                    desc: 'Join us for a day of antiquing in out great shop !',
                    timeStart: '12:00',
                    timeEnd: '4:00'
                },
                {
                    month: 'feb',
                    day: 28,
                    title: 'Gary\'s ShitShow',
                    desc: 'Join us for a day of antiquing in out great shop !',
                    timeStart: '12:00',
                    timeEnd: '4:00'
                }
            ]
        }
    }

}
</script>

<style lang="scss">

.events {
    padding: 2rem 0;
    font-family: $font3;
    color: $color2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    border-top: 12px dotted #a6d0bc;
    margin-top: 1rem;

    & img {
        width: 5%;
        margin-right: 2rem;
    }
    
}

</style>