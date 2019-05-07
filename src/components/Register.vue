<template>
  <el-row>
    姓名：{{info.name}}
    <el-input v-model="info.name" placeholder="请输入姓名"></el-input>
    年龄：{{info.age}}
    <el-input v-model="info.age" placeholder="请输入年龄"></el-input>
    性别：{{info.sex}}
    <el-select v-model="info.sex" placeholder="请选择">
      <el-option v-for="(item,index) in options" :key="index" :value="item"></el-option>
    </el-select>
    <el-button @click="create" type="success">创建</el-button>
    <template>
        <el-table :data="tabledata" align="left">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="sex" label="性别"></el-table-column>

            <el-table-column label="操作">
            <template slot-scope="a">
                <el-button size="mini" type="danger" @click="del(a.$index)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </template>
  </el-row>
</template>
<script>

import Storage from '../store/store'

export default {
  name: 'Test',
  data () {
    return {
      info: {
        name: '',
        age: null,
        sex: ''
      },
      options: [
        'women', 'man', 'secrecy'
      ],
      tabledata: Storage.fetch()
    }
  },
  methods: {
    create() {
          this.tabledata.push(this.info)
          this.info = {name:'' , age: null, sex: ''}
      },
      del(index){
          this.tabledata.splice(index,1)
      }
  },
  watch: {
      tabledata:{
        handler(items){
            Storage.save(items)
        },
        deep: true
      }
  },
}
</script>
<style>

</style>
