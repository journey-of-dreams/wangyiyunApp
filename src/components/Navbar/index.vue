<template>
  <div class="navBar">
    <nav-item>
      <pop-up></pop-up>
    </nav-item>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
import { ref } from "vue";
import PopUp from "../Popup";
import NavItem from "./NavItem.vue";
export default {
  name: "NavBar",
  components: { PopUp, NavItem },
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
};
</script>
<style lang="less" scoped>
.navBar {
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0px;
  height: 50px;
  width: calc(100% - 30px);
  .center{
    flex: 1;
    margin: 0 10px;
  }
}
</style>
