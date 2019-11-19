<template>
  <div class="find-house skeleton">
    <div class="search-header clearfix">
      <router-link class="search-header-home fl" to="/" tag="div">
        <img src="//js.baletoo.cn/static/m/static/images/home.png" alt />
      </router-link>
      <div class="search-header-my fr">
        <img src="//js.baletoo.cn/static/m/static/images/my.png" alt />
      </div>
      <div data-v-70b2d22c class="tabCity headerCity">
        <div data-v-70b2d22c class="topSelect" @click="onCityOptionShow">
          <span data-v-70b2d22c class="city-select city-select-text">{{currentCity}}</span>
          <span data-v-70b2d22c class="city-select city-select-bg"></span>
        </div>
        <cityOption></cityOption>
      </div>
      <div class="search-header-input">
        <img src="//js.baletoo.cn/static/m/static/images/fangdajin.png" alt />输入区域，小区搜索房源
      </div>
      <div class="find-house-map"></div>
    </div>

    <div class="tab-out">
      <div class="tab-wrapper">
        <div class="tab" @click="showOptionTab($event)" tab="weizhi">
          <span class="tab-text">位置</span>
          <span class="tab-icon"></span>
        </div>
        <div class="tab" @click="showOptionTab($event)" tab="zujin">
          <span class="tab-text">租金</span>
          <span class="tab-icon"></span>
        </div>
        <div class="tab" @click="showOptionTab($event)" tab="huxing">
          <span class="tab-text" ref="find-c">户型</span>
          <span class="tab-icon"></span>
        </div>
        <div class="tab" @click="showOptionTab($event)" tab="gengduo">
          <span class="tab-text">更多</span>
          <span class="tab-icon"></span>
        </div>
      </div>

      <div class="options-wrapper">
        <div class="tab-op tab-weizhi options-weizhi-left" style="display:none" isOpen="0">
          <div class="weizhi-box">
            <div class="weizhi-quyu" tab="quyu" @click="weizhiSelectChild($event , 'quyu')">
              <span class="weizhi-tab-selected">区域</span>
            </div>
            <div class="weizhi-ditie" tab="ditie" @click="weizhiSelectChild($event , 'ditie')">
              <span class>地铁</span>
            </div>
          </div>
          <div class="weizhi-options" tag="options-quyu">
            <ul class="options-weizhi">
              <li
                class="options-weizhi-item weizhi-item-left weizhi-item-left-active"
                @click="selectAll($event )"
              >全部</li>
              <li
                class="options-weizhi-item weizhi-item-left"
                v-for="(area , index) in arealist"
                :key="index"
                :index="index"
                :en="area.pinyin"
                @click="selectArea($event )"
              >{{area.name}}</li>
            </ul>
            <ul class="options-weizhi options-weizhi-right">
              <li
                class="options-weizhi-item weizhi-item-right right-active"
                v-if="tArealist.length"
                en="all"
                @click="chooseItem($event)"
              >全部</li>
              <li
                class="options-weizhi-item weizhi-item-right"
                v-for="(tArea , index ) in tArealist"
                :key="index"
                :en="tArea.pinyin"
                @click="chooseItem($event)"
              >{{tArea.name}}</li>
            </ul>
          </div>
          <div class="weizhi-options" tag="options-ditie" style="display:none">
            <ul class="options-weizhi">
              <li
                class="options-weizhi-item weizhi-item-left weizhi-item-left-active"
                @click="selectAll($event )"
              >全部</li>
              <li
                class="options-weizhi-item weizhi-item-left"
                v-for="(line , index) in linelist"
                :key="index"
                :dId="'d' + line.id"
                :index="index"
                @click="selectLine($event)"
              >{{line.name}}</li>
            </ul>
            <ul class="options-weizhi options-weizhi-right">
              <li
                class="options-weizhi-item weizhi-item-right right-active"
                v-if="tLinelist.length"
                dId="all"
                @click="chooseItem($event)"
              >全部</li>

              <li
                class="options-weizhi-item weizhi-item-right"
                v-for="(tLine , index ) in tLinelist"
                :key="index"
                :dId="'d' + tLine.id"
                :index="index"
                @click="chooseItem($event)"
              >{{tLine.name}}</li>
            </ul>
          </div>
        </div>
        <div class="tab-op tab-zujin" style="display:none" isOpen="0">
          <ul class="zujin-options">
            <li class="zujin-option zujin-option-active" mId="all" @click="chooseItem($event)">不限</li>
            <li
              class="zujin-option"
              v-for="(moneyItem , index) in zujinlist"
              :key="index"
              :index="index"
              :mId="'m' + moneyItem.id"
              @click="chooseItem($event)"
            >{{moneyItem.name}}</li>
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
            <li class="ruler-item">0</li>
            <li class="ruler-item">1000</li>
            <li class="ruler-item">2000</li>
            <li class="ruler-item">3000</li>
            <li class="ruler-item">4000</li>
            <li class="ruler-item">不限</li>
          </ul>
        </div>
        <div class="tab-op tab-huxing" style="display:none" isOpen="0">
          <div class="huxing-options">
            <ul class="options-weizhi">
              <li
                class="options-weizhi-item weizhi-item-left weizhi-item-left-active"
                @click="selectAll($event )"
              >不限</li>
              <li
                class="options-weizhi-item weizhi-item-left"
                v-for="(huxing , index) in huxinlist"
                :key="index"
                :cId="'c' + huxing.id"
                :index="index"
                @click="selectHuxing($event)"
              >{{huxing.name}}</li>
            </ul>
            <ul class="options-weizhi options-weizhi-right">
              <li
                class="options-weizhi-item weizhi-item-right right-active"
                v-if="tHuXinglist.length"
                hId="all"
                @click="chooseItem($event)"
              >不限</li>
              <li
                class="options-weizhi-item weizhi-item-right"
                v-for="(hu , index) in tHuXinglist"
                :key="index"
                :hId="'h' + hu.id"
                @click="chooseItem($event)"
              >{{hu.name}}</li>
            </ul>
          </div>
        </div>
        <div class=" tab-op tab-gengduo" style="display:none" isOpen="0">
          <div class="gengduo-options gengduo-options-new">
            <div class="title-new">特色</div>
            <div class="content-new">
              <ul>
                <li
                  v-for="(item , index) in specialTSList"
                  :key="index"
                  :index="index"
                  :tId="'t' + item.id"
                >{{item.name}}</li>
              </ul>
            </div>
            <div class="title-new">保障</div>
            <div class="content-new">
              <ul>
                <li
                  v-for="(item , index) in specialBZList"
                  :key="index"
                  :index="index"
                  :tId="'t' + item.id"
                >{{item.name}}</li>
              </ul>
            </div>
            <div>
              <div class="btns-new">
                <div class="btn-new btn-new-clean">清空</div>
                <div class="btn-new btn-new-confirm">确认</div>
              </div>
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>

    <div data-v-4cd80081 class="shortcut-filter">
      <div data-v-4cd80081 class="shortcut-wrapper">
        <div data-v-4cd80081 class="shortcut">
          <span data-v-4cd80081 class="renzheng-icon" style="display: none;"></span>租金月付
        </div>
        <div data-v-4cd80081 class="shortcut">
          <span data-v-4cd80081 class="renzheng-icon" style="display: none;"></span>近地铁
        </div>
        <div data-v-4cd80081 class="shortcut">
          <span data-v-4cd80081 class="renzheng-icon" style="display: none;"></span>独卫
        </div>
        <div data-v-4cd80081 class="shortcut">
          <span data-v-4cd80081 class="renzheng-icon" style="display: none;"></span>朝南
        </div>
        <div data-v-4cd80081 class="shortcut">
          <span data-v-4cd80081 class="renzheng-icon" style="display: none;"></span>带阳台
        </div>
        <div data-v-4cd80081 class="shortcut">
          <span data-v-4cd80081 class="renzheng-icon" style="display: none;"></span>独立厨房
        </div>
      </div>
    </div>

    <div class="findHouse-container">
      <FindHouseList :page="page" :filterStr="filterInUrl ? filterInUrl + '/' : ''" :area="area ? area + '/' : ''"></FindHouseList>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import CityOption from "@/components/CityOption";
