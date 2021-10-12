<template>
  <div class="popup">
    <div class="user">
      <div class="left">
        <i class="iconfont icon-user"></i>
        <span>资深网抑云用户 ></span>
      </div>
      <div class="left">
        <i class="iconfont icon-saoyisao"></i>
      </div>
    </div>
    <my-vip></my-vip>
    <user-info></user-info>
    <music-service></music-service>
    <other-fun></other-fun>
    <other-item></other-item>
    <van-cell center  value="退出登录/关闭" />
  </div>
</template>

<script>
import MusicService from "./MusicService.vue";
import OtherFun from "./OtherFun.vue";
import OtherItem from "./OtherItem.vue";
import UserInfo from "./UserInfo.vue";
import MyVip from "./MyVip.vue";
export default {
  name: "Popup",
  components: { MusicService, OtherFun, OtherItem, UserInfo, MyVip },
};
</script>
<style lang="less" scoped>
.popup {
  background: #f8f9f9;
  overflow: auto;
  .user {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      line-height: 40px;
      .icon-user {
        color: orange;
      }
      span {
        padding: 0 5px;
      }
    }
  }
  /deep/.van-cell__value{
    span{
      display: block;
      width: 100%;
      color: orangered;
      text-align: center;
    }
  }
}
</style>
