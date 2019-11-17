<!--
 * @Author: MoeWang
 * @Date: 2019-11-13 20:41:18
 * @LastEditors: 
 * @LastEditTime: 2019-11-14 09:50:31
 * @FilePath: \Vue-baletu\baletu\src\components\CityOption.vue
 -->
<template>
  <div :class="['option-box' , $store.state.cityOption]">
    <div class="city-option">
      <div class="selectCity-title">
        <img
          src="//js.baletoo.cn/static/m/static/images/left.png"
          alt="返回"
          class="left-icon"
          @click="returnHomeHandle"
        />
        选择城市
      </div>
      <div class="cityList">
        <h2>当前城市</h2>
        <ul>
          <li>{{currentCity}}</li>
        </ul>
      </div>
      <div class="cityList">
        <h2>热门城市</h2>
        <ul>
          <!-- <li>上海</li>
          <li>北京</li>
          <li>深圳</li>
          <li>杭州</li>
          <li>南京</li>
          <li>苏州</li>
          <li>广州</li>
          <li>成都</li>
          <li>大连</li>
          <li>天津</li>
          <li>重庆</li>
          <li>武汉</li>
          <li>西安</li>
          <li>郑州</li>-->
          <li
            v-for="( city , index ) in globalCityList"
            :key="index"
            :index="index"
            :ref="city.cityCn"
            @click="selectCity(city.cityCn)"
          >{{city.cityCn}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      globalCityList: globalCityList
    };
  },
  computed: {
    ...mapState(["currentCity", "cityOption"])
  },

  methods: {
    ...mapActions(["cityShow", "changeCity"]),
    returnHomeHandle() {
      this.cityShow("hideSelect");
    },

    selectCity(city) {
      let currentCity = this.$refs[city][0].innerHTML;
      this.changeCity(currentCity);
      this.cityShow("hideSelect");
    }
  }
};
</script>

<style lang="stylus">
.option-box {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1001;
  background-color: #fff;
  display: none;
}

.city-option {
  z-index: 1001;
  color: #3a3b3c;
}

.selectCity-title {
  height: 0.88rem;
  line-height: 0.88rem;
  background-color: #ee3943;
  text-align: center;
  font-size: 0.32rem;
  padding: 0 0.8rem;
  position: relative;
  color: #fff;

  .left-icon {
    position: absolute;
    padding: 0.3rem;
    height: 0.35rem;
    left: 0;
    top: 0;
  }
}

.cityList {
  padding: 0.6rem 0 0 0.3rem;

  h2 {
    color: #5a5c5d;
    font-size: 0.28rem;
    font-weight: 400;
  }

  ul {
    overflow: hidden;
  }

  li {
    float: left;
    width: 1.58rem;
    height: 0.66rem;
    line-height: 0.66rem;
    text-align: center;
    background-color: #f8f8f8;
    border-radius: 0.02rem;
    margin: 0.2rem 0.2rem 0 0;
    font-size: 0.3rem;
  }
}

.hideSelect {
  display: block;
  transform: translate3d(2000px, 0, 0);
  animation: bounceInRight 1.2s linear;
}

.showSelect {
  display: block;
  animation: bounceInLeft 0.8s linear;
}

@keyframes bounceInLeft {
  0% {
    transform: translate3d(2000px, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInRight {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(2000px, 0, 0);
  }
}
</style>
