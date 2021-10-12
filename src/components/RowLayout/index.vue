<template>
  <div class="rowLayout">
    <row-title>
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #titleBtn>
        <slot name="titleBtn"></slot>
      </template>
    </row-title>
    <ul>
      <li class="listItem">
        <slot name="firstList"></slot>
      </li>
      <li class="listItem" v-for="(item, index) in fatherData" :key="index">
        <van-swipe :autoplay="3000" style="height:100%" vertical loop :show-indicators="false">
          <van-swipe-item
            v-for="resource in item.resources"
            :key="resource.resourceId"
          >
            <img :src="resource.uiElement.image.imageUrl" alt="" />
            <p class="name">{{ resource.uiElement.mainTitle.title }}</p>
            <slot name="play">
              <div class="bofang">
                <i class="iconfont icon-z"></i>
                <span>{{
                  $filters.formatPlayCount(resource.resourceExtInfo.playCount)
                }}</span>
              </div>
            </slot>
          </van-swipe-item>
        </van-swipe>
        <div>
          <slot name="bofang"></slot>
        </div>
        <div>
          <slot name="wangyi"></slot>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import RowTitle from "components/Title/RowTitle.vue";
export default {
  name: "NavBar",
  props: ["fatherData"],
  components: { RowTitle },
  setup() {},
};
</script>
<style lang="less" scoped>
.rowLayout {
  height: 200px;

  .top:extend(.flexCenter) {
    height: 50px;
    .title {
      font-size: 20px;
      font-weight: 600;
    }
  }
  ul:extend(.flexCenter) {
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
      .name:extend(.textHidden) {
        font-size: 5px;
      }
      img {
        border-radius: 10px;
        width: 90px;
        height: 100px;
      }
      .bofang:extend(.flexCenter) {
        position: absolute;
        top: 5px;
        right: 5px;
        color: #fff;
        .iconfont {
          font-size: 0.4rem;
        }
        span {
          display: block;
          font-size: 0.2rem;
        }
      }
    }
  }
}
</style>
