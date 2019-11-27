<!--
 * @Author: MoeWang
 * @Date: 2019-11-21 19:34:04
 * @LastEditors: 
 * @LastEditTime: 2019-11-23 21:00:18
 * @FilePath: \baletu\src\views\apartment\Apartment.vue
 -->
<template>
  <div class="apartment-container">
    <div class="apartment-wrapper">
      <div class="search-header">
        <div class="search-header clearfix">
          <router-link class="search-header-home fl" to="/" tag="div">
            <img src="//js.baletoo.cn/static/m/static/images/home.png" alt />
          </router-link>
          <div class="search-header-my fr">
            <img src="//js.baletoo.cn/static/m/static/images/my.png" alt />
          </div>
          <div class="tabCity headerCity">
            <div class="topSelect" @click="onCityOptionShow">
              <span class="city-select city-select-text">{{currentCity}}</span>
              <span class="city-select city-select-bg"></span>
            </div>

            <CityOption></CityOption>
          </div>
          <div class="search-header-input">
            <img src="//js.baletoo.cn/static/m/static/images/fangdajin.png" alt />输入区域、小区搜索公寓
          </div>
          <div class="find-house-map"></div>
        </div>
      </div>

      <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in bannerList" :key="item.banners_id">
            <img :src="item.banners_image_url" alt />
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div
        class="unitStore"
        v-for="shop in shopList"
        :key="shop.company_shop_id"
        :cId="shop.company_shop_id"
      >
        <div class="unitStore-title">
          <div class="store-logo">
            <img :src="shop.logo_url" alt />
          </div>
          <div class="store-mes">
            <h2>
              {{shop.shop_name}}
              <span></span>
            </h2>
            <p>{{shop.address}}</p>
          </div>
          <div class="store-link">进店</div>
        </div>
        <ul class="unitList" v-if="shop.house_list.length">
          <li v-for="house in shop.house_list" :key="house.house_id" :hid="house.house_id">
            <div class="unitList-img">
              <img :src="house.house_main_image" alt />
            </div>
            <h2>{{house.house_attr_val}}</h2>
            <h3>￥{{house.month_rent}}</h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";
import $ from "jquery";
import CityOption from "@/components/CityOption";
import { mapState, mapActions } from "vuex";
import { get } from "@/utils/http.js";

