<template>
  <div class="content">
    <div class="header">
      <div class="ranking">
        <el-tabs v-model="activeName" :tab-position="tabPosition" @tab-click="handleClick">
          <el-tab-pane label="热映榜" name="first"></el-tab-pane>
          <el-tab-pane label="最受期待榜" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="TOP10榜" name="third">角色管理</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      tabPosition: 'left'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}

</script>

<style scoped>
.content{
  margin-top: 63px;
}
.header{
  width: 1200px;
  margin: 0 auto;
}
.ranking{
  margin-top: 100px;
}
.el-tab-pane{
  text-align: center;
}
.el-tabs .el-tabs__item:hover{
  padding-bottom:50px;
      color: #404040;
}
</style>
