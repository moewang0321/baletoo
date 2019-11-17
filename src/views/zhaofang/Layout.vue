<template>
  <div class="find-container">
    <findSkeleton></findSkeleton>
  </div>
</template>

<script>
import FindSkeleton from "@/views/zhaofang/FindSkeleton";
export default {
  beforeMount() {
    console.log(this.$route.params.id)
    this.filterP = this.$route.params.id;
    
  },

  components: {
    FindSkeleton
  },

  data() {
    return {
      filterChild: this.filterP
    };
  }
};
</script>

<style>
.find-container {
  overflow: scroll;
  height: 100%;
}
</style>
