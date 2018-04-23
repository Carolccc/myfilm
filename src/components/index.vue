<template>
<el-container>
  <el-main>
    <!-- 走马灯 -->
    <el-carousel :interval="5000" height="500px" arrow="always">
      <el-carousel-item v-for="item in 5" :key="item">
      <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <div class="content">
      <div class="aside">
        <div class="panel-aside">
          <div class="panel-header">
            <span class="panel-title">
                <span>排行榜</span>
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
                <span class="textcolor-red">正在热映</span>
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
                <span class="textcolor-blue">即将上映</span>
            </span>
          </div>
          <div class="panel-content">
            <dl>
              <dd>
                <div class="item">
                  <a href="#"><img src="../image/hotfilm1.jpg" alt="头号玩家" width="160px"></a>
                  <div class="movie-title"><a href="#">头号玩家</a></div>
                  <div class="movie-time">5月11日上映</div>
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
      value1: 4.5
    };
  }
};
</script>

<style>
.el-container {
  margin: 0 auto;
  display: block;
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
.panel-aside {
  margin: 0 auto;
  width: 400px;
}
.panel-header {
  margin: 0 auto;
}
.panel-content {
  margin: 0 auto;
}
.panel-title {
  font-size: 26px;
  color: #ffb400;
}
.panel-more {
  font-size: 18px;
  line-height: 16px;
  float: right;
  margin-top: 10px;
  text-decoration: none;
}
dd {
  margin: 30px 0 0 30px;
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.item {
  position: relative;
  border: 1px solid #efefef;
  margin: -1px;
}
.el-rate {
  text-align: center;
}
.movie-title {
  text-align: center;
  font-size: 18px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-bottom: 3px;
  margin-top: 3px;
}
.aside {
  float: right;

}
li {
  list-style: none;
  display: list-item;
  padding-left: 0;
}
a {
  text-decoration: none;
}
a:hover {
  background-color: #c0c4cc;
}
.rank-hot {
  overflow: hidden;
  margin-top: 30px;
  margin-left: -30px;
}
.rank-index {
  font-size: 18px;
  color: #999;
  vertical-align: top;
  margin-right: 10px;
}
.rank-movie-name {
  display: inline-block;
  max-width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: #333;
  vertical-align: top;
}
.rank-moive-num {
  padding-left: 200px;
  color: #fdb863;
  font-size: 14px;
}
.rank-item {
  display: block;
  height: 40px;
  line-height: 35px;
  margin-bottom: 10px;
}
.textcolor-red{
  color: red;
}
.textcolor-blue{
  color: #2d98f3!important;
}
.movie-time{
  border: none;
  color: #999;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
}
</style>

