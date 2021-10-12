<template>
  <div class="columnLayout">
    <title-column :fatherData="fatherTitle"
      ><slot name="button"></slot
    ></title-column>
    <slot name="content">
      <ul class="songContainer">
        <slot></slot>
      </ul>
    </slot>
  </div>
</template>

<script>
import TitleColumn from "../Title/TItleColumn";
export default {
  name: "ColumnLayout",
  components: {
    TitleColumn,
  },
  props: ["fatherTitle"],
  setup() {},
};
</script>
<style lang="less" scoped>
.songContainer:extend(.flexCenter) {
    height: 300px;
    width: 100%;
    overflow-x: auto;

  }
</style>
