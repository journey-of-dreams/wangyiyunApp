<template>
  <div class="loginTitle">
    <i class="iconfont icon-cuo" @click="routerJump"></i>
    <span><slot name="tip">手机号登录</slot></span>
    <div class="myBtn"><slot name="button"></slot></div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "LoginTitle",
  setup() {
    const router = useRouter();
    const routerJump = () => {
      router.push("/home");
    };
    return {
      routerJump,
    };
  },
};
</script>
<style lang="less" scoped>
.loginTitle {
  .icon-cuo {
    font-size: @norfont-size !important;
  }
  span {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
  }
  .myBtn {
    float: right;
  }
}
</style>
