import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        userInfo: null,
    },
    getters: {
        isLogIn: (state) => {
            return (state.userInfo !== null);
        }
    },
    mutations: {
        logIn: (state, payload) => {
            state.userInfo = payload.userInfo;
        }
    },
    actions: {
        logOut: (context) => {
            context.state.userInfo = null;
        }
    }
});

export default store;
