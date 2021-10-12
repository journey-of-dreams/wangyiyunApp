<template>
  <div :class="['smallCard', type]">
    <div class="title">
      <p>{{ title }}</p>
      <i :class="'iconfont ' + icon"></i>
    </div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "SmallCard",
  props: ["title", "icon", "content", "type"],
};
</script>
<style lang="less" scoped>
.smallCard {
  border-radius: 10px;
  width: 43%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  color: #fff;
  margin: 8px 0;

  .title:extend(.flexCenter) {
  }
  .content {
    font-size: 12px;
  }
}
.iconfont{
    font-size: @middle-icon;
}
// bgray
.bgray {
  background: linear-gradient(to right, #8b7a72 0%, #decdc5 100%);
}
.borangered {
  background: linear-gradient(to right, #f94336 0%, #ffada1 100%);
}
.sbrown {
  background: linear-gradient(to right, #c94615 0%, #f4bb86 100%);
}
.bblue {
  background: linear-gradient(to right, #4e3cf2 0%, #decdc5 100%);
}
.borange {
  background: linear-gradient(to right, #fb3709 0%, #feb96c 100%);
}
.bpurple {
  background: linear-gradient(to right, #210373 0%, #a6269f 100%);
}
.bbrown {
  background: linear-gradient(to right, #8f4542 0%, #ebc0a8 100%);
}
.sred {
  background: linear-gradient(to right, #e54e6d 0%, #f6c4c3 100%);
}
.spurple {
  background: linear-gradient(to right, #7b4fd7 0%, #d7b5f3 100%);
}
.syellow {
  background: linear-gradient(to right, #e58d45 0%, #f8e1ad 100%);
}
.bred {
  background: linear-gradient(to right, #da1e5b 0%, #fe909d 100%);
}
.sgload {
  background: linear-gradient(to right, #be9941 0%, #f0daa9 100%);
}
</style>
