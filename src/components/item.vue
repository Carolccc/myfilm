<template>
  <div class="content">
    <div class="banner">
      <div class="item-header">
        <div class="item-photo">
           <img class="photo" src="../image/hotfilm1.jpg" alt="头号玩家">
        </div>
        <div class="item-title">
          <span class="texttype">
            <h2 class="texttype">头号玩家</h2>
            <h2 class="texttype">Ready Player One</h2>
          </span>
          <div class="item-type">
              动作，科幻，冒险<br/><br/>
              美国/140分钟<br/><br/>
              2018-03-30大陆上映
          </div>
           <div class="item-rank">
            <div class="item-rate">
              <div class="text-rank">评分</div>
              <el-rate v-model="value1" disabled text-color="#ff9900"  score-template="{value}"></el-rate>
            </div>
            <div class="item-num">
              <div class="text-rank">累计票房</div>
              <div class="text-num">17.3亿</div>
            </div>
         </div>
          <div class="item-button">
            <el-button type="danger" round size="medium">想看</el-button>
            <el-button type="danger" round size="medium">评分</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="介绍" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="演职人员" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="奖项" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="图集" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      value1:4.5,
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
.content {
  margin-top: 63px;
}
.banner {
  width: 100%;
  background: url(../image/banner_bg.png);
}
.item-header {
  width: 1200px;
  margin: 0 auto;
  height: 376px;
  position: relative;
}
.item-photo {
  width: 240px;
  height: 330px;
  float: left;
  position: relative;
  top: 70px;
  overflow: hidden;
}
.photo {
  border: 4px solid #fff;
  height: 322px;
  width: 232px;
}
.item-title {
  position: relative;
  top: 70px;
  left: 50px;
  overflow: hidden;
  margin-left: 50px;
  color: white;
}
.item-button{
  margin-top: 50px;
}
.texttype{
  margin-top: 10px;
  margin-bottom: 20px;
}
.item-rank{
  float: right;
  margin-right: 200px;
  margin-top: -30px;
}
.item-num{
  margin-top: 15px;
}
.text-rank{
  margin-bottom: 5px;
}
.text-num{
  font-size: 28px;
}
.container{
  width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
}

</style>
