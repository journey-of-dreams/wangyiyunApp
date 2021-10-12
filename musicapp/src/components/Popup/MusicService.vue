<template>
  <div class="musicService">
    <van-cell-group inset>
      <van-cell is-link title="" label="音乐服务"/>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-dianyingpiao"></i>
          云村有票
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-gouwuche"></i>
          商城
        </template>
      </van-cell>
        <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-youxi"></i>
          游戏专区
        </template>
        <template #right-icon>
          <span>一起探险赢好礼</span>
          <i class="iconfont icon-pikachu-" style="color:orange"></i>
           <van-icon class="arrow" name="arrow" />
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-lingsheng"></i>
          口袋彩铃
        </template>
      </van-cell>
    
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "MusicService",
  components: {},
};
</script>
<style lang="less" scoped>
.van-cell{
  span{
    font-size: 10px;
    color: #666;
  }
}
</style>
