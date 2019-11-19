<template>
  <div class="find-house-wrapper">
    <Skeleton ref="findSk"></Skeleton>

    <HouseItem
      v-for="(house , index) in houseList"
      :key="house.house_id"
      :house="house"
      :index="index"
    ></HouseItem>
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
import $ from "jquery";
import HouseItem from "@/components/HouseItem";
import Skeleton from "@/components/skeleton/Skeleton";
import { mapState, mapActions } from "vuex";
import { get } from "@/utils/http.js";
let city = localStorage.getItem("city") || "北京";
let cityEn = globalCityList[city].cityEn;

export default {
  props: {
    page: {
      type: Number
    },
    filterStr: {
      type: String
    },
    area: {
      type: String
    }
  },

  data() {
    return {
      filterString: this.$parent.filterInUrl,
      houseList: [],
      isShowSk: 0,
      isFirstIn: true
    };
  },

  components: {
    HouseItem,
    Skeleton
  },
  computed: {
    ...mapState(["cityOption", "currentCity", "findListPageIsAdd"])
  },
  methods: {
    ...mapActions(["openFindPageAdd", "resetFindPageAdd"])
  },

  async mounted() {
    if (!this.filterString) {
      this.filterString = this.$route.params.id + '/' || "";
    }
    if (!this.area) {
      this.area = "";
    }
    if (this.isFirstIn) {
      let result = await get({
        url:
          "/api/" +
          cityEn +
          "/Zhaofangapi/index?param=/" +
          this.area +
          this.filterString +
          `&p=${this._props.page}&from=10&channel=&public_parameters=%7B"blt_user_id":"0",param=&p=1&from=10&channel=&public_parameters=%7B"blt_user_id":"0","platformType":"H5","new_project_name":"2","project_name":"租客H5","channel":"H5","open_id":"0","is_login":false%7D&preset_parameters=%7B"$screen_height":667,"$screen_width":375,"$lib":"js","$lib_version":"1.14.2","$latest_referrer":"","$latest_referrer_host":"","$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_utm_source":"baidu","$latest_utm_medium":"cpc","$latest_utm_campaign":"WAP行业词","$latest_utm_content":"WAP租房","$latest_utm_term":"租房+网","$referrer":"","$referrer_host":"m.baletu.com","$url":"https:%2F%2Fm.baletu.com%2Fbj%2Fzhaofang","$url_path":"%2Fbj%2Fzhaofang","$title":"北京朝阳出租房_北京朝阳出租房网_北京朝阳出租房信息-北京巴乐兔租房","_distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115","distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115"%7D&entrance=4&kill_crawler=80f60479f4b97af42f01260508b7fa5f&city_id=238&from_fdapp=0`
      });
      if (result) {
        this.$refs.findSk.isShowSk = 1;
        this.$refs.findSk.$el.style.display = "none";
        // this.$refs.findSk.style.display = "none";
      }
      this.houseList = result.result.house_list;
      this.openFindPageAdd();
      this, (isFirstIn = false);
      if (result.code) {
        $(".loading").css("display", "none");
      }
    }
  },

  watch: {
    async filterStr(newVal) {
      this.$refs.findSk.isShowSk = 0;
      this.$refs.findSk.$el.style.display = "fixed";
      this.filterString = newVal;
      let result = await get({
        url:
          "/api/" +
          cityEn +
          "/Zhaofangapi/index?param=/" +
          this.area +
          this.filterString +
          `&p=1&from=10&channel=&public_parameters=%7B"blt_user_id":"0",param=&p=1&from=10&channel=&public_parameters=%7B"blt_user_id":"0","platformType":"H5","new_project_name":"2","project_name":"租客H5","channel":"H5","open_id":"0","is_login":false%7D&preset_parameters=%7B"$screen_height":667,"$screen_width":375,"$lib":"js","$lib_version":"1.14.2","$latest_referrer":"","$latest_referrer_host":"","$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_utm_source":"baidu","$latest_utm_medium":"cpc","$latest_utm_campaign":"WAP行业词","$latest_utm_content":"WAP租房","$latest_utm_term":"租房+网","$referrer":"","$referrer_host":"m.baletu.com","$url":"https:%2F%2Fm.baletu.com%2Fbj%2Fzhaofang","$url_path":"%2Fbj%2Fzhaofang","$title":"北京朝阳出租房_北京朝阳出租房网_北京朝阳出租房信息-北京巴乐兔租房","_distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115","distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115"%7D&entrance=4&kill_crawler=80f60479f4b97af42f01260508b7fa5f&city_id=238&from_fdapp=0`
      });
      if (result) {
        this.$refs.findSk.isShowSk = 1;
        this.$refs.findSk.$el.style.display = "none";
        // this.$refs.findSk.style.display = "none";
      }
      this.houseList = result.result.house_list;
    },
    async area(newVal) {
      console.log(newVal);

      this.$refs.findSk.isShowSk = 0;
      this.$refs.findSk.$el.style.display = "fixed";
      this.area = newVal;
      let result = await get({
        url:
          "/api/" +
          cityEn +
          "/Zhaofangapi/index?param=/" +
          this.area +
          this.filterString +
          `&p=1&from=10&channel=&public_parameters=%7B"blt_user_id":"0",param=&p=1&from=10&channel=&public_parameters=%7B"blt_user_id":"0","platformType":"H5","new_project_name":"2","project_name":"租客H5","channel":"H5","open_id":"0","is_login":false%7D&preset_parameters=%7B"$screen_height":667,"$screen_width":375,"$lib":"js","$lib_version":"1.14.2","$latest_referrer":"","$latest_referrer_host":"","$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_utm_source":"baidu","$latest_utm_medium":"cpc","$latest_utm_campaign":"WAP行业词","$latest_utm_content":"WAP租房","$latest_utm_term":"租房+网","$referrer":"","$referrer_host":"m.baletu.com","$url":"https:%2F%2Fm.baletu.com%2Fbj%2Fzhaofang","$url_path":"%2Fbj%2Fzhaofang","$title":"北京朝阳出租房_北京朝阳出租房网_北京朝阳出租房信息-北京巴乐兔租房","_distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115","distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115"%7D&entrance=4&kill_crawler=80f60479f4b97af42f01260508b7fa5f&city_id=238&from_fdapp=0`
      });
      if (result) {
        this.$refs.findSk.isShowSk = 1;
        this.$refs.findSk.$el.style.display = "none";
        // this.$refs.findSk.style.display = "none";
      }
      this.houseList = result.result.house_list;
    },
    async page(newVal) {
      if (this.findListPageIsAdd) {
        this.resetFindPageAdd();
        let result = await get({
          url:
            "/api/" +
            cityEn +
            "/Zhaofangapi/index?param=/" +
            this.area +
            this.filterString +
            `&p=${newVal}&channel=&from_fdapp=0&entrance=4&public_parameters={"blt_user_id":"0","platformType":"H5","new_project_name":"2","project_name":"租客H5","channel":"H5","open_id":"0","is_login":false}&preset_parameters={"$screen_height":667,"$screen_width":375,"$lib":"js","$lib_version":"1.14.2","$latest_referrer":"","$latest_referrer_host":"","$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_utm_source":"baidu","$latest_utm_medium":"cpc","$latest_utm_campaign":"WAP行业词","$latest_utm_content":"WAP租房","$latest_utm_term":"租房 网","$referrer":"https://m.baletu.com/bj/zhaofang/c2","$referrer_host":"m.baletu.com","$url":"https://m.baletu.com/sh/zhaofang/c2","$url_path":"/sh/zhaofang/c2","$title":"上海租房_上海租房网_上海租房信息_上海房屋出租-上海巴乐兔租房","_distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115","distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115"}&eq_house_ids=&city_id=1&kill_crawler=0c2b9f7b11b905f0f90b6975f72bd2bb`
        });

        if (result) {
          this.houseList = [...this.houseList, ...result.result.house_list];

          this.openFindPageAdd();
        }
      }
    },
    async currentCity(val) {
      console.log(val);

      let cityEnNew = globalCityList[val].cityEn;
      this.$refs.findSk.isShowSk = 0;
      this.$refs.findSk.$el.style.display = "block";
      let result = await get({
        url:
          "/api/" +
          cityEnNew +
          "/Zhaofangapi/index?param=/" +
          this.filterString +
          '/&p=1&from=10&channel=&public_parameters=%7B"blt_user_id":"0",param=&p=1&from=10&channel=&public_parameters=%7B"blt_user_id":"0","platformType":"H5","new_project_name":"2","project_name":"租客H5","channel":"H5","open_id":"0","is_login":false%7D&preset_parameters=%7B"$screen_height":667,"$screen_width":375,"$lib":"js","$lib_version":"1.14.2","$latest_referrer":"","$latest_referrer_host":"","$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_utm_source":"baidu","$latest_utm_medium":"cpc","$latest_utm_campaign":"WAP行业词","$latest_utm_content":"WAP租房","$latest_utm_term":"租房+网","$referrer":"","$referrer_host":"m.baletu.com","$url":"https:%2F%2Fm.baletu.com%2Fbj%2Fzhaofang","$url_path":"%2Fbj%2Fzhaofang","$title":"北京朝阳出租房_北京朝阳出租房网_北京朝阳出租房信息-北京巴乐兔租房","_distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115","distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115"%7D&entrance=4&kill_crawler=80f60479f4b97af42f01260508b7fa5f&city_id=238&from_fdapp=0'
      });
      if (result) {
        this.$refs.findSk.isShowSk = 1;
        this.$refs.findSk.$el.style.display = "none";
        // this.$refs.findSk.style.display = "none";
      }
      localStorage.setItem("city", val);
      this.houseList = result.result.house_list;
      console.log(this.houseList);
      // this.$forceUpdate();z
    }
  }
};
</script>

<style>
</style>
