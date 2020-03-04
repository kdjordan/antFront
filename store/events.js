export const state = () => ({
    events: [
        {
            month: 'MAR',
            day: 6,
            title: 'Judy\'s Open House',
            desc: 'Join us for a day of antiquing in out great shop !',
            timeStart: '12:00',
            timeEnd: '4:00'
        },
        {
            month: 'MAR',
            day: 8,
            title: 'Marty\'s Junk Parade',
            desc: 'Join us for a day of antiquing in out great shop !',
            timeStart: '12:00',
            timeEnd: '4:00'
        },
        {
            month: 'MAR',
            day: 12,
            title: 'Gary\'s Antique Festival',
            desc: 'Join us for a day of antiquing in out great shop !',
            timeStart: '12:00',
            timeEnd: '4:00'
        },
        {
            month: 'MAR',
            day: 15,
            title: 'Judy\'s Open House',
            desc: 'Join us for a day of antiquing in out great shop !',
            timeStart: '12:00',
            timeEnd: '4:00'
        },
        {
            month: 'MAR',
            day: 22,
            title: 'Marty\'s Junk Parade',
            desc: 'Join us for a day of antiquing in out great shop !',
            timeStart: '12:00',
            timeEnd: '4:00'
        },
        {
            month: 'MAR',
            day: 28,
            title: 'Gary\'s Antique Festival',
            desc: 'Join us for a day of antiquing in out great shop !',
            timeStart: '12:00',
            timeEnd: '4:00'
        },
    ]
});

export const getters = {    
    getEvents(state) {
        return state.events
    }
};

export const mutations = {
   
};

export const actions = {

};