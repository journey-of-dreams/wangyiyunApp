<template>
  <div class="myMusic">
    <div class="cc">
      <button @mousedown="start" @mouseup="end">
        <img src="~assets/images/执行.png" alt="" />
      </button>
      <div class="grow">{{ num }}%</div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "myMusic",
  components: {},
  setup() {
    let num = ref(0);
    var timer;
    const start = () => {
      $(".grow").eq(0).animate(
        {
          width: "200px",
        },
        1500
      );
      timer = setInterval(() => {
        num.value += 10;
        if (num.value >= 100) {
          clearInterval(timer);
          console.log("调用相关方法");
        }
      }, 150);
    };

    const end = () => {
      clearInterval(timer);
      $(".grow")
        .eq(0)
        .stop()
        .animate(
          {
            width: "0px",
          },
          1500 / num.value
        );
      num.value = 0;
    };

    return {
      num,
      start,
      end,
    };
  },
};
</script>
<style lang="less" scoped>
.cc {
  position: relative;
  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 50%;
  }
}
.grow {
  margin-left: 15px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  border-radius: 0 15px 15px 0;
  text-align: right;
  width: 0;
  display: inline-block;
  overflow: hidden;
  background: #ccc;
  color: #fff;
}
</style>
