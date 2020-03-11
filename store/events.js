import data from '../static/data/event-data.js'

export const state = () => ({
    firstPage: 0,
    secondPage: 1,
    numPages: null,
    events: [],
    pagedEvents: []
});

export const getters = {   
    getNumPages(state) {
        return state.numPages 
    },
    getFirstPage(state) {
        return state.firstPage 
    }, 
    getSecondPage(state) {
        return state.secondPage 
    },
    getPageRightDisabled(state) {
        return state.secondPage == state.numPages-1
    },
    getPageLeftDisabled(state) {
        return state.firstPage == 0
    },
    getPagedEvents(state) {
        return state.pagedEvents
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
    pageRight(state) {
        state.firstPage++
        state.secondPage++
    },
    pageLeft(state) {
        state.firstPage--
        state.secondPage--
    },
    setNumPages(state, payload) {
        state.numPages = payload
    }
};

export const actions = {
    async loadData ({commit, state}) {
        try {    
            data.sort().forEach((event)=> {
                commit('addEvents', event)
            })
            let numPages = Math.ceil(data.length / 5)
            commit('setNumPages',  numPages)
            for (let i=0; i<numPages; i ++) {
                commit('setPagedEvents', i)
            }
        } catch(e) {
            console.log(e)
        }
    }
};