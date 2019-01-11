import Vue from 'vue'
import Router from 'vue-router'
// 产品管理
import Product from '@/components/Product/Product'

// 标签管理
import Category from '@/components/Category/category'
// 人员管理
import Staff from '@/components/renyuan/renyuan'
// 费用管理
import Cost from '@/components/Cost/Cost'
// 售后管理
import Salt from '@/components/Salt/salt'
// 主页
import Home from '@/components/Home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/product',
      // rediret: {
      //   name: 'product',
      //   // component: Product
      // },
      children: [
        {
          path: '/product',
          name: 'product',
          component: Product
        },
        {
          path: '/label',
          name: 'category',
          component: Category
        },
        {
          path: '/staff',
          name: 'staff',
          component: Staff
        },
        {
          path: '/cost',
          name: 'cost',
          component: Cost
        },
        {
          path: '/salt',
          name: 'salt',
          component: Salt
        }
      ]
    }
  ]
})
