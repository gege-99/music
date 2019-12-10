<template>
  <div class="my-banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in slides" :key="index">
          <img :src="item.picUrl" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  props: {
    slides: {
      default: [],
      type: Array
    }
  },
  methods: {
    initBanner() {
      this.swiper = new Swiper('.swiper-container',{
        loop: true
      });
    }
  },

  // mounted(){
    // setTimeout(()=>{

      // this.initBanner()
    // },1000),
    // console.log(this.slides)
  // },
  watch:{
    slides(newVal,oldValue){
      this.$nextTick(()=> {
        // 获取完整的swiper dom元素
        this.initBanner()
      })
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@style/index.less";
.my-banner {
  .w(375);
  height: 150px;
  .swiper-container {
    .w(375);
    height: 100%;
    img{
          display: block;
    width: 100%;
    }
  }
}
</style>

