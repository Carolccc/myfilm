<template>
  <div class="content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在上映" name="first">正在上映</el-tab-pane>
      <el-tab-pane label="即将上映" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="经典影片" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};

</script>

<style scoped>
.content{
  margin-top: 63px;
}
.el-tabs__header{
  height: 130px;
  color: red;
}
.el-tab-pane{
  background-color: white;
}
</style>
