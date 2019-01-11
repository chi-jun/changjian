<template>
  <div class="headerd clearfix">
    <div class="title">厂家管理后台</div>
    <div class="right">
      <!-- <span> -->
        <a-badge :count='num'>
          <!-- <a-icon type='bell' theme="filled"></a-icon> -->
          <!-- <a href="" class="head-example"></a> -->

          <i class="iconfont icon-tixing"></i>
        </a-badge>
      <!-- </span> -->
      <span>
        <a-badge :count='nun'>
          <i class="iconfont icon-xinxi1-copy"></i>
        </a-badge>
      </span>
      <span>
        <a-badge>
          <!-- <a-icon type="setting" :theme="filled" /> -->
          <i class="iconfont icon-shezhi"></i>
        </a-badge>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      num: 10,
      nun: 8
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../assets/iconfont/iconfont.css';
  .header{
    .title{
      float: left;
      width:171px;
      height:74px;
      font-size:28px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:74px;
      // margin: 20px 0 ;
      margin-left: 10px;
    }
    .right {
      float: right;
      // margin-top: 10px;
      span {
        margin-right: 32px;
        i {
          font-size: 24px;
          color: #fff;
        }
      }
    }
  }
</style>
