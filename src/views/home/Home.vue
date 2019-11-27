<template>
  <div class="home-wrap">
    <div class="banner">
      <a class="bannerLink" href="javascript:void(0)">
        <img src="https://cdn.baletoo.cn/Uploads/bnanerImageUrl/1/290/oss_5c2497f0c4f9f.jpg" />
      </a>

      <div class="tabCity" style>
        <div class="topSelect" @click="onCityOptionShow">
          <span class="city-select city-select-text">{{currentCity}}</span>
          <span class="city-select city-select-bg"></span>
        </div>
        <CityOption></CityOption>
      </div>

      <a href="javascript:void(0)" class="tomyIcon">
        <img src="//js.baletoo.cn/static/m/static/images/my.png" alt />
      </a>

      <router-link class="searchBox" to="/search" tag="div">
        <img src="//js.baletoo.cn/static/m/static/images/fangdajin.png" alt />
        <span>输入区域，小区搜索房源</span>
      </router-link>
    </div>

    <div class="quick-search" ref="searchIpt">
      <ul>
        <router-link to="/zhaofang/c2" tag="li">
          <a href="javascript:void(0)">
            <img src="//js.baletoo.cn/static/m/static/images/icon-zhengzu.png" alt />
            <div class="type-name">整租</div>
          </a>
        </router-link>
        <router-link to="/zhaofang/c1" tag="li">
          <a href="javascript:void(0)">
            <img src="//js.baletoo.cn/static/m/static/images/icon-hezu.png" alt />
            <div class="type-name">合租</div>
          </a>
        </router-link>
        <router-link to="/apartment" tag="li">
          <a href="javascript:void(0)">
            <img src="//js.baletoo.cn/static/m/static/images/icon-gongyu.png" alt />
            <div class="type-name">品牌公寓</div>
          </a>
        </router-link>
        <router-link to="/roommate" tag="li">
          <a href="javascript:void(0)">
            <img src="//js.baletoo.cn/static/m/static/images/icon-shiyou.png" alt />
            <div class="type-name">找室友</div>
          </a>
        </router-link>
      </ul>
    </div>

    <homeStudy></homeStudy>

    <homeLike :page="page"></homeLike>
  </div>
</template>

<script>
import CityOption from "@/components/CityOption.vue";
import HomeStudy from "@/components/home/HomeStudy.vue";
import HomeLike from "@/components/home/HomeLike.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "home",

  props: {
    page: {
      type: Number
    }
  },

  components: {
    CityOption,
    HomeStudy,
    HomeLike
  },

  computed: {
    ...mapState(["cityOption", "currentCity"])
  },

  methods: {
    ...mapActions(["cityShow"]),
    onCityOptionShow() {
      this.cityShow("showSelect");
    }
  },
  
};
</script>

<style lang="stylus" scoped>
.home-wrap {
  height: auto;
}

.banner {
  width: 100%;
  height: 5.15rem;
  position: relative;

  .bannerLink {
    dispaly: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }

  a {
    display: inline-block;
    padding: 0.3rem;
    width: 0.33rem;
    height: 0.4rem;
    position: absolute;
    top: 0.1rem;
    right: 0;
  }

  .tomyIcon {
    img {
      width: 0.33rem;
      height: 0.4rem;
    }
  }
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
  background: url('../../assets/img/arr.png') no-repeat 100%;
  background-size: 0.21rem, 0.14rem;
  padding-right: 0.2rem;

  .city-select {
    z-index: 99;
    color: #fff;
  }
}

.city-select-bg {
  z-index: 98;
  position: absolute;
  top: 0.03rem;
  right: 0;
}

.searchBox {
  background-color: #fff;
  margin: 0 9%;
  border-radius: 2px;
  width: 82%;
  position: absolute;
  top: 3.6rem;
  height: 0.82rem;
  line-height: 0.82rem;
  text-align: center;

  img {
    width: 0.27rem;
    height: 0.27rem;
    margin-right: 0.1rem;
    margin-top: -0.05rem;
  }

  span {
    font-size: 0.28rem;
    color: #999;
  }
}

.quick-search {
  z-index: 100;
  width: 100%;
  background-color: #fff;
  margin-bottom: 0.2rem;

  ul {
    width: 100%;
    padding: 0.4rem 0 0.3rem;
    overflow: hidden;
  }

  li {
    float: left;
    width: 25%;
    text-align: center;
    height: 100%;

    a {
      display: inline-block;
      height: 100%;
      position: relative;

      img {
        height: 0.9rem;
      }
    }

    .type-name {
      margin-top: 0.15rem;
      font-weight: 700;
    }
  }
}
</style>
