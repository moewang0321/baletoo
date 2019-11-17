<template>
  <div class="house-card">
    <div class="base-info">
      <div class="main-photo">
        <img :src="house.house_main_image" alt />
        <!---->
        <div class="certified-logo" v-if="house.authState"></div>
        <div class="live-photo" v-if="house.is_true_photo">平台实拍 · {{house.house_photo_num}}</div>
        <div class="live-photo" v-if="!house.is_true_photo">房东提供 · {{house.house_photo_num}}</div>
        <!---->
        <!---->
      </div>
      <div class="detail">
        <p class="title">
          <!---->
          <span>{{house.title_name | fiTitle(0)}}</span>
          <!---->
          <!---->
          <span>{{house.subdistrict_name}}</span>
        </p>
        <p class="room-info">{{house.side_desc}}</p>
        <p class="labels">
          <!---->
          <!---->
          <!---->
          <span class="label" v-for="(label , index) in house.house_labels" :key="index">{{label}}</span>
        </p>
        <div class="trafic" v-if="house.s_subway_desc">
          <div class="icon"></div>
          <div class="text">{{house.s_subway_desc}}</div>
        </div>
      </div>
    </div>
    <div class="extra-info">
      <div class="landlord-info" >
        <div class="owner" v-if="house.lanName">
          <div class="logo">
            <img :src="house.lanPortrait" v-if="house.lanPortrait" />
          </div>
          <div class="name">{{house.lanName}}</div>
          <div class="tag"></div>
        </div>
        <div class="score_commont" v-if="house.comprehensive_score != '0.0' && house.lanName">
          <div class="score">
            评分：
            <b>{{house.comprehensive_score}}</b>
          </div>
          <div class="commont-number">{{house.lanNum}}条评论</div>
        </div>
        <em v-if="house.lanLable && house.lanName">“</em>
        <div class="one_commont" v-if="house.lanLable && house.lanName">{{house.lanLable}}</div>
        <em v-if="house.lanLable && house.lanName">”</em>
      </div>
      <!---->
      <div class="price-info">
        <div class="price">
          <span class="number">¥{{house.month_rent}}</span>/月
        </div>
        <!---->
        <!---->
        <!---->
        <div class="shuidianmeiwang-text">
          <span v-if="house.is_open_fee">水电煤网费涨就赔</span>
          <span>&nbsp;随时入住</span>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    house: {
      type: Object
    },
    index: Number
  },
  filters: {
    fiTitle(value, index) {
      let arr = value.split(" ");
      return arr[index];
    }
  }
};
</script>

<style lang="stylus" scoped>
.house-card {
  margin: 0 0.3rem;
  border-bottom: 1px solid #ececec;
  box-sizing: border-box;

  .base-info {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;

    .certified-logo {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-image: url('../assets/img/prom.png');
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
    }

    .main-photo {
      position: relative;
      margin: 0.4rem 0.3rem 0.4rem 0;
      width: 2.1rem;
      height: 1.6rem;
      border-radius: 0.08rem;
      overflow: hidden;
      background-image: url('//js.baletoo.cn/static/m/static/img/no_img.56c9aff.png');
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .live-photo {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.34rem;
      line-height: 0.34rem;
      font-size: 0.2rem;
      text-align: center;
      color: #fff;
      background-color: rgba(28, 28, 28, 0.4);
      border-bottom-left-radius: 0.08rem;
      border-bottom-right-radius: 0.08rem;
    }

    .detail {
      width: 4.2rem;

      .title {
        font-size: 0.34rem;
        color: #1c1c1c;
        font-weight: 700;
        margin-top: 0.2rem;
        line-height: 0.54rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        span {
          margin-right: 0.1rem;
        }
      }

      .room-info {
        color: #1c1c1c;
        font-size: 0.28rem;
        line-height: 0.48rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .labels {
        height: 0.38rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        margin-top: 0.1rem;

        .label {
          height: 100%;
          font-size: 0.22rem;
          line-height: 0.38rem;
          margin-right: 0.1rem;
          color: #9b9b9b;
          background-color: #f6f6f6;
          display: inline-block;
          box-sizing: border-box;
          padding: 0 0.02rem;
          border-radius: 0.02rem;
        }
      }

      .trafic {
        width: 100%;
        position: relative;

        .icon {
          position: absolute;
          left: 0;
          top: 0.18rem;
          display: inline-block;
          width: 0.2rem;
          height: 0.24rem;
          background-image: url('../assets/img/pos.png');
          background-size: 100% 100%;
          background-position: 50%;
          background-repeat: no-repeat;
        }

        .text {
          box-sizing: border-box;
          padding-left: 0.37rem;
          width: 100%;
          color: #9b9b9b;
          font-size: 0.24rem;
          line-height: 0.64rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .extra-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-bottom: 0.3rem;

    .landlord-info {
      .owner {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        .logo {
          width: 0.48rem;
          height: 0.48rem;
          background-image: url('../assets/img/headN.png');
          background-size: 100% 100%;
          background-position: 50%;
          background-repeat: no-repeat;
          border-radius: 50%;
          margin-right: 0.12rem;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .name {
          display: inline-block;
          color: #1c1c1c;
          font-size: 0.24rem;
          line-height: 0.48rem;
          margin-right: 0.12rem;
        }

        .tag {
          width: 0.44rem;
          height: 0.24rem;
          background-image: url('../assets/img/host.png');
          background-size: 100% 100%;
          background-position: 50%;
          background-repeat: no-repeat;
        }
      }

      .score_commont {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-top: 0.1rem;

        .score {
          color: #1c1c1c;
          font-size: 0.22rem;
          margin-right: 0.16rem;

          b {
            color: #3a3a3a;
            font-size: 0.26rem;
            font-weight: 700;
          }
        }

        .commont-number {
          color: #9b9b9b;
          font-size: 0.22rem;
        }
      }

      .one_commont {
        margin-top: 0.1rem;
        display: inline-block;
        max-width: 2.4rem;
        color: gray;
        font-size: 0.22rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .price-info {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;

      .price {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #ee3943;
        font-size: 0.24rem;

        .number {
          font-size: 0.32rem;
          font-weight: 700;
        }
      }

      .shuidianmeiwang-text {
        color: #f58f32;
        font-size: 0.28rem;
        font-weight: 700;
        margin-top: 0.1rem;
        max-width: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
