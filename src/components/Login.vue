<template>
    <div>
        <el-card class="box-card">
            <div class="text item">
                <el-input v-model="inputUser" placeholder="用户名" class="inputwidth"></el-input>
            </div>
            <div class="text item">
                <el-input placeholder="密码" v-model="inputPwd" show-password class="inputwidth"></el-input>
            </div>
            <div>
                If no user needs to <router-link to="Register">register</router-link>
            </div>
            <div class="btnTop">
                <router-link to="index">
                    <el-button type="success" class="btnwidth" @click="open">LOG IN</el-button>
                </router-link>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data () {
        return{
            inputUser: '',
            inputPwd: ''
        }
    },
    methods: {
        open () {
            this.$notify({
                title: '技术部研发组',
                message: '最终解释权归技术部研发组',
                duration: 0
            });
        }
    }
}
</script>
<style>
    .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
    margin: 0 auto;
  }
  .inputwidth {
      width: 80%;
  }
  .btnwidth {
      width: 80%;
  }
  .btnTop{
      margin-top:15px;
  }
</style>