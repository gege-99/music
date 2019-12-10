import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'hash',
  routes:[
    {
      path:'/',
      redirect:"/recommend"
    },
    {
      path:'/singer',
      component:()=>import('../page/singer/index.vue')
    },
    {
      path:'/recommend',
      component:()=>import('../page/recommend/index.vue')
    },
    {
      path:'/search',
      component:()=>import('../page/search/index.vue')
    },
    {
      path:'/rank',
      component:()=>import('../page/rank/index.vue')
    }
  ]
})

export default router;
