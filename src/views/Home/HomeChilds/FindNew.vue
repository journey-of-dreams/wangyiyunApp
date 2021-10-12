<template>
  <div class="findNew">
    <nav-bar>
      <template #center>
        <router-link to="/search">
          <div class="searchInput">
            <i class="iconfont icon-sousuo"></i>
            <van-swipe
              class="searchSwiper"
              vertical
              :autoplay="3000"
              :show-indicators="false"
            >
              <van-swipe-item
                v-for="(item, index) in homeData.searchKeyWord"
                :key="index"
                >{{ item }}</van-swipe-item
              >
            </van-swipe>
          </div>
        </router-link>
      </template>
      <template #right>
        <i class="iconfont icon-tianchongxing-"></i>
      </template>
    </nav-bar>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in homeData.banners" :key="item.bannerId">
        <img :src="item.imageUrl" />
        <div class="title" :style="{ background: item.titleColor }">
          {{ item.typeTitle }}
        </div>
      </van-swipe-item>
    </van-swipe>
    <ul class="dragonBall">
      <li class="dragonList" v-for="item in homeData.dragonBall" :key="item.id">
        <div class="iconContainer">
          <img :src="item.iconUrl" alt="" />
        </div>
        <p>{{ item.name }}</p>
      </li>
    </ul>
    <div class="commendList">
      <row-layout :fatherData="homeData.commendList.resources">
        <template #title>
          {{ homeData.commendList.title }}
        </template>
        <template #titleBtn> {{ homeData.commendList.btn }}> </template>
      </row-layout>
    </div>
    <div class="styleAlign">
      <column-layout :fatherTitle="homeData.styleAlign.title">
        <template #button>
          <i class="iconfont icon-play"></i>
          {{ homeData.styleAlign.btn }}
        </template>
        <column-item
          :fatherContent="homeData.styleAlign.resources"
        ></column-item>
      </column-layout>
    </div>
    <div class="radarPlaylist">
      <row-layout :fatherData="homeData.radarList.resources">
        <template #title>
          {{ homeData.radarList.title }}
        </template>
        <template #titleBtn>
          {{ homeData.radarList.btn }}
        </template>
      </row-layout>
    </div>

    <div class="scenePlaylist">
      <row-layout :fatherData="homeData.scenePlaylist.resources">
        <template #title>
          {{ homeData.scenePlaylist.title }}
        </template>
        <template #titleBtn>
          {{ homeData.scenePlaylist.btn }}
        </template>
      </row-layout>
    </div>
    <div class="videoCollection">
      <row-layout :fatherData="homeData.videoCollection.resources">
        <template #title>
          {{ homeData.videoCollection.title }}
        </template>
        <template #titleBtn>
          {{ homeData.videoCollection.btn }}
        </template>
      </row-layout>
    </div>

    <!-- <div class="liveStream">
      <row-layout :fatherData="homeData.liveStream.resources">
        <template #title>
          {{ homeData.liveStream.title }}
        </template>
        <template #titleBtn>
          {{ homeData.liveStream.btn }}
        </template>
      </row-layout>
    </div> -->
  </div>
</template>

<script>
import NavBar from "components/Navbar";
import RowLayout from "components/RowLayout";
import ColumnLayout from "components/ColumnLayout";
import ColumnItem from "components/ColumnLayout/ColumnItem.vue";

import {
  getHomeInfo,
  getDragonBall,
  getBanner,
} from "api/home.js";
import {getDefaultWord} from "api/search.js"
import { reactive } from "@vue/reactivity";

