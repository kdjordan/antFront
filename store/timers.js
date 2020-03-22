export const state = () => ({
    events: {
        running: false,
        interval: null
    },
    alerts: {
        running: false,
        interval: null
    }
});

export const getters = {
    getEventRunning(state) {
        return state.events.running
    },
    getAlertRunning(state) {
        return state.alerts.running
    }
};

export const mutations = {
    setEventInterval(state, payload) {
        state.events.interval = payload
    },
    setAlertInterval(state, payload) {
        state.alerts.interval = payload
    },
    stopEventsCycle(state) {
        clearInterval(state.events.interval)
        this.dispatch('timers/startCycleEvents')
    },
    stopAlertCycle(state) {
        clearInterval(state.events.interval)
        this.dispatch('timers/startCycleAlerts')
    },
    setRunning(state, payload) {
        if(payload == 'events') {
            state.events.running = true
        }
        if(payload == 'news') {
            state.alerts.running = true
        }
    }
};

export const actions = {
    startCycleEvents({ commit }) {
        let theInterval = setInterval(() => {
            this.commit('events/setNextCycledEvent')
            }, 5000)
        commit('setEventInterval', theInterval)
        commit('setRunning', 'events')

    },
    startCycleAlerts({ commit }) {
        let theInterval = setInterval(() => {
            this.commit('alerts/getNextAlert')
            }, 5000)
            commit('setAlertInterval', theInterval)
            commit('alerts/getNextAlert')
    }
};