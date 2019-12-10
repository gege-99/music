<template>
  <ul class="my-tab">
    <router-link tag="li" active-class="sel" v-for="(item,index) in tab" :key="index" :to="item.path">
      <span>{{item.name}}</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tab: [
        { name: "推荐", path: "/recommend" },
        { name: "歌手", path: "/singer" },
        { name: "排行", path: "/rank" },
        { name: "搜索", path: "/search" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@style/index.less";
.my-tab {
  display: flex;
  .w(375);
  position: fixed;
  top: 44px;
  left: 0;
  height: 44px;
  color: @white_o5;
  font-size: @fs-s;
  li {
    width: 25%;
    text-align: center;
    line-height: 44px;
    span{
        padding-bottom: 5px;
    }
  }
  .sel{
      span{
          color: @yellow;
              border-bottom: 2px solid @yellow;
      }
  }
}
</style>