<template>
  <div class="home">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "components/TabBar";
export default {
  name: "Home",
  components: {
    TabBar,
  },
};
</script>
<style lang="less" scoped>
.home {
  background: #f8f9f9;
}
</style>
