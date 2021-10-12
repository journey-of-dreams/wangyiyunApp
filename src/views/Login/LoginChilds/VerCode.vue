<template>
  <div class="verCode">
    <login-title>
      <template #button>
        <my-button>密码登录</my-button>
      </template>
    </login-title>
    <p class="inputTitle">请输入验证码</p>
    <div class="inputDetail">
      <div>
        <span>以发送至+{{ phoneInfo }}</span>
        <i class="iconfont icon-bi" @click="back()"></i>
      </div>
      <div>
        <span v-if="countDown > 0">{{ countDown }}s</span>
        <span v-else style="color: #358cd6" @click="countDown = 60"
          >重新获取</span
        >
      </div>
    </div>
    <van-password-input
      :value="verCode"
      :mask="false"
      :gutter="10"
      :length="codeLength"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <van-number-keyboard
      v-model="verCode"
      :show="showKeyboard"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
import MyButton from "components/MyButton";

import LoginTitle from "components/Title/LoginTitle";
import { computed, ref } from "@vue/reactivity";
import { phoneNumFilter, checkOperator } from "utils/login-check.js";
import { vertifyCode } from "api/login.js";
import { onMounted, watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default {
  name: "VerCode",
  components: { LoginTitle, MyButton },
  setup() {
    const router = useRouter();
    const verCode = ref();
    let codeLength = ref(4);
    const showKeyboard = ref(true);
    let countDown = ref(60);
    let timer;
    let myPhone;
    onMounted(() => {
      // let operator = checkOperator(myPhone)
      // if (operator == "CTCC") {
      //   codeLength.value = 4
      // }
      timer = setInterval(() => {
        countDown.value--;
      }, 1000);
    });
    const back = () => {
      router.back();
    };
    const phoneInfo = computed(() => {
      let phoneInfo = JSON.parse(sessionStorage["phoneInfo"]);
      let { code, phone } = phoneInfo;
      myPhone = phoneInfo.phone;
      phone = phoneNumFilter(phone);
      return `${code} ${phone}`;
    });
    watch(countDown, () => {
      if (countDown <= 0) {
        clearInterval(timer);
      }
    });
    watch(verCode, (newCode) => {
      if (newCode.length == 4) {
        console.log("验证验证码");
        vertifyCode(myPhone, newCode).then((res) => {
          router.push("/home");
        });
      }
    });
    return {
      phoneInfo,
      countDown,
      codeLength,
      back,
      verCode,
      showKeyboard,
    };
  },
};
</script>
<style lang="less" scoped>
.verCode {
  .inputTitle {
    margin-top: 50px;
    font-size: 20px;
  }
  .inputDetail:extend(.flexCenter) {
  }
  /deep/.van-password-input__item {
    border-bottom: 1px solid @gray-color !important;
  }
}
</style>
