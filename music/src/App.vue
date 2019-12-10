<template>
  <div id="app">
    <Header></Header>
    <myTab></myTab>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@common/components/header";
import myTab from "@common/components/my-tab"
export default {
  name:"App",
  components:{
    Header,
    myTab
  }
}
</script>

<style lang="less" scoped>
@import '~@style/index.less';
#app{
  background: #222222
}

</style>
  