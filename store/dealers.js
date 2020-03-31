import dealers from '../static/data/dealer-data.js'

export const state = () => ({
    index: 0,
    dealers: []
});

export const getters = {
    getDealer(state) {
        return state.dealers[state.index]
    }
};

export const mutations = {
    addDealers(state, payload) {
        console.log('called')
        state.dealers.push(payload)
    }
};

export const actions = {
    async loadDealers({ commit }) {
        try {
            dealers.forEach(item => {
                commit('addDealers', item)
            })
            return true
        } catch(e) {
            console.log(e)
        }

    }

};