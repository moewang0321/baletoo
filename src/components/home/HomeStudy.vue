<template>
  <div class="study">
    <div class="study-title">
      <span>巴乐兔研究院</span>
      <!---->
    </div>
    <ul>
      <router-link class to="/zhaofang/t5" tag="li">
        <div class="wrapper">
          <img src="//js.baletoo.cn/Public/indextheme/newtheme/newtheme/pic1.png" alt />
          <div class="title">地铁周边</div>
          <div class="des">地铁站附近2公里房源</div>
        </div>
      </router-link>
      <router-link class="padding-l-30" to="/zhaofang/m1800,3000" tag="li">
        <div class="wrapper">
          <img src="//js.baletoo.cn/Public/indextheme/newtheme/newtheme/pic2.png" alt />
          <div class="title">品质好房</div>
          <div class="des">2000元左右，理想生活</div>
        </div>
      </router-link>
      <router-link class to="/zhaofang/t1" tag="li">
        <div class="wrapper">
          <img src="//js.baletoo.cn/Public/indextheme/newtheme/newtheme/pic33.jpg" alt />
          <div class="title">轻松月付</div>
          <div class="des">从此告别押一付三</div>
        </div>
      </router-link>
      <router-link class="padding-l-30" to="/zhaofang/m1" tag="li">
        <div class="wrapper">
          <img src="//js.baletoo.cn/Public/indextheme/newtheme/newtheme/pic55.jpg" alt />
          <div class="title">精选单间</div>
          <div class="des">1500以下，精致合租</div>
        </div>
      </router-link>
    </ul>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.padding-l-30 {
  padding-left: 0.3rem;
}

.study {
  width: 100%;
  background: #fff;
  margin-top: 0.3rem;

  ul {
    padding: 0 0.3rem;

    li {
      width: 47.5%;
      float: left;
      border-bottom: 1px solid #f0f0f0;
      margin-bottom: 0.32rem;
    }
  }
}

.study-title {
  height: 1.12rem;
  line-height: 1.12rem;
  font-weight: 700;
  padding: 0 0.3rem;

  span {
    font-size: 0.32rem;
    color: #5a5c5d;
    font-family: PingFangSC-Medium;
  }
}
</style>
