<!--
 * @Author: MoeWang
 * @Date: 2019-11-25 14:11:06
 * @LastEditors: 
 * @LastEditTime: 2019-11-25 14:17:49
 * @FilePath: \baletu\src\components\search\SearchHistory.vue
 -->
<template>
  <div class="notEmpty">
    <div class="history-title">
      历史搜索
      <img src="//js.baletoo.cn/static/m/static/images/delete.png" alt />
    </div>

    <ul>
      <li>
        <div class="smart-title">
          <div>地</div>
          <div>全部户型</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang='stylus'>
.history-title {
  padding: 0 0.3rem;
  padding-top: 0.2rem;
  font-size: 0.3rem;
  color: #5a5c5d;
  font-weight: 700;

  >img {
    float: right;
    width: 0.4rem;
  }
}

.notEmpty {
  li {
    width: 92%;
    height: 1.3rem;
    line-height: 1.3rem;
    font-size: 0.3rem;
    color: #5a5c5d;
    padding: 0 0.3rem;
    border-bottom: 1px solid #ededed;
    display: flex;
  }
}

.smart-title {
  -webkit-box-flex: 6;
  -ms-flex: 6;
  flex: 6;
  margin-top: 0.3rem;

  >div {
    line-height: 0.3rem;

    &:nth-child(2) {
      margin-top: 0.16rem;
      color: #a0a0a0;
      font-size: 0.26rem;
    }
  }
}
</style>
