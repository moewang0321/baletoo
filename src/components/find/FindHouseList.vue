<template>
  <div class="find-house-wrapper">
    <HouseItem
      v-for="(house , index) in houseList"
      :key="house.house_id"
      :house="house"
      :index="index"
    ></HouseItem>
  </div>
</template>

<script>
import HouseItem from "@/components/HouseItem";
import { get } from "@/utils/http.js";
let city = localStorage.getItem("city") || "北京";
let cityEn = globalCityList[city].cityEn;

export default {
  data() {
    return {
      filterString: "",
      houseList: []
    };
  },

  components: {
    HouseItem
  },

  async mounted() {

    this.filterString = this.$route.params.id

    let result = await get({
      url:
        "/api/" +
        cityEn +
        "/Zhaofangapi/index?param=/" +
        this.filterString +
        '/&p=1&from=10&channel=&public_parameters=%7B"blt_user_id":"0",param=&p=1&from=10&channel=&public_parameters=%7B"blt_user_id":"0","platformType":"H5","new_project_name":"2","project_name":"租客H5","channel":"H5","open_id":"0","is_login":false%7D&preset_parameters=%7B"$screen_height":667,"$screen_width":375,"$lib":"js","$lib_version":"1.14.2","$latest_referrer":"","$latest_referrer_host":"","$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_utm_source":"baidu","$latest_utm_medium":"cpc","$latest_utm_campaign":"WAP行业词","$latest_utm_content":"WAP租房","$latest_utm_term":"租房+网","$referrer":"","$referrer_host":"m.baletu.com","$url":"https:%2F%2Fm.baletu.com%2Fbj%2Fzhaofang","$url_path":"%2Fbj%2Fzhaofang","$title":"北京朝阳出租房_北京朝阳出租房网_北京朝阳出租房信息-北京巴乐兔租房","_distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115","distinct_id":"16e637c1ac11eb-045532c2e36724-4c483e12-230400-16e637c1ac2115"%7D&entrance=4&kill_crawler=80f60479f4b97af42f01260508b7fa5f&city_id=238&from_fdapp=0'
    });

    this.houseList = result.result.house_list;
  }
};
</script>

<style>
</style>
