import data from '../static/data/event-data.js'

export const state = () => ({
    calPage: 0,
    numPages: null,
    events: [],
    pagedEvents: [],
    eventPage: 0,
    featuredEvents: []
});

export const getters = {   
    getCalPage(state) {
        return state.calPage 
    }, 
    getCalPageRightDisabled(state) {
        return state.calPage == state.numPages - 1
    },
    getCalPageLeftDisabled(state) {
        return state.calPage == 0
    },
    getPagedEvents(state) {
        return state.pagedEvents
    },
    getEventPageLeftDisabled(state) {
        return state.eventPage == 0
    },
    getEventPageRightDisabled(state) {
        return state.eventPage == state.featuredEvents.length - 1
    },
    getFeaturedEvents(state) {
        return state.featuredEvents
    },
    getFeaturedEvent(state) {
        return state.featuredEvents[state.eventPage];
    },
    getEventPage(state) {
        return state.eventPage
    }
};

export const mutations = {
    addEvents(state, payload) {
        state.events.push(payload)
    },
    setPagedEvents(state, payload) {
        let data = [...state.events]
        let index = payload * 5
        let returnArr = []
        for(let i = index ; (i < index + 5 && i < state.events.length) ; i++){
            returnArr.push(data[i])
        }
        state.pagedEvents.push(returnArr)
    },
    addFeaturedEvent(state, payload) {
        state.featuredEvents.push(payload)
    },
    setNextEvent(state) {
        if(state.eventPage == state.featuredEvents.length - 1){
            state.eventPage = 0
        } else {
            state.eventPage++
        }
    },
    pageRight(state, payload) {
        if(payload == "cal") {
            state.calPage++
        } else {
            state.eventPage++
        }
    },
    pageLeft(state, payload) {
        if(payload == "cal") {
            state.calPage--
        } else {
            state.eventPage--
        }
    },
    setNumPages(state, payload) {
        state.numPages = payload
    }
};

export const actions = {
    async loadData ({ commit }) {
        try {    
            data.sort().forEach((event)=> {
                commit('addEvents', event)
            })
            let numPages = Math.ceil(data.length / 5)
            commit('setNumPages',  numPages)
            for (let i=0; i<numPages; i ++) {
                commit('setPagedEvents', i)
            }
            return true;
        } catch(e) {
            console.log(e)
            return e
        }
    },
    loadFeaturedEvents({ commit, state }) {
            const featuredArr = state.events.filter((event) => event.featured == true)
            featuredArr.forEach((event) => {
                commit('addFeaturedEvent', event)
            })
    }
};