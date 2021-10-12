<template>
  <ul class="itemContainer" v-for="(item, index) in fatherContent" :key="index">
    <li
      class="columnItem"
      v-for="(item2, index2) in item.resources"
      :key="index2"
    >
      <div class="imgBox">
        <img :src="item2.uiElement.image.imageUrl" alt="" />
        <slot name="play"><i class="iconfont icon-play"></i></slot>
      </div>
      <div class="content">
        <div class="top">
          <p class="mainTitle">
            {{ item2.uiElement.mainTitle.title }}
          </p>

          <span
            class="artists"
            v-for="(item3, index3) in item2.resourceExtInfo.artists"
            :key="index3"
            >{{ item3.name }}</span
          >
        </div>
        <div class="bottom">
          <van-tag
            v-if="item2.uiElement.subTitle"
            v-show="item2.uiElement.subTitle.titleType == 'songRcmdFromComment'"
            plain
            type="primary"
            round
            text-color="#e70012"
            >独家</van-tag
          >
          <p
            class="subTitle"
            v-if="item2.uiElement.subTitle"
            style="color: #f8cc65"
          >
            {{ item2.uiElement.subTitle.title }}
          </p>
        </div>
      </div>
      <slot name="bofang">
        <i class="iconfont icon-play-square"></i>
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ColumnItem",
  components: {},
  props: ["fatherContent"],
  setup() {},
};
</script>
<style lang="less" scoped>
.itemContainer {
  height: 100%;
  margin-right: 30px;

  .columnItem:extend(.flexCenter) {
    width: 320px;
    height: 100px;
    justify-content: flex-start;

    .imgBox {
      width: 60px;
      height: 60px;
      border-radius: 10px;
      position: relative;
      img {
        border-radius: 10px;
        height: 100%;
        height: 100%;
      }
      .icon-play {
        position: absolute;
        font-size: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .content {
      margin-left: 8px;
      flex: 1;

      .top:extend(.flexCenter) {
        justify-content: flex-start;

        .mainTitle:extend(.flexCenter, .textHidden) {
          max-width: 150px;
          -webkit-line-clamp: 1;
          font-size: 16px;
          margin-right: 4px;
        }
        .artists:extend(.textHidden) {
          -webkit-line-clamp: 1;
          color: @gray-color;
          font-size: @smafont-size;
          &::after {
            content: "/";
          }
          &:first-of-type::before {
            content: "-";
          }
          &:last-of-type::after {
            content: "";
          }
        }
      }
      .bottom:extend(.flexCenter) {
        margin: 8px 0;
        color: @gray-color;
        justify-content: flex-start;
        .subTitle:extend(.textHidden) {
          max-width: 150px;
          -webkit-line-clamp: 1;
          font-size: @smafont-size;
        }
      }
    }
    .icon-play-square {
      color: @gray-color;
    }
  }
}
</style>
