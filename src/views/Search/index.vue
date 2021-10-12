<template>
  <div class="search">
    <div class="searchInput">
      <van-icon name="arrow-left" />
      <input
        @input="handleInput"
        :placeholder="searchData.placeholder"
        autofocus
        class="tel"
      />
      <i @click="clearInp" class="iconfont icon-cuo"></i>
    </div>
    <ul class="searchSuggest">
      <li v-for="(item, index) in searchData.searchList" :key="index">
        <van-cell>
          <template #title>
            <i class="iconfont icon-sousuo"></i>&nbsp;
            <span class="custom-title">{{ item.keyword }}</span>
          </template>
        </van-cell>
      </li>
    </ul>
    <van-tabs v-model="searchData.active" animated>
      <van-tab title="热搜榜">
        <card :parentData="searchData.hotSearchList"></card>
      </van-tab>
      <van-tab title="视频榜"> 视频榜 </van-tab>
      <van-tab title="播客榜"> 博客榜 </van-tab>
    </van-tabs>
    <div class="musicRegion">
      <p>音乐专区</p>
      <div class="cardCon">
        <small-card
          v-for="(item, index) in pageData"
          :key="index"
          :title="item.title"
          :icon="item.icon"
          :content="item.content"
          :type="item.type"
        ></small-card>
        <p class="spreadRegion" @click="sprendMore">
          展示更多专区<van-icon name="arrow-down" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import { getDefaultWord, getSuggestion, hotSearch } from "api/search.js";
import Card from "components/Card";
import SmallCard from "components/SmallCard";

export default {
  name: "Search",
  components: { Card, SmallCard },
  setup() {
    const searchData = reactive({
      placeholder: "搜索建议",
      searchList: [],
      hotSearchList: [],
      active: 0,
      sprendData: false,
      smallCard: [
        {
          title: "歌手分类",
          icon: "icon-touxiang",
          content: "",
          type: "bgray",
        },
        {
          title: "曲风分类",
          icon: "icon-icon",
          content: "查查你的专属曲风偏好",
          type: "borangered",
        },
        {
          title: "影视原声专区",
          icon: "icon-shipin",
          content: "听歌追剧好时光",
          type: "sbrown",
        },
        {
          title: "电音专区",
          icon: "icon-ziyuan43",
          content: "全球热门电音嗨翻现场",
          type: "bblue",
        },
        {
          title: "说唱专区",
          icon: "icon-huaban",
          content: "说唱人物志Vol 6 Travis Scott",
          type: "borange",
        },
        {
          title: "摇滚专区",
          icon: "icon-mianxingyaoguntubiao",
          content: "国摇新生势力等你来听",
          type: "bpurple",
        },
        {
          title: "古典专区",
          icon: "icon-piano",
          content: "大咖来了Vol 2:古典VS流行",
          type: "bbrown",
        },
        {
          title: "ACG专区",
          icon: "icon-16gl-A",
          content: "测测你是ACG大粉头吗",
          type: "sred",
        },
        {
          title: "DJ专区",
          icon: "icon-chaoliunengguancedian",
          content: "潮流网络热歌一网打尽",
          type: "spurple",
        },
        {
          title: "亲自专区",
          icon: "icon-haizi",
          content: "陪伴宝贝快乐成长",
          type: "syellow",
        },
        {
          title: "中国特色专区",
          icon: "icon-ziyuan9",
          content: "了解中国传统音乐文化",
          type: "bred",
        },
        {
          title: "经典专区",
          icon: "icon-jingdianbiaoge",
          content: "致敬时代 留住经典",
          type: "sgload",
        },
      ],
    });
    getDefaultWord().then((res) => {
      searchData.placeholder = res.data.showKeyword;
    });
    hotSearch().then((res) => {
      searchData.hotSearchList = res.data;
    });
    const pageData = computed(() => {
      if (searchData.smallCard.length <= 6 || searchData.sprendData) {
        $(".spreadRegion").hide();
        return searchData.smallCard;
      } else {
        return searchData.smallCard.slice(0, 6);
      }
    });
    const sprendMore = () => {
      searchData.sprendData = true;
    };
    const clearInp = () => {
      $(".tel").val("");
      $(".icon-cuo").hide();
    };
    const handleInput = () => {
      if ($(".tel").val().length > 0) {
        $(".icon-cuo").show();
        getSuggestion($(".tel").val()).then((res) => {
          searchData.searchList = res.result.allMatch;
        });
      } else {
        $(".icon-cuo").hide();
        searchData.searchList = [];
      }
    };
    return {
      clearInp,
      handleInput,
      searchData,
      sprendMore,
      pageData,
    };
  },
};
</script>
<style lang="less" scoped>
.icon-sousuo {
  font-size: @small-icon;
}
.tel {
  border: none;
  border-bottom: 1px solid;
  margin-left: 15px;
  height: 30px;
  width: 85%;
  font-size: @norfont-size;
  caret-color: @theme-color;
}
.icon-cuo {
  display: none;
  font-size: 10px !important;
}
.musicRegion {
  margin-top: 15px;
  p {
    font-weight: 600;
  }
  .cardCon:extend(.flexCenter) {
    flex-wrap: wrap;
    .spreadRegion {
      margin: 0 auto;
      color: @gray-color;
    }
  }
}
</style>
