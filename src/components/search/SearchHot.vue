<!--
 * @Author: MoeWang
 * @Date: 2019-11-25 14:16:55
 * @LastEditors: 
 * @LastEditTime: 2019-11-25 14:26:29
 * @FilePath: \baletu\src\components\search\SearchHot.vue
 -->
<template>
  <div class="hotSearch">
    <div class="hotSearch_title">热门搜索</div>
    <div class="search_list">
      <ul>
        <router-link
          tag="li"
          :to="'/zhaofang/kw' + item.title"
          v-for="(item,index) in hotList"
          :key="index"
        >{{item.title}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState, mapActions } from "vuex";
import { get } from "@/utils/http.js";

export default {
  data() {
    return {
      hotList: []
    };
  },
  computed: {
    ...mapState(["currentCity"])
  },
  async beforeMount() {
    let city = localStorage.getItem("city") || "北京";
    let cityEn = globalCityList[city].cityEn;
    let result = await get({
      url: `/api/${cityEn}/Searchapi/theNewView`
    });

    this.hotList = result.result.hot_list;
  }
};
</script>

<style lang='stylus'>
.hotSearch {
  padding: 0.5rem 0 0.4rem 0.4rem;
}

.hotSearch_title {
  font-size: 0.3rem;
  color: #5a5c5d;
  margin-bottom: 0.3rem;
  font-weight: 700;
}

.search_list li {
  width: auto;
  height: 0.66rem;
  background: #f8f8f8;
  border-radius: 0.05rem;
  line-height: 0.66rem;
  text-align: center;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  display: inline-block;
  padding: 0 0.2rem;
}
</style>
