<template>
 
<div id="Container">

  <el-container>

    <el-header style="padding:0px">
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">系统</el-menu-item>
        <el-submenu index="2">
          <template slot="title">数据产品</template>
          <el-menu-item index="2-1">NC</el-menu-item>
          <el-menu-item index="2-2">GRIB</el-menu-item>
          <el-menu-item index="2-3">水质数据</el-menu-item>
          <el-menu-item index="2-4">ADS</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">维护</el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card :body-style="{ padding: '10px' }" shadow="hover">
            <img src="../../image/fc.png" class="image">
            <div style="padding: 14px;">
              <span>风场</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '10px' }" shadow="hover">
            <img src="../../image/jg.png" class="image">
            <div style="padding: 14px;">
              <span>全球气象导航</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '10px' }" shadow="hover">
            <img src="../../image/jg.png" class="image">
            <div style="padding: 14px;">
              <span>交管</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '10px' }" shadow="hover">
            <img src="../../image/grafana_icon.svg" class="image">
            <div style="padding: 14px;">
              <span>集群监控</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>

    <el-footer style="height:25px">
      2019技术部技术研发组开发团队
    </el-footer>

  </el-container>

</div>



</template>

<script>
 
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        currentDate: new Date()
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style>

.el-footer {
  font-size: 1em;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>