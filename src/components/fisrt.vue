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
              <el-button slot="append" type="primary" icon="el-icon-search">搜索</el-button>
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
      <div class="aside">
        <div class="panel-aside">
          <div class="panel-header">
            <span class="panel-title">
                <h1>排行榜</h1>
            </span>
          </div>
          <div class="panel-content">
            <ul class="rank-hot">
                <li class="rank-item"><a href="#"><i class="rank-index">1</i><span class="rank-movie-name">头号玩家</span><span class="rank-moive-num">300.6W</span></a></li>
                <li class="rank-item"><a href="#"><i class="rank-index">1</i><span class="rank-movie-name">头号玩家</span><span class="rank-moive-num">300.6W</span></a></li>
                <li class="rank-item"><a href="#"><i class="rank-index">1</i><span class="rank-movie-name">头号玩家</span><span class="rank-moive-num">300.6W</span></a></li>
                <li class="rank-item"><a href="#"><i class="rank-index">1</i><span class="rank-movie-name">头号玩家</span><span class="rank-moive-num">300.6W</span></a></li>
                <li class="rank-item"><a href="#"><i class="rank-index">1</i><span class="rank-movie-name">头号玩家</span><span class="rank-moive-num">300.6W</span></a></li>
                <li class="rank-item"><a href="#"><i class="rank-index">1</i><span class="rank-movie-name">头号玩家</span><span class="rank-moive-num">300.6W</span></a></li>
                <li class="rank-item"><a href="#"><i class="rank-index">1</i><span class="rank-movie-name">头号玩家</span><span class="rank-moive-num">300.6W</span></a></li>
                <li class="rank-item"><a href="#"><i class="rank-index">1</i><span class="rank-movie-name">头号玩家</span><span class="rank-moive-num">300.6W</span></a></li>
                <li class="rank-item"><a href="#"><i class="rank-index">1</i><span class="rank-movie-name">头号玩家</span><span class="rank-moive-num">300.6W</span></a></li>
                <li class="rank-item"><a href="#"><i class="rank-index">1</i><span class="rank-movie-name">头号玩家</span><span class="rank-moive-num">300.6W</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="panel">
          <div class="panel-header">
            <span class="panel-more">
               <a href="#">全部</a>
            </span>
            <span class="panel-title">
                <h1>正在热映</h1>
            </span>
          </div>
          <div class="panel-content">
            <dl>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>

            </dl>
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <span class="panel-more">
               <a href="#">全部</a>
            </span>
            <span class="panel-title">
                <h1>即将上映</h1>
            </span>
          </div>
          <div class="panel-content">
            <dl>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </div>
              </dd>
            </dl>
          </div>
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
      value1: 4.5
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
.el-carousel {
  padding-top: 40px;
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
  background: url(../image/2.jpg);
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.el-carousel__item:nth-child(2n + 1) {
  background: url(../image/2.jpg);
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}

.content {
  width: 1300px;
  margin: 0 auto;
  margin-top: 70px;
}
.panel {
  margin: 62px 0 0;
  width: 800px;
}
.panel-aside{
  margin: 0 auto;
  width: 400px;
}
.panel-header{
  margin:0 auto;
}
.panel-content{
  margin:0 auto;
}
.panel-title{
  color: red;
}
.panel-more{
  font-size: 18px;
  line-height: 16px;
  float: right;
  margin-top: 10px;
  text-decoration: none;
}
dd{
  margin: 30px 0 0 30px;
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.item{
    position: relative;
    border: 1px solid #efefef;
    margin: -1px;
}
.el-rate{
  text-align: center;
}
.movie-title{
  text-align: center;
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-bottom: 3px;
  margin-top: 3px;
}
.aside{
    float: right;
    margin-top: -25px;
}
li{
  list-style: none;
  display: list-item;
  padding-left: 0;
}
a{

  text-decoration: none;
}
a:hover
{
  background-color:#C0C4CC;
}
.rank-hot{
  overflow: hidden;
  margin-top: 30px;
  margin-left: -30px;
}
.rank-index{
  font-size: 18px;
  color: #999;
  vertical-align: top;
  margin-right: 10px;
}
.rank-movie-name{
    display: inline-block;
    max-width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
    vertical-align: top;
}
.rank-moive-num{
  padding-left: 200px;
  color: #fdb863;
  font-size: 14px;
}
.rank-item{
    display: block;
    height: 40px;
    line-height: 35px;
    margin-bottom:10px;

}
</style>

