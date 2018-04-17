<template>
<el-container>
    <el-header>
      <div id="header">
        <div id="logo">
          <img src="../image/1.jpg" style="width: 170px;height: 59px;">
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color=red>
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">电影</el-menu-item>
            <el-menu-item index="3">影院</el-menu-item>
            <el-menu-item index="4">榜单</el-menu-item>
            <el-menu-item index="5">热点</el-menu-item>
        </el-menu>
        <div class="icon iconfont icon-shenfenzheng"></div>
        <div id="search">
            <el-input placeholder="找影视剧、影人、影院" v-model="input5" class="input-with-select">
              <el-button slot="append" icon="el-icon-search">搜索</el-button>
            </el-input>
        </div>
      </div>
  </el-header>

  <el-main>
    <!-- 走马灯 -->
    <el-carousel :interval="5000" height="500px" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <div class="content">
      <div class="main">
        <div class="item">
          <h1>正在热映</h1>
          <dl>
            <dd>
              <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
              <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </el-main>

</el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      input5: "",
      value1: 5
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-container {
  margin: 0 auto;
  display: block;
}
.el-header {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  min-width: 1200px;
  background-color: #fff;
  border-bottom: 1px solid #d8d8d8;
}
#header {
  width: 1200px;
  margin: 0 auto;
}
#logo {
  float: left;
}
.el-menu {
  display: inline-block;
  overflow: hidden;
  margin-left: 20px;
  height: 59px;
  text-align: center;
}
#search {
  float: right;
  margin-top: 10px;
  margin-right: 30px;
  position: relative;
  overflow: hidden;
}

/* 用户图标 */
.iconfont {
  font-size: 33px;
  background: white;
  color: red;
  margin-top: 10px;
  margin-right: 50px;
  float: right;
  position: relative;
  display: block;
  overflow: hidden;
}

.el-main {
   width: 100%;
  min-width: 1200px;
}

/* 走马灯 */
.el-carousel{
  padding-top:40px;
  width: 1400px;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background:url(../image/2.jpg);
  background-repeat:no-repeat;
  width:100%;
  height:100%;
  background-size:100% 100%;
}
.el-carousel__item:nth-child(2n + 1) {
  background:url(../image/2.jpg);
  background-repeat:no-repeat;
  width:100%;
  height:100%;
  background-size:100% 100%;
}

.content{
  width: 1300px;
  margin: 0 auto;
  margin-top: 70px;

}
</style>

