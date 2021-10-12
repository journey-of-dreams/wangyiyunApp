<template>
  <div class="podCast">
    <a href="#"></a>
    <div class="banner"></div>
  </div>
</template>

<script>
export default {
  name: "podCast",
  components: {},
};
</script>
<style lang="less" scoped>
@link-color: #428bca;
@my-selector:banner;
a {
  color: @link-color;
}
  .@{my-selector}{
    width:100px;
    height:100px;
    background: gold;
    font-weight: bold;
    margin: 0 auto;
  }

</style>
