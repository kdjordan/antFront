export const state = () => ({
    index: 0,
    messages: [
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
        },
        {
            id: 3,
            type: 'food',
            ref: 'https://google.com',
            mssg: "Big Iowan Grill"
        },
        {
            id: 4,
            type: 'brewery',
            ref: 'https://google.com',
            mssg: "Des Moines Brewery"
        },
        {
            id: 5,
            type: 'winery',
            ref: 'https://google.com',
            mssg: "Plains Wines"
        },
    ]
});

export const getters = {
    getNews(state) {
        return state.messages
    },
    getMessage(state) {
        return state.messages[state.index];
    }
};

export const mutations = {
    getNextMessage(state, payload) {
        if(state.index == state.messages.length-1) {
            state.index = 0
        } else {
            state.index++
        }
    }
};

export const actions = {

};