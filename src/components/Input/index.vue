<template>
  <div class="input">
    <div class="left">
      <slot name="aria"></slot>
      <input
        @input="handleInput"
        autofocus
        :type="inputType"
        :placeholder="placeholder"
        class="tel"
      />
    </div>
    <i @click="clearInp" class="iconfont icon-cuo"></i>
  </div>
  <van-divider :style="{ borderColor: '#ccc', margin: '10px 0' }">
  </van-divider>
</template>

<script>
export default {
  name: "Input",
  emits: ["inputVal"],
  props: ["placeholder", "inputType"],
  setup(props, { emit }) {
    const clearInp = () => {
      $(".tel").val("");
      $(".input .icon-cuo").hide();
    };
    const handleInput = () => {
      emit("inputVal", $(".tel").val());
      if ($(".tel").val().length > 0) {
        $(".input .icon-cuo").show();
      } else {
        $(".input .icon-cuo").hide();
      }
      if (props.inputType == "email") {
        console.log("显示搜索建议");
      }
    };
    return {
      clearInp,
      handleInput,
    };
  },
};
</script>
<style lang="less" scoped>
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
</style>
