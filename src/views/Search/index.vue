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
        <card :parentData='searchData.hotSearchList'></card>
      </van-tab>
      <van-tab title="视频榜"> 视频榜 </van-tab>
      <van-tab title="播客榜"> 博客榜 </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { getDefaultWord, getSuggestion, hotSearch } from "api/search.js";
import Card from "components/Card";
export default {
  name: "Search",
  components: { Card },
  setup() {
    const searchData = reactive({
      placeholder: "搜索建议",
      searchList: [],
      hotSearchList: [],
      active: 0,
    });
    getDefaultWord().then((res) => {
      searchData.placeholder = res.data.showKeyword;
    });
    hotSearch().then((res) => {
      searchData.hotSearchList = res.data;
    });
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
</style>