export default {
  name: "findNew",
  components: {
    NavBar,
    RowLayout,
    ColumnLayout,
    ColumnItem,
  },
  setup() {
    const homeData = reactive({
      searchKeyWord: [],
      banners: [],
      dragonBall: [],
      commendList: [],
      styleAlign: [],
      findSongs: [],
      musicVideo: [],
      radarList: [],
      scenePlaylist: [],
      videoCollection: [],
      liveStream: [],
    });
    // block[2]是新歌、新碟、新专辑；block[3]是推荐一下新歌赚双倍积分；block[4]是音乐日历；block[5]下的creatives对应四个大标题，用于刷新切换的，uielement对应当前所有歌曲，creatives下的resources下的uiElement下的mainTitle对应歌曲标题，uiment下可能有subTitle对应歌曲子标题，；block[6]是雷达歌单；block[7]是雷达歌曲；block[8]是专属场景歌单；block[9]是热门博客；block[10]是24小时博客；block[11]是视频合辑；
    getHomeInfo().then((res) => {
      // 推荐歌单
      homeData.commendList.title = res.data.blocks[1].uiElement.subTitle.title;
      homeData.commendList.resources = res.data.blocks[1].creatives;
      homeData.commendList.btn = res.data.blocks[1].uiElement.button.text;
      // 风格排列
      homeData.styleAlign.title = [res.data.blocks[2].uiElement.subTitle.title];
      homeData.styleAlign.resources = res.data.blocks[2].creatives;
      homeData.styleAlign.btn = res.data.blocks[2].uiElement.button.text;
      // 精选音乐视频
      //  热门博客
      //  新歌新碟专辑

      // 音乐日历
      homeData.findSongs.title = [res.data.blocks[4].uiElement.subTitle.title];
      homeData.findSongs.btn = res.data.blocks[4].uiElement.button.text;
      homeData.findSongs.resources = res.data.blocks[4].creatives;

      homeData.radarList.title = res.data.blocks[6].uiElement.subTitle.title;
      homeData.radarList.resources = res.data.blocks[6].creatives;
      homeData.radarList.btn = res.data.blocks[6].uiElement.button.text;

      homeData.scenePlaylist.title =
        res.data.blocks[7].uiElement.subTitle.title;
      homeData.scenePlaylist.resources = res.data.blocks[7].creatives;
      homeData.scenePlaylist.btn = res.data.blocks[7].uiElement.button.text;

      homeData.videoCollection.title =
        res.data.blocks[10].uiElement.subTitle.title;
      homeData.videoCollection.resources = res.data.blocks[10].creatives;
      homeData.videoCollection.btn = res.data.blocks[10].uiElement.button.text;

      // homeData.liveStream.title = res.data.blocks[2].uiElement.subTitle.title;
      //   homeData.liveStream.resources = res.data.blocks[2].creatives;
      //   homeData.liveStream.btn = res.data.blocks[2].uiElement.button.text;

      console.log(homeData.commendList.btn);
      console.log(2003 % 1000);
    });
    getDefaultWord().then((res) => {
      homeData.searchKeyWord = [
        res.data.showKeyword,
        "Dj 最近很火哦",
        "Nothing 最近很火哦",
      ];
      console.log(res);
    });
    getBanner().then((res) => {
      homeData.banners = res.banners;
    });
    getDragonBall().then((res) => {
      homeData.dragonBall = res.data;
    });

    return {
      homeData,
    };
  },
};
</script>
<style lang="less" scoped>
.textHidden {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.icon-play {
  font-size: @small-icon;
}
.icon-xunhuan {
  font-size: @small-icon;
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
.searchInput:extend(.flexCenter) {
  background: #fff;
  border-radius: 100px;
  color: #ccc;
  text-align: left;
  height: 40px;
  font-size: 14px;
  padding: 5px;
  .icon-sousuo {
    font-size: 14px !important;
  }
  .searchSwiper {
    height: 100%;
    margin: 0;
    width: calc(100% - 40px);
    line-height: 40px;
  }
}

.dragonBall:extend(.flexCenter) {
  width: 100%;
  background: #fff;
  overflow: auto;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  &::-webkit-scrollbar {
    width: 0;
  }
  .dragonList {
    margin-right: 20px;
    .iconContainer {
      background: pink;
      border-radius: 50%;
      width: 48px;
      height: 48px;

      &:last-child {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      font-size: 10px;
      height: 15px;
      text-align: center;
    }
  }
}
</style>
