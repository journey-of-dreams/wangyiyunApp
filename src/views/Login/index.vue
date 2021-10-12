<template>
  <div class="login">
    <div class="logo"><img src="@/assets/images/logo.jpg" alt="" /></div>
    <div class="loginWay">
      <van-button type="primary" size="large" round to="/login/phone">手机号登录</van-button>
      <div class="loginIcon">
        <div class="circle"><i class="iconfont icon-weixin"></i></div>
        <div class="circle"><i class="iconfont icon-qq"></i></div>
        <div class="circle"><i class="iconfont icon-weibo"></i></div>
        <div class="circle">
          <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
        </div>
      </div>
      <div class="tip">
        <p>
          登录及已同意<span
            >《用户协议》《隐私政策》《儿童隐私政策》《天翼账号服务协议》</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
};
</script>
<style lang="less" scoped>
.positionCenter {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.login {
  height: calc(100% + 20px);
  width: calc(100% + 30px);
  right: 15px;
  bottom: 10px;
  background: @theme-color;
  position: relative;
  .logo:extend(.positionCenter) {
    width: 80px;
    height: 80px;
    top: 20%;
    border-radius: 50%;
    box-shadow: 0 0 0px 10px rgba(0, 0, 0, 0.04);
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  .loginWay:extend(.positionCenter) {
    top: 70%;
    width: 70%;
    .van-button {
      background-color: #fff;
      color: @theme-color;
      border: none;
      /deep/.van-button__text {
        font-size: 20px !important;
      }
    }
    .loginIcon:extend(.flexCenter) {
      .circle:extend(.flexCenter) {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 1px solid #fff;
        justify-content: center;
        margin-top: 30px;
        .iconfont {
          color: #fff;
        }
      }
    }
    .tip {
      margin-top: 30px;
      p {
        color: #d8a9aa;
        font-size: 8px;
        text-align: center;
        span {
          font-size: 10px;
          color: #fff;
        }
      }
    }
  }
}
</style>
