<template>
  <div class="card">
    <ul>
      <li v-for="(item, index) in parentData" :key="index">
        <span :class="index<3?'activeSpan':''">{{ index + 1 }}</span>
        <span class="searchWord">{{ item.searchWord }}</span>
        <img class="iconImg" :src="item.iconUrl" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["parentData"],
  setup(props) {
    console.log(props);
  },
};
</script>
<style lang="less" scoped>
.card {
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 90%;
  margin-top: 10px;
  margin-left: 50%;
  padding: 10px;
  transform: translateX(-50%);
  ul:extend(.flexCenter) {
    flex-wrap: wrap;
    li:extend(.flexCenter) {
        justify-content: flex-start;
      width: calc(50% - 20px);
      padding: 10px;
      height: 20px;
      .activeSpan{
          font-weight: 600;
          color:@theme-color;
      }
      .searchWord:extend(.textHidden){
          padding-left: 10px;
          padding-right: 5px;
          max-width: 80%;
          overflow: hidden;
          -webkit-line-clamp: 1;
      }
      .iconImg {
        height: 100%;
      }
    }
  }
}
</style>
