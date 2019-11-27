<!--
 * @Author: MoeWang
 * @Date: 2019-11-23 21:09:31
 * @LastEditors: 
 * @LastEditTime: 2019-11-25 14:18:45
 * @FilePath: \baletu\src\views\search\Search.vue
 -->
<template>
  <div class="search-container">
    <div class="search-wrapper">
      <SearchHeader></SearchHeader>
      <div class="empty">
        <SearchHistory v-if="historyList && historyList.length"></SearchHistory>

        <SearchHot></SearchHot>
      </div>
      <SearchResult></SearchResult>
    </div>
  </div>
</template>

<script>
import SearchHeader from "@/components/search/SearchHeader";
import SearchHistory from "@/components/search/SearchHistory";
import SearchHot from "@/components/search/SearchHot";
import SearchResult from "@/components/search/SearchResult";

import { mapState, mapActions } from "vuex";
import $ from "jquery";
export default {
  components: {
    SearchHeader,
    SearchHistory,
    SearchHot,
    SearchResult
  },
  data() {
    return {
      historyList: []
    };
  },
  computed: {
    ...mapState(["keyword", "searchList"])
  },
  methods: {
    ...mapActions(["updateKeyword", "updateSearchList"])
  },
  beforeMount() {
    this.historyList = localStorage.getItem("smartSearch_history");
  },
  watch: {
    keyword(newVal) {
      if (newVal != "") {
        $(".empty").css("display", "none");
      } else {
        $(".empty").css("display", "block");
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    this.updateSearchList([]);
    this.updateKeyword("");
    next();
  }
};
</script>

<style lang='stylus' scoped>
.search-wrapper {
  overflow: scroll;
}
</style>
