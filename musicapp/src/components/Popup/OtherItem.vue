<template>
  <div class="otherItem">
    <van-cell-group inset>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-dianyingpiao"></i>
          我的订单
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-youhuiquan"></i>
          优惠券
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-music"></i>
          我的客服
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-fenxiang"></i>
          分享网易云音乐
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-guanyu"></i>
          关于
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "OtherItem",
  components: {},
};
</script>
<style lang="less" scoped>
</style>
