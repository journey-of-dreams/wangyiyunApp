<template>
  <div class="otherFun">
    <van-cell-group inset>
      <van-cell title="" label="其他" />
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-shezhi"></i>
          设置
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-yueliang"></i>
          夜间模式
        </template>
        <template #right-icon>
          <van-switch
            v-model="checked"
            size="15"
            class="switch"
            inactive-color="#dcdee0"
          />
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-dingshizuoye"></i>
          定时关闭
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-pifu"></i>
          个性装扮
        </template>
      </van-cell>
      <van-cell center>
        <template #title>
          <i class="iconfont icon-music"></i>
          边听边存
        </template>
        <template #right-icon>
          <span>未开始</span>
          <van-icon class="arrow" name="arrow" />
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-zaixianmianliuliang"></i>
          在线听歌免流量
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-iconset0141"></i>
          音乐黑名单
        </template>
      </van-cell>
      <van-cell center>
        <template #title>
          <i class="iconfont icon-baohu"></i>
          青少年模式
        </template>
        <template #right-icon>
          <span>未开始</span>
          <van-icon class="arrow" name="arrow" />
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <i class="iconfont icon-naozhong"></i>
          音乐闹钟
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "OtherFun",
  components: {},
  setup() {
    const checked = ref(false);

    return {
      checked,
    };
  },
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
