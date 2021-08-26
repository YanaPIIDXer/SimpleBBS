import Vuex from 'vuex'

const store = Vuex.Store({
    state: {
        userInfo: null,
    },
    getters: {
        isLogIn: (state) => {
            return (state.userInfo !== null);
        }
    },
    mutations: {
        logIn: (state, userInfo) => {
            state.userInfo = userInfo;
        },
        logOut: (state) => {
            state.userInfo = null;
        }
    }
});

export default store;
