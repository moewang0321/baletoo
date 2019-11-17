export default {
    cityShow({
        commit,
        state
    }, className) {
        commit('setCityOption', className)
    },

    homeLikePageUpdate({
        commit,

        state
    }, page) {
        page++
        commit('setHomeLikePageUpdate', page)

    },

    openPageAdd({
        commit
    }) {
        commit('setPageAddState')
    },

    resetPageAdd({
        commit
    }) {
        commit('resetPageAddState')
    },

    changeCity({
        commit
    }, cityName) {
        commit('setCurrentCity', cityName)
    }
}