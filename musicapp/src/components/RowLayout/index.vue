<template>
  <div class="rowLayout">
    <div class="title">
      <p class="title"><slot name="title">推荐歌单</slot></p>
      <button type="default"><slot name="titleBtn">更多></slot></button>
    </div>
    <ul>
      <li class="listItem">
        <slot name="firstList"></slot>
      </li>
      <li class="listItem" v-for="item in fatherData" :key="item.id">
        <img :src="item.picUrl" alt="" />
        <p class="name">{{ item.name }}</p>
        <slot name="paly">
          <div class="bofang">
            <i class="iconfont icon-z"></i>
            <span>{{ item.playCount }}</span>
          </div>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import PopUp from "../Popup";
import NavItem from "./NavItem.vue";
export default {
  name: "NavBar",
  components: { PopUp, NavItem },
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
};
</script>
<style lang="less" scoped>
.rowLayout {
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
