<template>
  <el-container class="container">
    <el-aside width="200px">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
      <el-footer>
        <app-footer></app-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
import AppHeader from './components/header'
import AppAside from './components/aside/'
import AppMain from './components/footer'
import AppFooter from './components/footer'
export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppAside,
    AppMain,
    AppFooter
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}
</style>
