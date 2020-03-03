export const state = () => ({
    index: 0,
    sponsers: [
        {
            id: 0,
            name: 'Iowa Wine Growers',
            url: require('assets/sponsers/Iowa-Wine-RGB-2C-Primary.png')
        }
    ]
});

export const getters = {    
    getSponsers(state) {
        return state.sponsers
    }
};

export const mutations = {
   
};

export const actions = {

};