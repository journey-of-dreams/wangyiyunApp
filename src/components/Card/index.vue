<template>
  <div class="card">
    <ul>
      <li v-for="(item, index) in pageData" :key="index">
        <span :class="index < 3 ? 'activeSpan' : ''">{{ index + 1 }}</span>
        <span class="searchWord">{{ item.searchWord }}</span>
        <img class="iconImg" :src="item.iconUrl" alt="" />
      </li>
      <p class="spreadSearch" @click="sprendMore">
        展示更多热搜<van-icon name="arrow-down" />
      </p>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
  name: "Card",
  props: ["parentData"],
  setup(props) {
    let sprendData = ref(false);
    const sprendMore = () => {
      sprendData.value = true;
    };
    const pageData = computed(() => {
      if (props.parentData.length <= 10 || sprendData.value) {
        $(".spreadSearch").hide();
        return props.parentData;
      } else {
        return props.parentData.slice(0, 10);
      }
    });
    return {
      pageData,
      sprendMore,
    };
  },
};
</script>
<style lang="less" scoped>
.card {
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 90%;
  margin-top: 10px;
  margin-left: 50%;
  padding: 10px;
  transform: translateX(-50%);
  ul:extend(.flexCenter) {
    flex-wrap: wrap;
    li:extend(.flexCenter) {
      justify-content: flex-start;
      width: calc(50% - 20px);
      padding: 10px;
      height: 20px;
      .activeSpan {
        font-weight: 600;
        color: @theme-color;
      }
      .searchWord:extend(.textHidden) {
        padding-left: 10px;
        padding-right: 5px;
        max-width: 80%;
        overflow: hidden;
        -webkit-line-clamp: 1;
      }
      .iconImg {
        height: 100%;
      }
    }
    .spreadSearch {
      margin: 0 auto;
      color: @gray-color;
    }
  }
}
</style>
