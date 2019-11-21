<template>
  <div class="mate-container">
    <div class="search-header clearfix">
      <router-link class="search-header-home fl" to="/" tag="div">
        <img src="//js.baletoo.cn/static/m/static/images/home.png" alt />
      </router-link>
      <div class="search-header-my fr">
        <img src="//js.baletoo.cn/static/m/static/images/my.png" alt />
      </div>
      <div data-v-70b2d22c class="tabCity headerCity">
        <div data-v-70b2d22c class="topSelect">
          <span data-v-70b2d22c class="city-select city-select-text">{{currentCity}}</span>
          <span data-v-70b2d22c class="city-select city-select-bg"></span>
        </div>

        <CityOption></CityOption>
      </div>
      <div class="search-header-input">找室友专区</div>
      <div class="find-house-map"></div>
    </div>

    <!-- 筛选 -->
    <div class="tab-out">
      <div class="tab-wrapper">
        <div class="tab-box">
          <span class="tab-text">地铁</span>
          <span class="tab-icon"></span>
        </div>
        <div class="tab-box">
          <span class="tab-text">租金</span>
          <span class="tab-icon"></span>
        </div>
      </div>
      <div class="options">
        <div class="ditie-options" style="display:none">
          <ul>
            <li class="item-left ditie-item-left-active">全部</li>
            <li class="item-left">1号线</li>
          </ul>
        </div>
        <div class="tab-zujin" style="display:none">
          <ul class="zujin-options">
            <li class="zujin-option zujin-option-active">不限</li>
            <li class="zujin-option">1500元以下</li>
          </ul>
          <div class="zujin-price clearfix">
            <span class="zujin-price-zidingyi">自定义价格</span>
            <span class="zujin-price-danwei">（单位：元）</span>
            <span class="zujin-price-confirm">确定</span>
          </div>
          <span class="range-price">不限</span>
          <div class="range-box">
            <div class="bar-outer">
              <div class="bar-inner-limit">
                <div class="bar-inner"></div>
              </div>
              <span class="range-icon range-icon-left"></span>
              <span class="range-icon range-icon-right"></span>
            </div>
          </div>
          <ul class="range-ruler">
            <li class="ruler-item">不限</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list-wrapper">
      <div class="list">
        <div v-for="(item , index) in mateList" :key="index" :userId="item.user_id">
          <div class="house-card">
            <div class="card-info clearfix">
              <div class="list-box-left">
                <div class="card-img">
                  <img :src="item.photo2" alt class="card-img-house" />
                </div>
              </div>
              <ul class="card-text">
                <li>
                  <div class="card-text-name">{{item.address}}</div>
                  <div class="card-text-price">￥{{item.rent_amount}}</div>
                </li>
                <li class="card-text-info">
                  <span>
                    <i class="icon iconType-dj" v-if="item.room_type == '单间'">
                      <img
                        src="//js.baletoo.cn/static/m/static/images/find_roommate_singleRoom.png"
                      />
                    </i>
                    <i class="icon iconType-cw" v-if="item.room_type == '床位'">
                      <img src="//js.baletoo.cn/static/m/static/images/find_roommate_bed.png" />
                    </i>
                    {{item.room_type}}
                  </span>
                  <span>
                    <i class="icon iconRep" v-if="item.roommate_req == '限女'">
                      <img src="//js.baletoo.cn/static/m/static/images/nv.png" />
                    </i>
                    <i class="icon iconRep" v-if="item.roommate_req == '限男'">
                      <img src="//js.baletoo.cn/static/m/static/images/nan.png" />
                    </i>
                    <i class="icon iconRep-bx" v-if="item.roommate_req == '不限'">
                      <img src="//js.baletoo.cn/static/m/static/images/find_roommate_people.png" />
                    </i>
                    {{item.roommate_req}}
                  </span>
                  <span>
                    <i class="icon iconDate">
                      <img src="//js.baletoo.cn/static/m/static/images/find_roommate_checkIn.png" />
                    </i>
                    {{item.checkin_data}}入住
                  </span>
                </li>
                <li class="card-text-subway">{{item.near_subway_desc}}</li>
                <li class="card-text-service">
                  <span>{{item.type == 1 ? '室友合租' : item.type == 2 ? "" : "转租" }}</span>
                  <div class="text-info-day">{{item.refresh_time}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
    </div>

    <div class="topBack" ref="topBar" :style="showBar" @click="backTop">
      <p>回到顶部</p>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import CityOption from "@/components/CityOption";
import { mapState, mapActions } from "vuex";
import { get } from "@/utils/http.js";
import BScroll from "better-scroll";

let city = localStorage.getItem("city") || "北京";
let cityEn = globalCityList[city].cityEn;
export default {
  components: {
    CityOption
  },
  data() {
    return {
      isFirstIn: true,
      mateList: [],
      showBar: "display:none",
      total: 0,
      pageAdd: false,
      page: 1
    };
  },
  computed: {
    ...mapState(["cityOption", "currentCity"])
  },
  methods: {
    ...mapActions(["cityShow"]),
    backTop() {
      this.backToTop();
    },

    showTopBar(attr) {
      this.showBar = attr;
    }
  },
  async beforeMount() {
    if(this.$route.params.page != 1){
        this.$router.replace({
           name: 'roommate', params:{page: 1}

        });
    }
    cityEn = globalCityList[this.currentCity].cityEn;
    if (this.isFirstIn) {
      let result = await get({
        url: `/api/${cityEn}/Findroommateapi/getList?p=1`
      });
      this.mateList = result.result.list.result.list;
      console.log(this.mateList);
      this.pageAdd = true;
    }

    this.bScroll = new BScroll(".list-wrapper", {
      click: true,
      bounce: false,
      probeType: 2
    });

    this.bScroll.on("scroll", async () => {
      let { y, maxScrollY } = this.bScroll;
      if (Math.abs(y) >= 250) {
        this.showTopBar("display:block");
      }
      if (Math.abs(y) < 250) {
        this.showTopBar("display:none");
      }
    });
    this.backToTop = function() {
      this.bScroll.scrollTo(0, 0, 500);
    };

    this.bScroll.on("scrollEnd", async () => {
      let { y, maxScrollY } = this.bScroll;

      if (y <= maxScrollY && this.pageAdd) {
        console.log("下一页");

        this.page++;
        // console.log(this.$route.params.page);
        // this.$route.params.page = this.page;
        this.$router.replace({
           name: 'roommate', params:{page: this.page}

        });

        this.pageAdd = false;
        let result = await get({
          url: "/api/" + cityEn + "/Findroommateapi/getList",
          params: {
            p: this.page
          }
        });

        if (result) {
          if (result.result.list.result.list) {
            this.mateList = [
              ...this.mateList,
              ...result.result.list.result.list
            ];

            this.pageAdd = true;
          } else {
            $(".loading").css("display", "none");
          }
        }
        await this.$nextTick();
        this.bScroll.refresh();
      }
    });
  }
};
</script>

<style lang='stylus' scoped>
.mate-container {
  display: -webkit-box;
  flex-direction: column;
  height: 100%;
}

.list-wrapper {
  flex: 1;
  z-index: 10;
}

.card-text-service {
  color: #5a5c5d;
  overflow: hidden;
  padding-right: 1rem;
  position: relative;
  height: 0.36rem;
  margin-top: 0.02rem;
}

.search-header {
  height: 0.88rem;
  background-color: #ee3943;
  position: relative;
  z-index: 1000;
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
  width: 3.1rem;
  height: 0.6rem;
  position: absolute;
  top: 0.12rem;
  left: 2.26rem;
  z-index: 101;
  line-height: 0.6rem;
  font-size: 0.32rem;
  color: #fff;
  text-align: center;
  margin-right: 0.5rem;
  margin-top: 0.02rem;
}

.tab-out {
  width: 100%;
  background-color: #fff;
  z-index: 103;
  top: 0;
  position: relative;
  top: auto;
  height: 0.88rem;
}

.tab-wrapper {
  z-index: 101;
  width: 100%;
  height: 0.86rem;
  border-bottom: 1px solid #ececec;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.tab-box {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;

  .tab-text {
    max-width: 73%;
    display: inline-block;
    line-height: 0.86rem;
    color: #5a5c5d;
    font-size: 0.26rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: middle;
  }

  .tab-icon {
    display: inline-block;
    width: 0.17rem;
    height: 0.1rem;
    vertical-align: middle;
    background: url('../../assets/img/normalArr.png') no-repeat 50%;
    background-size: 100% 100%;
  }
}

.ditie-options {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 5.4rem;

  ul {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #f0f0f0;
  }

  li {
    height: 0.9rem;
    line-height: 0.9rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 0.3rem;
    overflow: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #5a5c5d;
    font-size: 0.28rem;
    text-align: center;
  }
}

.item-left {
  padding-left: 0.3rem;
}

.ditie-item-left-active, body .ditie-item-left-active {
  background-color: #fff;
  color: #ee3943;
}

.tab-zujin {
  background-color: #fff;
}

.zujin-options {
  padding-top: 0.4rem;
}

.zujin-option {
  display: inline-block;
  width: 2.09rem;
  height: 0.66rem;
  line-height: 0.66rem;
  background-color: #f8f8f8;
  margin: 0 0 0.3rem 0.3rem;
  color: #a3a2a2;
  font-size: 0.28rem;
  text-align: center;
  overflow: hidden;
}

.zujin-option-active {
  background-color: #eff6fa;
  color: #2f92ca;
}

.zujin-price {
  padding: 0.2rem 0.3rem;

  span {
    display: inline-block;
    height: 0.5rem;
    line-height: 0.5rem;
  }
}

.zujin-price-zidingyi {
  font-size: 0.28rem;
  color: #5a5c5d;
}

.zujin-price-danwei {
  font-size: 0.26rem;
  color: #a3a2a2;
}

.zujin-price-confirm {
  font-size: 0.24rem;
  color: #a3a2a2;
  width: 1.14rem;
  background-color: #f8f8f8;
  border-radius: 2px;
  text-align: center;
  float: right;
}

.range-price {
  display: inline-block;
  padding: 0.2rem 0.8rem 0.5rem;
  color: #ee3943;
  font-size: 0.28rem;
  position: relative;
}

.range-box {
  margin: 0 0.8rem;
}

.bar-inner, .bar-outer {
  height: 4px;
  border-radius: 2px;
  width: 100%;
}

.bar-outer {
  background-color: #f0f0f0;
  position: relative;
}

.bar-inner-limit {
  width: 100%;
  height: 4px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.bar-inner, .bar-outer {
  height: 4px;
  border-radius: 2px;
  width: 100%;
}

.bar-inner {
  background-color: #ee3943;
  position: absolute;
}

.range-icon {
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  margin: -15px 0 0 -15px;
  border-radius: 50%;
  -webkit-box-shadow: 1px 1px 2px 1px #999;
  box-shadow: 1px 1px 2px 1px #999;
  background: #fff url('../../assets/img/range-icon.png') no-repeat 50%;
  background-size: 200%;
}

.range-icon-left {
  left: 0;
}

.range-icon-right {
  left: 100%;
}

.range-ruler {
  padding: 0.45rem 0.5rem 0.7rem;
  display: flex;
}

.ruler-item {
  width: 0.6rem;
  font-size: 0.28rem;
  color: #a3a2a2;
  flex: 1;
  text-align: center;
}

.house-card {
  padding: 0.3rem;
  border-bottom: 1px solid #f0f0f0;
}

.list-box-left {
  float: left;
  width: 40%;
  margin-right: 0.2rem;
}

.card-img {
  width: 100%;
  height: 2.16rem;
  position: relative;
  display: inline-block;

  .card-img-house {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}

.card-text {
  display: inline-block;
  float: left;
  width: 56%;
  font-size: 0.24rem;
  color: #c4c4c4;

  li {
    padding-bottom: 0.2rem;
  }

  .card-text-service {
    padding-bottom: 0;
  }
}

.card-text-name {
  font-size: 0.34rem;
  font-weight: 700;
  color: #5a5c5d;
  line-height: 0.44rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 2.5rem;
  display: inline-block;
  float: left;
}

.card-text-price {
  font-size: 0.32rem;
  font-weight: 400;
  color: #e8323f;
  height: 0.44rem;
  line-height: 0.44rem;
  display: inline-block;
  width: 1.2rem;
  margin-left: 0.1rem;
  text-align: right;
}

.card-text-info {
  font-size: 0.22rem;
  color: #9b9b9b;
  line-height: 0.34rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    color: #f7646e;
    margin-right: 0.1rem;

    .icon {
      display: inline-block;
      height: 0.22rem;
      margin-right: 0.02rem;
      overflow: hidden;

      img {
        height: 100%;
        float: left;
      }
    }
  }
}

.card-text-subway {
  font-size: 0.26rem;
  color: #9b9b9b;
  line-height: 0.44rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-text-service {
  span {
    display: inline-block;
    font-size: 0.24rem;
    height: 0.36rem;
    line-height: 0.36rem;
    float: left;
    border-radius: 2px;
    margin-right: 0.1rem;
    padding: 0 0.04rem;
    color: #87bcda;
    background-color: #eff6fa;
  }
}

.text-info-day {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 0.24rem;
  color: #c4c4c4;
}
</style>
