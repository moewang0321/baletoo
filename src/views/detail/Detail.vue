<template>
  <div>
    {{houseId}} 拿不到数据
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import $ from "jquery";
import CityOption from "@/components/CityOption";
import { mapState, mapActions } from "vuex";
import { get } from "@/utils/http.js";
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

let city = localStorage.getItem("city") || "北京";
let cityEn = globalCityList[city].cityEn;
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        initialSlide: 0,
        autoplay: false,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        someSwiperEvent: swiper => {
          console.log(1);
        }
      }
    };
  },
  methods: {
    callback() {
      console.log(1);
    }
  },
  computed: {
    ...mapState(["houseId", "currentCity"]),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  async mounted() {
    cityEn = globalCityList[this.currentCity].cityEn;
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);

    let result = await get({
      url:
        "/api/" +
        cityEn +
        "/houseapi/indexNew?user_id=0entrance=8&zhaofangapi_index_entrance=4&house_id=" +
        this.houseId +
        "&from=10&channel=&kill_crawler=4abc491a3ca5dcccad8104a064e8a89a&search_id=2030942&position=1&is_rec_house=0"
    });

    console.log(result);
  }
};
</script>

<style lang='stylus' scoped></style>
