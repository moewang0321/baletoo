<template>
  <div class="find-container">
    <findSkeleton :page="findListPage"></findSkeleton>

    <div id="mask" style="display:none" ref="mask"></div>
  </div>
</template>

<script>
import $ from "jquery";
import FindSkeleton from "@/views/zhaofang/FindSkeleton";
import { mapState, mapActions } from "vuex";

export default {
  beforeMount() {
    if (this.$route.params.id) {
      this.filterP = this.$route.params.id;
    } else {
      this.filterP = "";
    }
    console.log(this.filterP)
    
  },

  components: {
    FindSkeleton
  },

  data() {
    return {
      filterChild: this.filterP
    };
  },
  computed: {
    ...mapState(["findListPage", "findListPageIsAdd", "currentCity"])
  },
  methods: {
    ...mapActions([
      "findListPageUpdate",
      "openFindPageAdd",
      "resetFindPageAdd"
    ]),

    //页数增加，参数传给HomeLike用以请求新数据
    findPageAdd() {
      this.findListPageUpdate(this.findListPage);
    }
  },
  mounted() {
    $("#mask").on("click", function() {});
  }
};
</script>

<style>
.find-container {
  overflow: hidden;
  height: 100%;
}
</style>
