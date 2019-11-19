<template>
  <div class="good-house">
    <div class="good-title">
      <span>猜你喜欢</span>
    </div>
    <ul class="good-list">
      <li class="good-item">
        <HouseItem
          v-for="(house , index) in houseList"
          :key="house.house_id"
          :house="house"
          :index="index"
        ></HouseItem>
      </li>
    </ul>
    <div class="loading">
      <span class="vux-spinner vux-spinner-ios">
        <svg viewBox="0 0 64 64">
          <g stroke-width="4" stroke-linecap="round">
            <line y1="17" y2="29" transform="translate(32,32) rotate(180)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(210)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(240)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(270)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(300)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(330)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(0)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(30)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(60)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(90)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(120)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(150)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"
                repeatCount="indefinite"
              />
            </line>
          </g>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import HouseItem from "../HouseItem";
import { get } from "@/utils/http.js";

import { mapState, mapActions } from "vuex";

let city = localStorage.getItem("city") || "北京";
let cityEn = globalCityList[city].cityEn;

export default {
  props: {
    page: {
      type: Number
    }
  },
  components: {
    HouseItem
  },

  data() {
    return {
      houseList: []
    };
  },
  computed: {
    ...mapState(["homePageIsAdd", "currentCity"])
  },
  methods: {
    ...mapActions(["openPageAdd", "resetPageAdd"])
  },
  //第一次渲染页面加载数据
  async mounted() {
    let result = await get({
      url: "/api/" + cityEn + "/recomandapi/index",
      params: {
        p: this._props.page
      }
    });

    this.houseList = result.result;
    this.openPageAdd();
  },
  watch: {
    async page(newVal) {
      if (this.homePageIsAdd) {
        this.resetPageAdd();
        let result = await get({
          url: "/api/" + cityEn + "/recomandapi/index",
          params: {
            p: newVal
          }
        });

        if (result) {
          this.houseList = [...this.houseList, ...result.result];

          this.openPageAdd();
        }
      }
    },

    async currentCity(val) {
      let a = globalCityList[val].cityEn;
      let result = await get({
        url: "/api/" + a + "/recomandapi/index",
        params: {
          p: 1
        }
      });

      console.log(result);

      localStorage.setItem("city", val);
      this.houseList = result.result;
      // this.$forceUpdate();
    }
  }
};
</script>

<style lang="stylus" scoped>
.good-house {
  background-color: #fff;
}

.good-title {
  height: 1.18rem;
  line-height: 1.18rem;
  padding: 0 0.3rem;

  span {
    font-size: 0.34rem;
    color: #3a3b3c;
    font-weight: 700;
  }
}


</style>