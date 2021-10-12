<template>
  <div class="phone">
    <login-title></login-title>
    <div class="phoneTip">
      <p class="top">登录体验更多精彩</p>
      <p class="bottom">未注册手机号登录后将自动创建账号</p>
    </div>
    <input-box
      inputType="tel"
      placeholder="请输入手机号"
      @inputVal="getInputValue"
    >
      <template #aria>
        <span @click="show = true">+{{ aria.itemCode || 86 }}</span>
        <i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i>
      </template>
    </input-box>
    <van-action-sheet v-model:show="show" title="选择国家和地区">
      <ul class="content" v-for="(item, index) in aria.ariaList" :key="index">
        <li class="label">{{ item.label }}</li>
        <ul v-for="(item2, index2) in item.countryList" :key="index2">
          <li class="countryList" @click="onSelect(item2.zh, item2.code)">
            <span>{{ item2.zh }}</span
            ><span>{{ "+" + item2.code }}</span>
          </li>
        </ul>
      </ul>
    </van-action-sheet>
    <van-button type="primary" size="large" round @click="sendCheck"
      >下一步</van-button
    >
  </div>
</template>

<script>
import InputBox from "components/Input";
import LoginTitle from "components/Title/LoginTitle";
import { Toast } from "vant";

import { reactive, ref } from "vue";
import { getAria, sendCode } from "api/login.js";
import { useRouter } from "vue-router";
import { isPhoneNumber } from "utils/login-check.js";
export default {
  name: "Phone",
  components: { InputBox, LoginTitle },
  setup() {
    const show = ref(false);
    const router = useRouter();
    let inputValue = ref(null);
    let aria = reactive({
      ariaList: [],
      itemCode: "86",
    });
    const getInputValue = (value) => {
      inputValue.value = value;
    };
    const sendCheck = () => {
      if (!isPhoneNumber(inputValue.value)) {
        return Toast({
          message: "手机号不合法",
          position: "top",
        });
      } else {
        sendCode(inputValue.value, aria.itemCode).then((res) => {
          console.log(res);
        });
        // 15504576259
        let phoneInfo = { phone: inputValue.value, code: aria.itemCode };
        phoneInfo = JSON.stringify(phoneInfo);
        sessionStorage["phoneInfo"] = phoneInfo;
        router.push("/login/phone/vercode");
      }
    };
    const onSelect = (zh, code) => {
      show.value = false;
      aria.itemCode = code;
      console.log(zh);
    };
    getAria().then((res) => {
      aria.ariaList = res.data;
      console.log(aria);
    });
    return {
      show,
      aria,
      sendCheck,
      onSelect,
      getInputValue,
    };
  },
};
</script>
<style lang="less" scoped>
.phone {
  .phoneTip {
    margin: 50px 0;
    .top {
      font-size: 20px;
      margin: 10px 0;
    }
    .bottom {
      color: #666;
    }
  }
  .input:extend(.flexCenter) {
    .left:extend(.flexCenter) {
      span {
        font-size: @norfont-size;
      }
    }
    .icon-cuo {
      display: none;
      font-size: 10px !important;
    }
    .icon-zelvxuanzefeiyongdaosanjiaoxingfandui {
      font-size: 5px !important;
      margin: 0 5px;
    }
    .tel {
      border: none;
      font-size: @norfont-size;
      caret-color: @theme-color;
    }
  }
  .content {
    .label {
      font-weight: 600;
      margin: 10px;
    }
    .countryList:extend(.flexCenter) {
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
  }
  .van-button {
    background: @theme-color;
    border: none;
    margin: 40px 0;
  }
}
</style>
