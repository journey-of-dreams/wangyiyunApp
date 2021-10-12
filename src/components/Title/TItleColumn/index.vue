<template>
  <div class="titlelayout">
    <title-item :fatherData="fatherData"></title-item>
    <my-button><slot>更多></slot></my-button>
  </div>
  
</template>

<script>
import TitleItem from "../TItleColumn/TItleItem.vue";
import MyButton from "components/MyButton";

export default {
  name: "Titlelayout",
  props: ["fatherData"],
  components: { TitleItem, MyButton },
  setup() {},
};
</script>
<style lang="less" scoped>
.titlelayout:extend(.flexCenter) {
  align-items: flex-start;
  .myButton {
    margin-top: 11px;
  }
}
</style>