import FindHouseList from "@/components/find/FindHouseList";
import { mapState, mapActions } from "vuex";
import { get } from "@/utils/http.js";
import BScroll from "better-scroll";

let city = localStorage.getItem("city") || "北京";
let cityEn = globalCityList[city].cityEn;

export default {
  props: {
    page: {
      type: Number
    }
  },

  data() {
    return {
      filterInUrl: "",
      houseList: [],
      arealist: [],
      tArealist: [],
      huxinlist: [],
      tHuXinglist: [],
      linelist: [],
      tLinelist: [],
      nearlist: [],
      paixulist: [],
      speciallist: [],
      specialTSList: [],
      specialBZList: [],
      zujinlist: [],

      area: "",
      ditie: "",
      zujin: "",
      huxingC: this.filterInUrl || "",
      huxingh: "",
      gengduo: "",
      filterSum: ""
    };
  },

  components: {
    CityOption,
    FindHouseList
  },

  computed: {
    ...mapState(["cityOption", "currentCity"]),
    ...mapState(["findListPage", "findListPageIsAdd"])
  },

  methods: {
    ...mapActions(["cityShow"]),
    ...mapActions([
      "findListPageUpdate",
      "openFindPageAdd",
      "resetFindPageAdd"
    ]),

    //页数增加，参数传给HomeLike用以请求新数据
    findPageAdd() {
      this.findListPageUpdate(this.findListPage);
    },
    onCityOptionShow() {
      this.cityShow("showSelect");
    },
    selectAll(e) {
      $(e.currentTarget)
        .addClass(" weizhi-item-left-active")
        .siblings()
        .removeClass(" weizhi-item-left-active");
      this.tArealist = this.tHuXinglist = this.tLinelist = [];
    },
    chooseItem(e) {
      let $el = $(e.currentTarget);
      let area = $el.attr("en");
      let dId = $el.attr("dId");
      let mId = $el.attr("mId");
      let hId = $el.attr("hId");
      //区域
      if (area) {
        if (area === "all") {
          this.area = $(".weizhi-item-left-active").attr("en");
          let fArea = $(".weizhi-item-left-active").html();
          $('.tab[tab="weizhi"]').addClass("tab-text-active")
            .children(".tab-text").html(fArea)
            ;
        } else {
          this.area = $el.attr("en");
          let areaText = $el.html()
          $('.tab[tab="weizhi"]').addClass("tab-text-active")
            .children(".tab-text")
            .html(areaText);
        }
      }
      //地铁
      if (dId) {
        if (dId === "all") {
          this.ditie = $el
            .parent("ul")
            .siblings("ul")
            .children(".weizhi-item-left-active")
            .attr("dId");
          let fditie = $(".weizhi-item-left-active").html();
          $('.tab[tab="weizhi"]').addClass("tab-text-active")
            .children(".tab-text").html(fditie)
            ;
        } else {
          this.ditie = dId;
          let ditieText = $el.html()
          $('.tab[tab="weizhi"]').addClass("tab-text-active")
            .children(".tab-text")
            .html(ditieText);
        }
      }
      //租金
      if (mId) {
        if (mId === "all") {
          this.zujin = $el
            .siblings()
            .eq(0)
            .attr("mId");
          $('.tab[tab="weizhi"]')
            .children(".tab-text").html("")
            ;
        } else {
          this.zujin = mId;
        }
      }
      //户型（c、h）
      if (hId) {
        this.huxingC = $el
          .parent("ul")
          .siblings("ul")
          .children(".weizhi-item-left-active")
          .attr("cId");
        if (hId === "all") {
          this.huxing = "";
        } else {
          this.huxingh = hId;
        }
      }
      //url请求时候的params
      this.filterSum =
        this.ditie + this.zujin + this.huxingC + this.huxingh + this.gengduo;

      $(".tab-out").css({
          "z-index": "",
          top: ".88rem"
        });
        $('.tab-op').attr("isOpen", 0);
        $('#mask').css('display' , 'none');
        $('.tab-op').css("display", "none");
        $(`.tab`).removeClass(
          "tab-active"
      );
      console.log(this.filterSum)
      
      this.$router.push({ path: "/zhaofang/" + this.filterSum });
      this.filterInUrl = this.filterSum;
    },
    selectArea(e) {
      let en = e.currentTarget.getAttribute("en");
      let index = e.currentTarget.getAttribute("index");

      $(`.weizhi-item-left[en=${en}]`)
        .addClass(" weizhi-item-left-active")
        .siblings()
        .removeClass(" weizhi-item-left-active");

      this.filltArealist(index, en);
    },
    selectLine(e) {
      let index = e.currentTarget.getAttribute("index");

      $(`.weizhi-item-left[index=${index}]`)
        .addClass(" weizhi-item-left-active")
        .siblings()
        .removeClass(" weizhi-item-left-active");

      this.filltLinelist(index);
    },
    selectHuxing(e) {
      let index = e.currentTarget.getAttribute("index");

      $(`.weizhi-item-left[index=${index}]`)
        .addClass(" weizhi-item-left-active")
        .siblings()
        .removeClass(" weizhi-item-left-active");

      this.filltHuxing(index);
    },

    showOptionTab(e) {
      let tab = ".tab-" + e.currentTarget.getAttribute("tab");
      let $option = $(tab);
      // let onOff = $option.attr("isOpen");

      if ($option.attr("isOpen") == 0) {
        $option.siblings().attr("isOpen", 0);
        $(".tab-out").css({
          "z-index": 1009,
          top: "0"
        });

        $option.attr("isOpen", 1);
        console.log($option.siblings().attr("isOpen"), $option.attr("isOpen"));
        this.$parent.$refs.mask.style.display = "block";
        $(`.tab[tab=${e.currentTarget.getAttribute("tab")}]`)
          .addClass("tab-active")
          .siblings()
          .removeClass("tab-active");

        $option
          .css("display", "block")

          .siblings()
          .css("display", "none");
      } else {
        $(".tab-out").css({
          "z-index": "",
          top: ".88rem"
        });
        $option.attr("isOpen", 0);
        $option.siblings().attr("isOpen", 0);
        this.$parent.$refs.mask.style.display = "none";
        $option.css("display", "none");
        $(`.tab[tab=${e.currentTarget.getAttribute("tab")}]`).removeClass(
          "tab-active"
        );
        console.log($option.siblings().attr("isOpen"), $option.attr("isOpen"));
      }
    },
    weizhiSelectChild(e, nm) {
      $(`.weizhi-options`)
        .eq(0)
        .children(".options-weizhi")
        .children("li")
        .eq(0)
        .addClass("weizhi-item-left-active")
        .siblings()
        .removeClass("weizhi-item-left-active");
      $(`.weizhi-options`)
        .eq(1)
        .children(".options-weizhi")
        .children("li")
        .eq(0)
        .addClass("weizhi-item-left-active")
        .siblings()
        .removeClass("weizhi-item-left-active");
      (this.tArealist = []),
        (this.tLinelist = []),
        $(`.weizhi-options`)
          .children(".options-weizhi-left")
          .children("li")
          .eq(0)
          .addClass("weizhi-item-left-active")
          .siblings()
          .removeClass("weizhi-item-left-active");
      $(e.currentTarget)
        .children()
        .addClass("weizhi-tab-selected");
      $(e.currentTarget)
        .siblings()
        .children()
        .removeClass("weizhi-tab-selected");
      $(`.weizhi-options[tag=options-${nm}]`)
        .css("display", "flex")
        .siblings(".weizhi-options")
        .css("display", "none");
    }
  },

  watch: {
    $route(to, from) {
      this.$router.go(0);
    }
  },

  async mounted() {
    this.$parent.$refs.mask.style.display = "none";
    this.bScroll = new BScroll(".findHouse-container", {
      click: true,
      bounce: false,
      probeType: 2
    });
    this.bScroll.on("scrollEnd", async () => {
      let { y, maxScrollY } = this.bScroll;

      if (y <= maxScrollY && this.findListPageIsAdd) {
        this.findPageAdd();

        await this.$nextTick();
        this.bScroll.refresh();
      }
    });

    this.filterInUrl = this.$parent.filterP;
    if (this.filterInUrl === "c1" || this.filterInUrl === "c2") {
      $(".tab[tab=huxing]").addClass("tab-text-active");
      if (this.filterInUrl === "c1") {
        $(".tab[tab=huxing]")
          .children(".tab-text")
          .html("合租");
      } else {
        $(".tab[tab=huxing]")
          .children(".tab-text")
          .html("整租");
      }
    }
    let result = await get({
      url: "/api/" + cityEn + "/Menuapi/index"
    });

    let {
      arealist,
      huxinlist,
      linelist,
      nearlist,
      paixulist,
      speciallist,
      zujinlist
    } = result.result;

    this.arealist = arealist;
    this.huxinlist = huxinlist;
    this.linelist = linelist;
    this.nearlist = nearlist;
    this.paixulist = paixulist;
    this.speciallist = speciallist;
    this.zujinlist = zujinlist;

    var obj = this.speciallist.find(function(obj) {
      return obj.tag;
    });
    for (let i = 0; i < this.speciallist.length; i++) {
      if ("tag" in this.speciallist[i]) {
        this.specialBZList.push(this.speciallist[i]);
      } else {
        this.specialTSList.push(this.speciallist[i]);
      }
    }

    this.filltArealist = function(index, en) {
      this.tArealist = this.arealist[index].rightList;
    };
    this.filltLinelist = function(index) {
      this.tLinelist = this.linelist[index].rightList;
    };
    this.filltHuxing = function(index) {
      this.tHuXinglist = this.huxinlist[index].right;
    };
  },

  watch: {
    async $route(to, from) {
      // 当前路由
      console.log(this.filterSum, this.filterInUrl);
    },
    async currentCity(val) {
      let a = globalCityList[val].cityEn;
      let result = await get({
        url: "/api/" + a + "/Menuapi/index"
      });

      localStorage.setItem("city", val);
      let {
        arealist,
        huxinlist,
        linelist,
        nearlist,
        paixulist,
        speciallist,
        zujinlist
      } = result.result;

      this.arealist = arealist;
      this.huxinlist = huxinlist;
      this.linelist = linelist;
      this.nearlist = nearlist;
      this.paixulist = paixulist;
      this.speciallist = speciallist;
      this.zujinlist = zujinlist;
    }
  }
};
</script>