let city = localStorage.getItem("city") || "北京";
let cityEn = globalCityList[city].cityEn;
export default {
  components: {
    swiper: VueAwesomeSwiper.swiper,
    swiperSlide: VueAwesomeSwiper.swiperSlide,

    CityOption
  },
  methods: {
    ...mapActions(["cityShow"]),
    onCityOptionShow() {
      this.cityShow("showSelect");
    }
  },
  computed: {
    ...mapState(["cityOption", "currentCity"]),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  data() {
    return {
      bannerList: [],
      shopList: [],
      swiperOption: {
        speed: 300,
        notNextTick: true,
        autoplay: true,
        preloadImages: false,
        pagination: {
          el: ".swiper-pagination"
        },
        paginationClickable: true
      }
    };
  },
  watch: {
    async currentCity(city) {
      cityEn = globalCityList[city].cityEn;
      let result = await get({
        url:
          "/api/" +
          cityEn +
          '/companyshopapi/index?public_parameters=%7B"blt_user_id":"0","platformType":"H5","new_project_name":"2","project_name":"租客H5","channel":"H5","open_id":"0","is_login":false%7D&preset_parameters=%7B"$screen_height":667,"$screen_width":375,"$lib":"js","$lib_version":"1.14.2","$latest_referrer":"","$latest_referrer_host":"","$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_utm_source":"baidu","$latest_utm_medium":"cpc","$latest_utm_campaign":"WAP行业词","$latest_utm_content":"WAP租房","$latest_utm_term":"租房+网","$referrer":"","$referrer_host":"m.baletu.com","$url":"https:%2F%2Fm.baletu.com%2Fsh%2Fapartment","$url_path":"%2Fsh%2Fapartment","_distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115","distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115"%7D&entrance=5'
      });

      this.bannerList = result.result.banner_list;
      this.shopList = result.result.good_shops;
    }
  },
  async beforeRouteEnter(to, from, next) {
    let result = await get({
      url:
        "/api/" +
        cityEn +
        '/companyshopapi/index?public_parameters=%7B"blt_user_id":"0","platformType":"H5","new_project_name":"2","project_name":"租客H5","channel":"H5","open_id":"0","is_login":false%7D&preset_parameters=%7B"$screen_height":667,"$screen_width":375,"$lib":"js","$lib_version":"1.14.2","$latest_referrer":"","$latest_referrer_host":"","$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_utm_source":"baidu","$latest_utm_medium":"cpc","$latest_utm_campaign":"WAP行业词","$latest_utm_content":"WAP租房","$latest_utm_term":"租房+网","$referrer":"","$referrer_host":"m.baletu.com","$url":"https:%2F%2Fm.baletu.com%2Fsh%2Fapartment","$url_path":"%2Fsh%2Fapartment","_distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115","distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115"%7D&entrance=5'
    });

    if (!result.result.banner_list.length) {
      next(vm => {
        vm.$router.push({
          name: "zhaofang"
        });
      });
    } else {
      next(vm => {
        console.log("456");
      });
    }
  },
  async beforeMount() {
    cityEn = globalCityList[this.currentCity].cityEn;
    let result = await get({
      url:
        "/api/" +
        cityEn +
        '/companyshopapi/index?public_parameters=%7B"blt_user_id":"0","platformType":"H5","new_project_name":"2","project_name":"租客H5","channel":"H5","open_id":"0","is_login":false%7D&preset_parameters=%7B"$screen_height":667,"$screen_width":375,"$lib":"js","$lib_version":"1.14.2","$latest_referrer":"","$latest_referrer_host":"","$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_utm_source":"baidu","$latest_utm_medium":"cpc","$latest_utm_campaign":"WAP行业词","$latest_utm_content":"WAP租房","$latest_utm_term":"租房+网","$referrer":"","$referrer_host":"m.baletu.com","$url":"https:%2F%2Fm.baletu.com%2Fsh%2Fapartment","$url_path":"%2Fsh%2Fapartment","_distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115","distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115"%7D&entrance=5'
    });

    this.bannerList = result.result.banner_list;
    this.shopList = result.result.good_shops;
  }
};
</script>

<style lang='stylus' scoped>
.apartment-container {
  background-color: #f0f0f0;
  height: 100%;
  overflow: scroll;
}

.search-header {
  height: 0.88rem;
  background-color: #ee3943;
  position: relative;
}

.search-header-home {
  width: 0.4rem;
  height: 0.4rem;
  padding: 0.22rem 0.3rem 0.15rem;

  img {
    width: 100%;
    height: 100%;
  }
}

.search-header-my {
  width: 0.33rem;
  height: 0.4rem;
  padding: 0.22rem 0.3rem 0.15rem;

  img {
    width: 100%;
    height: 100%;
  }
}

.headerCity {
  position: absolute !important;
  top: -0.16rem;
  left: 0;
  padding-left: 0.8rem;
}

.tabCity {
  position: relative;
  z-index: 102;
}

.topSelect {
  position: relative;
  z-index: 999;
  width: 0.8rem;
  top: 0.4rem;
  left: 0.2rem;
  padding-right: 0.2rem;
}

.city-select {
  z-index: 99;
  color: #fff;
}

.city-select-bg {
  background: url('../../assets/img/arr.png') no-repeat 100%;
  position: relative;
  z-index: 999;
  width: 0.8rem;
  left: 0.2rem;
  background-size: 0.21rem, 0.14rem;
  padding-right: 0.2rem;
}

.search-header-input {
  width: 4.31rem;
  height: 0.6rem;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 0.12rem;
  left: 2.26rem;
  z-index: 101;
  line-height: 0.6rem;
  font-size: 0.24rem;
  color: #cbcbcb;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  img {
    width: 0.3rem;
    height: 0.3rem;
    padding: 0 0.2rem 0 0.3rem;
  }
}

.banner {
  width: 100%;
  height: 3rem;

  >div {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.unitStore {
  padding: 0.3rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
}

.store-link, .unitStore-bot {
  color: #ee3943;
  font-size: 0.26rem;
}

.store-link {
  width: 0.9rem;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  border: 1px solid #ee3943;
  border-radius: 0.04rem;
}

.unitStore-title {
  overflow: hidden;
  padding-right: 1rem;
  position: relative;

  .store-logo {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    background: url('../../assets/img/logo-store.png') no-repeat 50%;
    background-size: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    img {
      width: 100%;
      min-height: 100%;
    }
  }

  .store-mes {
    float: left;
    margin-left: 0.3rem;
    max-width: 4.4rem;
    min-width: 3rem;

    h2 {
      font-size: 0.34rem;
      color: #5a5c5d;
      line-height: 0.56rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 400;
    }

    p {
      color: #9b9b9b;
      font-size: 0.28rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.unitStore-title .store-link {
  position: absolute;
  right: 0;
  top: 0.1rem;
}

.unitList {
  overflow: hidden;
  margin: 0.2rem 0;

  li {
    float: left;
    margin-left: 3.5%;
    width: 31%;
    overflow: hidden;

    &:first-child {
      margin-left: 0;
    }

    h2 {
      font-size: 0.3rem;
      color: #5a5c5d;
      line-height: 0.58rem;
    }

    h3 {
      font-size: 0.28rem;
      color: #9b9b9b;
    }
  }
}

.unitList-img {
  overflow: hidden;
  height: 1.6rem;

  img {
    width: 100%;
    min-height: 100%;
  }
}

.unitList li h2, .unitList li h3 {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
}
</style>

<style lang="stylus">
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #04be02 !important;
}

.swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  background: #d0cdd1;
  opacity: 1;
}
</style>
