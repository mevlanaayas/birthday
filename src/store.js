import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "Meltem",
        date: new Date()
    },
    mutations: {
        addName(state, name) {
            state.name = name
        },
        addDate(state, date) {
            state.date = date
        },
    },
    actions: {
        AddName({commit, name}) {
            commit(name)
        },
        AddDate({commit, date}) {
            commit(date)
        },
    },
    getters: {
        getName: state => {
            return state.name
        },
        getDate: state => {
            return state.date
        },
    }
})


