<template>
  <div class="head">
    <div class="title">费用管理</div>
    <a-button type="primary" class="xj">新建</a-button>
  </div>
</template>

<script>
export default {
  name: 'cost'
}
</script>

<style lang="scss" scoped>
  .head {
    border-bottom: 2px dashed #E5E5E5;
    padding-bottom: 12px;
    padding-top: 10px;
    height: 60px;
    .title {
      width:75px;
      height:34px;
      font-size:18px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:34px;
      float: left;
    }
    .xj {
      float: right;
      width:90px;
      height:34px;
      background:rgba(100,146,255,1);
      box-shadow:0px 0px 15px -8px rgba(0,0,0,0.5);
      border-radius:55px;
    }
  }
</style>
