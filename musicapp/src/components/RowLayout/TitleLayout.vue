<template>
  <div class="titlelayout">
    
  </div>
</template>

<script>
import { getHomeInfo, getDragonBall, getCommentList } from "api/home.js";
import { computed, reactive } from "@vue/reactivity";

export default {
  name: "findNew",
  components: {
    NavBar,
  },
  setup() {
    const homeData = reactive({
      swiperData: [],
      dragonBall: [],
      commendList: [],
      commendSwiper: [],
    });
    getHomeInfo().then((res) => {
      homeData.swiperData = res.data.blocks[0].extInfo.banners;
    });
    getDragonBall().then((res) => {
      homeData.dragonBall = res.data;
    });
    getCommentList(9).then((res) => {
      console.log(res);
      res.result.forEach((item) => {
        if (item.playCount > 10000000) {
          item.playCount = (item.playCount / 100000000).toFixed(2) + "亿";
        } else if (item.playCount > 1000) {
          item.playCount = Math.round(item.playCount / 10000) + "万";
        } else {
          item.playCount = Math.round(item.playCount);
        }
      });
      homeData.commendSwiper = res.result.splice(0, 3);
      homeData.commendList = res.result;
    });

    return {
      homeData,
    };
  },
};
</script>
<style lang="less" scoped>
.searchInput {
  background: #fff;
  border-radius: 100px;
  color: #ccc;
  text-align: left;
  height: 100%;
  font-size: 14px;
  padding: 5px;
  .icon-sousuo {
    font-size: 14px !important;
  }
}
.van-swipe {
  margin-top: 60px;
}
.van-swipe-item {
  position: relative;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .title {
    position: absolute;
    right: 0;
    bottom: 5px;
    color: #fff;
    display: inline-block;
    border-end-end-radius: 10px;
  }
}
.dragonBall {
  width: 100%;
  background: #fff;
  display: flex;
  overflow: auto;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  &::-webkit-scrollbar {
    width: 0;
  }
  .iconContainer {
    background: pink;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.commendList {
  height: 150px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    .title {
      font-size: 20px;
      font-weight: 600;
    }
    button {
      border: 1px solid #666;
      background: #fff;
      border-radius: 10px;
      padding: 4px 7px;
      font-size: 5px;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }

    .listItem {
      width: 90px;
      height: 150px;
      margin-right: 15px;
      position: relative;
      display: block;
      &:last-child {
        margin-right: 0;
      }
      .van-swipe {
        height: 100%;
        margin-top: 0;
        .icon-xunhuan1 {
          position: absolute;
          top: 5px;
          right: 5px;
          color: #fff;
        }
      }
      .name {
        font-size: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      img {
        border-radius: 10px;
        width: 90px;
        height: 100px;
      }
      .bofang {
        position: absolute;
        display: flex;
        align-items: center;
        top: 5px;
        right: 5px;
        color: #fff;
        .iconfont {
          font-size: 0.1rem;
        }
        span {
          display: block;
          font-size: 0.1rem;
        }
      }
    }
  }
}
</style>
