<!--
 * @Author: MoeWang
 * @Date: 2019-11-23 21:21:48
 * @LastEditors: 
 * @LastEditTime: 2019-11-25 14:25:25
 * @FilePath: \baletu\src\components\search\SearchHeader.vue
 -->
<template>
  <div class="search_title">
    <img
      src="//js.baletoo.cn/static/m/static/images/empty.png"
      id="getEmpty"
      v-show="keyword!=''"
      @click="delKeyword"
    />
    <input
      class="search-input"
      type="text"
      autocomplete="off"
      autocorrect="off"
      id="search_input"
      placeholder="请输入商圈、地铁、小区"
      @input="inputKeyword"
    />
    <router-link class="search-cancel" to="/" tag="span">取消</router-link>
    <router-link
      :to="'/zhaofang/kw'+ keyword"
      tag="span"
      class="search_btn"
      style="display: none;"
    >搜索</router-link>

    <div class="search_pd"></div>
  </div>
</template>

<script>
import $ from "jquery";
import _ from "lodash";
import qs from "qs";
import { mapState, mapActions } from "vuex";
import { post } from "@/utils/http.js";
export default {
  //功能：搜索kw请求接口（节流）
  data() {
    return {
      cityEn: ""
    };
  },
  computed: {
    ...mapState(["keyword", "currentCity", "searchList"]) //vuex是单向流，不能用v-model双向绑定
  },
  methods: {
    ...mapActions(["updateKeyword", "updateSearchList"]),
    delKeyword() {
      $(".search-input").val("");
      this.updateKeyword("");
      this.updateSearchList([]);
    },
    inputKeyword: _.throttle(
      async function() {
        let keyword = $(".search-input").val();
        this.updateKeyword(keyword);
      },
      1000,
      {
        leading: false,
        trailing: true
      }
    )

    // () {
    //   let keyword = $(".search-input").val();
    //   this.updateKeyword(keyword);
    // }
  },
  watch: {
    async keyword(newVal) {
      if (newVal) {
        let params = {
          kw: newVal,
          channel: ""
        };

        let payload = qs.stringify(params);
        let result = await post({
          url: `/api/${this.cityEn}/Searchapi/smartSearch`,
          payload
        });
        this.updateSearchList(result.result.r);
        $(".search_btn").css("display", "inline-block");
        $(".search-cancel").css("display", "none");
      } else {
        $(".search-cancel").css("display", "inline-block");
        $(".search_btn").css("display", "none");
      }
    }
    // : _.throttle(
    //   async function(newVal) {
    //
    //   },
    //   5000,
    //   {
    //     leading: true,
    //     trailing: false
    //   }
    // )
  },
  beforeMount() {
    let city = localStorage.getItem("city") || "北京";
    this.cityEn = globalCityList[city].cityEn;
  }
};
</script>

<style lang='stylus' scoped>
.search_title {
  width: 100%;
  height: 1.08rem;
  background: #ee3943;
  text-align: center;

  img {
    position: absolute;
    top: 0.415rem;
    right: 1.6rem;
    float: right;
    height: 0.26rem;
    width: 0.26rem;
  }

  input {
    width: 5.4rem;
    height: 0.68rem;
    border: none;
    border-radius: 0.05rem;
    padding-left: 0.7rem;
    background-image: url('../../assets/img/search.png');
    background-position: 0.3rem;
    background-repeat: no-repeat;
    background-size: 0.24rem;
    margin-top: 0.2rem;
  }

  span {
    font-size: 0.28rem;
    color: #fff;
    margin-left: 0.1rem;
  }
}
</style>
