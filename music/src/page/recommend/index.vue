<template>
  <div class="recommend">
    
    <div class="wrapper">
      <div class="content">
        <my-banner :slides="banners"></my-banner>
        <div class="list_title">热门歌单推荐</div>
        <ul class="list">
          <li v-for="(item,index) in list" :key="index">
            <img :src="item.imgurl" alt="">
            <div>
              <h2>{{item.dissname}}</h2>
              <h2>{{item.creator.name}}</h2>
            </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getBanner, getList } from "@api/recommend.js";
import myBanner from "@common/components/my-banner";
import BS from "better-scroll";
export default {
  components: { myBanner },
  data() {
    return {
      banners: [],
      list:[]
    };
  },
  methods: {
    initBS() {
      this.bs = new BS(".wrapper", {});
      console.log(this.bs);
    }
  },
  created() {
    getBanner().then(res => {
      this.banners = res.data.slider;
      //   console.log(res);
    }),
      getList().then(res => {
        this.list = res.data.list;
        console.log(res.data.list)
      });
  },
  mounted() {
    this.initBS();
  }
};
</script>
<style lang="less" scoped>
@import "~@style/index.less";

.recommend {
  .wrapper {
    overflow: hidden;
    position: fixed;
    top: 88px;
    bottom: 0;
    left: 0;
    right: 0;
    .list_title{
      .w(375);
      height:65px ;
      color: @yellow;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
    .list {
      li {
        .w(375);
        height: 82px;
        padding: 0px 20px 20px 20px;
        box-sizing: border-box;
        display: flex;
        img {
          width: 60px;
          height: 60px;
        }
        div {
          margin-left: 20px;
          // background: red;
          h2 {
            color: #fff;
            height: 20px;
            padding-bottom: 10px;
            font-size: @fs-s;
          }
          p {
            color: rgba(255, 255, 255, 0.3);
            height: 20px;
            font-size: @fs-s;
          }
        }
      }
    }
  }
}
</style>