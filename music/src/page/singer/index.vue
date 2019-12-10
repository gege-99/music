<template>
  <div class="singer">
    <div class="wrapper">
      <ul>
        <li v-for="(item,index) in singers" :key="index" :ref="item.title">
          <h3>{{item.title}}</h3>
          <ol>
            <li v-for="(sItem,sindex) in item.list" :key="sindex">
              <img :src="sItem.img" alt />
              <span>{{sItem.Fsinger_name}}</span>
            </li>
          </ol>
        </li>
      </ul>
      <ul class="findexList">
        <li
          v-for="(item,index) in fIndexList"
          :key="index"
          :class="item===selIndex?'sel':''"
          @click="toggle(item)"
          
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
import { getSingerList } from "@api/singer.js";
import { getData } from "./singer.js";
export default {
  data() {
    return {
      singers: [],
      selIndex: "hot"
    };
  },
  computed: {
    fIndexList() {
      let arr = this.singers.map(item => {
        return item.title;
      });
      return arr;
    }
  },
  methods: {
    toggle(item) {
      // 索引列表的点击事件
      this.selIndex = item;
      console.log(this.$refs);
    //   让better-scroll 滚动到具体的某一个元素
    // 给滚动位置做一个标记 可以获取dom元素
      this.bs.scrollToElement(this.$refs[item][0])
    },
    initBs() {
      this.bs = new BS(".wrapper", { probeType: 3, click: true });
    }
  },
  created() {
    getSingerList().then(res => {
      this.singers = getData(res.data.list);
      this.initBs();
    });
  }
};
</script>
<style lang="less" scoped>
@import "~@style/index.less";
.sel {
  color: @yellow;
}
.singer {
  position: relative;
  .wrapper {
    overflow: hidden;
    .w(375);
    position: fixed;
    top: 88px;
    left: 0;
    right: 0;
    bottom: 0;
    h3 {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: 12px;
      color: hsla(0, 0%, 100%, 0.5);
      background: #333;
    }
    ol {
      li {
        .w(375);
        height: 70px;
        display: flex;
        // justify-content: center;
        padding: 20px 0 0 30px;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
        }
        span {
          padding-left: 20px;
          font-size: 14px;
          color: @white_o5;
        }
      }
    }
  }
  .findexList {
    z-index: 1;
    padding: 15px 0;
    border-radius: 10px;
    background: #fff;
    position: absolute;
    right: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.3);
    transform: translate3d(0, 15%, 0);
    li {
      color: @white_o5;
      font-size: @fs-xs;
      width: 20px;
      height: 18px;
      line-height: 18px;
      text-align: center;
    }
    .sel {
      color: @yellow;
    }
  }
}
// .singer {
//   .content {
//     position: fixed;
//     top: 88px;
//     left: 0;
//     right: 0;
//     bottom: 0;
//   }
// }
</style>
