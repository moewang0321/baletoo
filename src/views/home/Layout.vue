<template>
  <div class="home-container">
    <Home :page="homeLikePage" ref="home"></Home>

    <div class="topBack" ref="topBar" :style="showBar" @click="backTop">
      <p>回到顶部</p>
    </div>
  </div>
</template>

<script>
import Home from "./Home";
import { mapState, mapActions } from "vuex";
import BScroll from "better-scroll";
export default {
  components: {
    Home
  },

  data() {
    return {
      showBar: "display:none"
    };
  },

  computed: {
    ...mapState(["homeLikePage", "homePageIsAdd", "currentCity"])
  },

  methods: {
    ...mapActions(["homeLikePageUpdate", "openPageAdd", "resetPageAdd"]),

    //页数增加，参数传给HomeLike用以请求新数据
    likePageAdd() {
      this.homeLikePageUpdate(this.homeLikePage);
    },

    getCurrentCity(cityName) {
      return globalCityList[cityName].cityEn;
    },
    backTop() {
      this.aaa();
    },

    showTopBar(attr) {
      this.showBar = attr;
    }
  },

  mounted() {
    let el = this.$refs.home.$refs.searchIpt;
    let cityEn = this.getCurrentCity(this.currentCity);
    localStorage.setItem("city", this.currentCity);
    let bScroll = new BScroll(".home-container", {
      click: true,
      bounce: false,
      probeType: 2
    });

    bScroll.on("scroll", async () => {
      let { y, maxScrollY } = bScroll;

      if (y <= maxScrollY && this.homePageIsAdd) {
        this.likePageAdd();

        await this.$nextTick();
        bScroll.refresh();
      }

      if (Math.abs(y) >= el.offsetTop + el.offsetHeight) {
        this.showTopBar("display:block");
      }
      if (Math.abs(y) < el.offsetTop + el.offsetHeight) {
        this.showTopBar("");
      }
    });

    this.aaa = function() {
      bScroll.scrollTo(0, 0, 500);
    };
  }
};
</script>

<style lang="stylus" scoped>
.home-container {
  height: 100%;
  overflow-y: hidden;
}
</style>
