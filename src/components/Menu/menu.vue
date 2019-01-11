<template>
  <a-layout-sider
    width="214"
    style="background: #fff; border-right: 1px solid #e8e8e8;" :trigger="null"
    collapsible
    v-model="collapsed"
  >
    <div class="group">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="()=> collapsed = !collapsed"
      />
    </div>
    <a-menu class="menu"
      mode="inline"
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      :inlineCollapsed="collapsed"
      :inlineIndent="31"
    >
      <a-menu-item v-for="menu in menus" :key="menu.id">
        <router-link :to="{name: menu.name}">
          <i :class="'iconfont icon-' + menu.icon"></i>
          <span>{{menu.title}}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  name: 'appmenu',
  data () {
    return {
      collapsed: false,
      menus: [
        {id: '1', title: '产品管理', icon: 'chanpin', name: 'product'},
        {id: '2', title: '标签管理', icon: 'liebiao-copy', name: 'category'},
        {id: '3', title: '人员管理', icon: 'fl-renyuan', name: 'staff'},
        {id: '4', title: '费用管理', icon: 'feiyongchaxun', name: 'cost'},
        {id: '5', title: '售后管理', icon: 'shouhou', name: 'salt'}
      ]
    }
  }
}
</script>
<style lang="scss">
  @import '../../assets/iconfont/iconfont.css';
  .group {
    line-height: 60px;
    margin-left: 30px;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: rgba(245,247,250,1);
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
