<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-tickets"></i>
            <span slot="title">数据产品</span>
            </template>
            <el-menu-item-group>
            <span slot="title">数据产品</span>
            <el-menu-item index="1-1">NC</el-menu-item>
            <el-menu-item index="1-2">GRIB</el-menu-item>
            <el-menu-item index="1-3">水质数据</el-menu-item>
            <el-menu-item index="1-4">ADS</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-loading"></i>
            <span slot="title">全球风场</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-location-outline"></i>
            <span slot="title">交管天气风险管控</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-upload"></i>
            <span slot="title">云判</span>
        </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>