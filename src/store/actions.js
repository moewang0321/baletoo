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
    },

    //更新关键字
    updateKeyword({
        commit
    }, keyword) {
        commit('setKeyword', keyword)
    },
    //更新搜索列表
    updateSearchList({
        commit,
        state
    }, list) {
        if (list.length) {
            list.forEach((obj, index) => {
                obj.titleStr = obj.title
                obj.title = obj.title.split(state.keyword)
                obj.name = obj.name.split(state.keyword)
                if (obj.title.length > 1) {
                    obj.title.push(state.keyword)
                }
                if (obj.name.length > 1) {
                    obj.name.push(state.keyword)
                }
            }, state.keyword);

        }

        commit('setSearchList', list)
    }
}