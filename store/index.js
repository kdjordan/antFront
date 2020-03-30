export const actions = {
    async nuxtServerInit({ dispatch }) {
        try {
            // let ans = dispatch('alerts/loadAlerts')
            let ans1 = dispatch('events/loadData')
            let ans2 = dispatch('events/loadFeaturedEvents')
        } catch(e) {
            console.log(e);
        }
   }
}
