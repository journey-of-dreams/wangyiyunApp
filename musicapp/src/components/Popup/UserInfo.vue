<template>
  <div class="userInfo">
    <van-cell-group inset>
      <van-cell  center>
        <template #title>
          <i class="iconfont icon-youxiang"></i>
          我的消息
        </template>
        <template #right-icon>
          <van-badge :content="20" />
          <van-icon class="arrow" name="arrow" />
        </template>
      </van-cell>
      <van-cell  center>
        <template #title>
          <i class="iconfont icon-xianxingbeike"></i>
          云贝中心
        </template>
        <template #right-icon>
          <van-button class="signBtn" round type="mini"
            >签到</van-button
          >
          <van-icon class="arrow" name="arrow" />
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-dengpao"></i>
          创作者中心
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  components: {},
};
</script>
<style lang="less" scoped>
.icon-user {
  color: #000;
}
.arrow{
  color: #666;
  padding-left: 5px;
}
  .signBtn{
    color: red;
    border: 1px solid red !important;
    background: none;
  }
</style>
