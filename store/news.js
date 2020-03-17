import newsFeed from '../static/data/news-data.js'

export const state = () => ({
    index: 0,
    messages: []
});

export const getters = {
    getNews(state) {
        return state.messages
    },
    getMessage(state) {
        return state.messages[state.index]
    }
};

export const mutations = {
    getNextMessage(state,) {
        if(state.index == state.messages.length-1) {
            state.index = 0
        } else {
            state.index++
        }
    },
    addNews(state, payload) {
        state.messages.push(payload)
    }
};

export const actions = {
    async loadNews({ commit }) {
        try {
            newsFeed.forEach(item => {
                commit('addNews', item)
            })
        } catch(e) {
            console.log(e)
        }

    }

};