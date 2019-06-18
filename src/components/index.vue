<template>
 
<div id="Container">

  <el-container>

    <el-header style="padding:0px">
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
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
        <el-col :span="4">
          <el-card :body-style="{ padding: '10px',height: '300px' }" shadow="hover">
            <img src="../../image/fc.png" class="image">
            <div style="padding: 14px;">
              <span>风场</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
              </div>
            </div>
            <el-button class="button" style="width:100%;height:70px">操作按钮</el-button>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '10px',height: '300px' }" shadow="hover">
            <img src="../../image/nav.png" class="image">
            <div style="padding: 14px;">
              <span>全球气象导航</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '10px',height: '450px' }" shadow="hover">
            <div>
            <img src="../../image/jg.svg" class="image"> 
            </div>

            <div style="padding: 14px;">
              <span>交管</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '10px',height: '450px' }" shadow="hover">
            <img src="../../image/scc.svg" class="image">
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