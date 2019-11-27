<template>
  <div class="notEmpty">
    <ul>
      <router-link
        :to="'/zhaofang/kw'+ item.titleStr"
        tag="li"
        v-for="(item,index) in searchList"
        :key="index"
      >
        <div class="level-icon">
          <img
            v-if="item.level== 3"
            src="//js.baletoo.cn/static/m/static/images/searchIcon/house.png"
            alt
          />
          <img
            v-if="item.level== 4"
            src="//js.baletoo.cn/static/m/static/images/searchIcon/subway.png"
            alt
          />
        </div>
        <div class="smart-title">
          <div>
            <span>{{item.title[0]}}</span>
            <span class="keyword">{{item.title[2]}}</span>
            <span>{{item.title[1]}}</span>
          </div>
          <div>
            <span>{{item.name[0]}}</span>
            <span class="keyword">{{item.name[2]}}</span>
            <span>{{item.name[1]}}</span>
          </div>
        </div>
        <div>{{item.numFound}}</div>
      </router-link>
    </ul>
    <!---->
    <ul></ul>
    <ul style="display: none;"></ul>
  </div>
</template>

<script>
let that;
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["searchList", "keyword"])
  },
  data() {
    return {};
  },
  watch: {
    searchList(newList) {
      if (!newList.length) {
      }
    }
  },

  beforeCreate() {
    that = this;
  }
};
</script>

<style lang='stylus'>
.level-icon {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;

  >img {
    width: 0.46rem;
  }
}

.keyword {
  color: #ee3943;
  margin: 0 0.1rem;
}
</style>
