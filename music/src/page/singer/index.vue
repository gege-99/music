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
      <ul
        class="findexList"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @toucchend="touchEnd"
        ref="uls"
      >
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
      selIndex: "hot",
      num: 1
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
    touchStart(e) {
      this.ulY = this.$refs.uls.getBoundingClientRect().top;
    },
    touchMove(e) {
      //   移动过的Y坐标距离顶部
      let moveY = e.touches[0].clientY;
      // 移动过的距离
      this.distance = moveY - this.ulY;
      if (moveY <= this.ulY) {
        this.num = 1;
      } else if (moveY >= 598) {
        this.num = 23;
      } else if (this.ulY < moveY&& moveY < 568) {
        console.log(1);
        this.num = Math.ceil(this.distance / 18);
      }
      // 根据现在所在的格数获取 下标
      let findex = this.fIndexList[this.num - 1];
      // 计算移动过的li数量
      this.selIndex = findex;
      this.bs.scrollToElement(this.$refs[findex][0]);
      
    },
    touchEnd(e) {},
    toggle(item) {
      // 索引列表的点击事件
      this.selIndex = item;
      //   console.log(this.$refs);
      //   让better-scroll 滚动到具体的某一个元素
      // 给滚动位置做一个标记 可以获取dom元素
      this.bs.scrollToElement(this.$refs[item][0]);
    },
    initBs() {
      this.bs = new BS(".wrapper", { probeType: 3, click: true });
      this.bs.on("scroll", pos => {
        let scrollY = Math.abs(pos.y);
        let heights = this.getHeights();
        //   获取歌手分组的高度数组
        let scrollIndex = 0;
        for (let index = 0; index < heights.length; index++) {
          if (scrollY >= heights[index] && scrollY <= heights[index + 1]) {
            scrollIndex = index;
          } else if (scrollY >= heights[heights.length - 1]) {
            scrollIndex = heights.length - 1;
          }
        }
        this.selIndex = this.fIndexList[scrollIndex];
        //   console.log(scrollIndex);
      });
    },
    getHeights() {
      let heights = [];
      for (const key in this.$refs) {
        if (key !== "uls") {
          heights.push(this.$refs[key][0].offsetTop);
        }
      }
      return heights;
    }
  },
  created() {
    getSingerList().then(res => {
      this.singers = getData(res.data.list);
      this.initBs();
      //   console.log(this.$refs);
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
