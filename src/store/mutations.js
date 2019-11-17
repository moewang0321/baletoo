export default {
    //城市列表Class获取
    setCityOption(state, className) {
        state.cityOption = className
    },

    //首页>猜你喜欢的page更新
    setHomeLikePageUpdate(state, page) {
        state.homeLikePage = page

    },

    //判断首页猜你喜欢数据是否请求完毕
    setPageAddState(state) {
        state.homePageIsAdd = true
    },
    //每次请求完重置状态
    resetPageAddState(state) {
        state.homePageIsAdd = false
    },

    //选择当前城市
    setCurrentCity(state, cityName) {
        state.currentCity = cityName

        localStorage.setItem('city', state.currentCity)
    }
}