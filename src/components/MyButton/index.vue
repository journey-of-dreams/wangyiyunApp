<template>
  <button class="myButton" :style="{ color: color, borderColor }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    color: { default: "#000", type: String },
    borderColor: {
      default: "#888",type: String
    },
  },
  setup() {
  },
};
</script>
<style lang="less" scoped>
.myButton {
  background: #fff;
  border: 1px solid @gray-color;
  padding: 4px 6px;
  border-radius: 8px;
  font-size: 13px;
}
</style>
