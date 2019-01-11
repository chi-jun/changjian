<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header class="header clearfloat">
        <app-header></app-header>
      </a-layout-header>
      <a-layout-content>
        <a-layout class="con">
          <app-menu></app-menu>
          <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            <router-view/>
          </a-layout-content>
        </a-layout>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
import Vue from 'vue'
import { Layout, Menu, Icon, Button, Badge } from 'ant-design-vue'
// 头部信息
import AppHeader from '../Header/Header'
// 导航菜单
import AppMenu from '../Menu/menu'
Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Badge)


export default {
  name: 'home',
  components: {
    AppHeader,
    AppMenu
  }
}
</script>
<style lang="scss" scoped>
  @import '../../assets/iconfont/iconfont.css';
  .header {
    height: 74px;
    background: #6492FF;
    padding: 0 38px;
  }
  .ant-menu-item {
    padding-left: 16px;
  }
  .con {
    margin: 22px;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 6px;
    height: 820px;
    position: relative;
  }
  .group {
    line-height: 60px;
    margin-left: 30px;
  }
  #components-layout-demo-basic .ant-layout-sider {
    background: #fff;
    line-height: 120px;
  }
  #components-layout-demo-basic .ant-layout-content {
    min-height: 120px;
  }
  #components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
  }
  #components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
  }
  .ant-menu-inline .ant-menu-item {
    margin-top: 0px;
    margin-bottom: 0px;
    height: 70px;
    line-height: 70px;
  }
  
  i {
    margin-right: 24px;
  }
  
  span, i, .iconfont {
    font-size: 20px;
  }
</style>
