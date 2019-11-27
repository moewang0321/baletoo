import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityOption: '',
    homeLikePage: 1,
    homePageIsAdd: false,
    findListPage: 1,
    findListPageIsAdd: false,
    currentCity: '北京',

    //房屋id
    houseId: '',

    //搜索关键字
    keyword: '',
    //搜索结果
    searchList: []
  },
  mutations,
  actions,
  modules: {}
})