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
    findListPageUpdate({
        commit,

        state
    }, page) {
        page++
        commit('setfindListPage', page)

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
    openFindPageAdd({
        commit
    }) {
        commit('setFindPageAddState')
    },

    resetFindPageAdd({
        commit
    }) {
        commit('resetFindPageAddState')
    },

    changeCity({
        commit
    }, cityName) {
        commit('setCurrentCity', cityName)
    },

    //传房屋id
    fillHouseId({
        commit
    }, houseId) {
        commit('setHouseId', houseId)
    }
}