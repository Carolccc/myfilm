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
        <el-tab-pane label="介绍" name="first">
          <div class="model">
            <div class="mod-title">
              <h3>剧情简介</h3>
            </div>
            <div class="mod-main">
              {{modcontent}}
            </div>
          </div>
          <div class="model">
            <div class="mod-title">
              <h3>演职人员</h3>
            </div>
            <div class="mod-main">
              <div class="movie-actor">
                <div class="dir-title">演员</div>
                  <div class="dir-mian">
                      <span class="act-main">
                        <div class="dir-pic"><img src="../image/actor4.jpg"></div>
                        <div class="dir-name">丽娜·维特</div>

                      </span>
                      <span class="act-main">
                        <div class="dir-pic"><img src="../image/actor3.jpg"></div>
                        <div class="dir-name">本·门德尔森</div>
                      </span>
                      <span class="act-main">
                        <div class="dir-pic"><img src="../image/actor2.jpg"></div>
                        <div class="dir-name">奥利维亚·库克</div>
                      </span>
                      <span class="act-main">
                        <div class="dir-pic"><img src="../image/actor1.jpg"></div>
                        <div class="dir-name">泰尔·谢里丹</div>
                      </span>
                  </div>
              </div>
              <div class="movie-director">
                <div class="dir-title">导演</div>
                  <div class="dir-mian">
                    <span class="dir-main">
                      <div class="dir-pic"><img src="../image/director.jpg"></div>
                      <div class="dir-name">史蒂文·斯皮尔伯格</div>
                    </span>
                  </div>
              </div>
            </div>
          </div>
          <div class="model">
            <div class="mod-title">
              <h3>热门短评</h3>
            </div>
            <div class="mod-main">
              {{modcontent}}
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="演职人员" name="second">

        </el-tab-pane>
        <el-tab-pane label="奖项" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="图集" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 4.5,
      activeName: "first",
      modcontent:
        "2045年，遭遇能源危机的世界处于崩溃边缘，人类选择在名为“绿洲”的VR游戏中寻找慰藉。但游戏创始人詹姆斯·哈利迪（马克·里朗斯 饰）的遗嘱打破了世外桃源的宁静：只要玩家寻获他设置的彩蛋，就能接手“绿洲”成为新的世界首富。吸引全世界参与的大冒险就此展开，男主角韦德·沃兹（泰尔·谢里丹 饰）也投身其中，但等待他的夺宝之旅不仅神秘凶险，还裹挟着巨大阴谋……"
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
.item-button {
  margin-top: 50px;
}
.texttype {
  margin-top: 10px;
  margin-bottom: 20px;
}
.item-rank {
  float: right;
  margin-right: 200px;
  margin-top: -30px;
}
.item-num {
  margin-top: 15px;
}
.text-rank {
  margin-bottom: 5px;
}
.text-num {
  font-size: 28px;
}
.container {
  width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
}
.model {
  margin-bottom: 50px;
}
.mod-title {
  border-left: 4px solid red;
}
h3 {
  padding-left: 5px;
}
.mod-main {
  font-size: 17px;
  line-height: 26px;
  margin-top: 20px;
}
.movie-director{
  width: 128px;
}
.dir-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  width: 128px;
}
.dir-pic{
  width: 128px;
  height: 170px;
}
.dir-name {
  width: 128px;
  margin-top: 8px;
  line-height: 1.2;
  color: #333;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie-actor {
  float: right;
  margin-right: 350px;
}
.act-main{
  float: right;
  margin-right: 40px;
}
</style>