<style lang="stylus" scoped>
.find-house {
  -min-height: 110vh;
  height: 100%;
  display: flex;
  flex-direction: column;
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

.tab-out {
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 0.88rem;
}

.tab-wrapper {
  z-index: 101;
  width: 100%;
  height: 0.86rem;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.tab {
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

.tab-active {
  .tab-text {
    color: #ee3943;
  }

  .tab-icon {
    background: url('../../assets/img/activeArr.png') no-repeat 50%;
    background-size: 100% 100%;
  }
}

.tab-text-active {
  .tab-text {
    color: #ee3943;
  }
}

.weizhi-box {
  height: 0.9rem;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  div {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    line-height: 0.9rem;

    span {
      display: inline-block;
      height: 0.9rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 0.28rem;
    }
  }
}

span.weizhi-tab-selected {
  border-bottom: 4px solid #ee3943;
  color: #ee3943;
}

.weizhi-box {
  height: 0.9rem;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.weizhi-options {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 6.9rem;

  ul {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.options-weizhi {
  background-color: #f0f0f0;
  width: 50%;

  li {
    height: 0.9rem;
    line-height: 0.9rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #5a5c5d;
    font-size: 0.28rem;
  }
}

.weizhi-item-left {
  padding-left: 0.3rem;
}

li.weizhi-item-left-active {
  background-color: #fff;
  color: #ee3943;
}

.weizhi-item-right {
  margin-left: 0.3rem;
  border-bottom: 1px solid #ececec;
}

li.right-active {
  color: red;
}

.options-weizhi-right {
  background-color: #fff;
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

.huxing-options {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 5.4rem;
}

.gengduo-options {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 5.4rem;
  position: relative;

  ul {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
}

.gengduo-options-new {
  height: unset;
  padding: 0.3rem;
  padding-top: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 0.28rem;
  display: block;
  overflow-y: auto;

  .content-new {
    width: 100%;

    ul {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;

      li {
        color: #a6a4a5;
        background-color: #f8f8f8;
        width: 1.58rem;
        height: 0.68rem;
        text-align: center;
        line-height: 0.68rem;
        margin-bottom: 0.2rem;
        border-radius: 2px;
      }

      li.active {
        background-color: #f0f3f8;
        color: #a4cff3;
      }
    }
  }

  .btns-new {
    font-size: 0.28rem;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-top: 1px solid #ececec;
    margin: 0 -0.3rem;
    padding: 0 0.3rem;
    padding-top: 0.3rem;

    .btn-new {
      width: 1.6rem;
      height: 0.68rem;
      line-height: 0.68rem;
      text-align: center;
      border-radius: 2px;
    }

    .btn-new-clean {
      color: #5a5c5d;
      background-color: #f8f8f8;
    }

    .btn-new-confirm {
      color: #fff;
      background-color: #ee3943;
    }
  }
}

.gengduo-options-new .title-new {
  line-height: 0.6rem;
  margin-bottom: 0.3rem;
  color: #5a5c5d;
}

.shortcut-filter {
  padding-left: 0.3rem;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 0.3rem;
  padding-top: 0.9rem;
  border-bottom: 1px solid #ececec;

  .shortcut-wrapper {
    width: 100%;
    height: 0.56rem;
    overflow-x: auto;
    white-space: nowrap;

    .shortcut {
      display: inline-block;
      height: 100%;
      background-color: #f6f6f6;
      margin-right: 0.2rem;
      font-size: 0.26rem;
      line-height: 0.56rem;
      color: #a0a0a0;
      border-radius: 0.28rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 0.28rem;

      .renzheng-icon {
        width: 0.24rem;
        height: 0.28rem;
        display: inline-block;
        background-image: url('../../assets/img/renzheng.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 50%;
        vertical-align: middle;
        margin-right: 0.12rem;
      }
    }
  }
}

.findHouse-container {
  flex: 1;
  height: 1px;
  overflow: hidden;
}
</style>
