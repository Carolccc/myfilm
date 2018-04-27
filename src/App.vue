<template>
  <div id="app">
        <div id="header">
          <div id="contain">
          <div id="logo">
            <img src="./image/1.jpg">
          </div>
          <el-menu :default-active="activeIndex" router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color=red>
              <el-menu-item index="index">首页</el-menu-item>
              <el-menu-item index="flim">电影</el-menu-item>
              <el-menu-item index="3">影院</el-menu-item>
              <el-menu-item index="4">榜单</el-menu-item>
              <el-menu-item index="5">热点</el-menu-item>
          </el-menu>
          <div class="icon iconfont icon-shenfenzheng"></div>
          <div id="search">
              <el-input placeholder="找影视剧、影人、影院" v-model="searchinput" class="input-with-select">
                <el-button slot="append" type="primary" icon="el-icon-search">搜索</el-button>
              </el-input>
          </div>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "index",
      searchinput: ""
    };
  },
  computed: {
    activeIndex() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  name: "App"
};
</script>

<style scoped>
#contain {
  width: 1200px;
  margin: 0 auto;

}
#header {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  min-width: 1200px;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
  box-shadow: 0px 0px 5px 0px #e4e7ed
}
#logo {
  float: left;
  margin-top: 13px;
}
.el-menu {
  display: inline-block;
  overflow: hidden;
  margin-left: 20px;
  height: 59px;
  text-align: center;
}

.iconfont {
  font-size: 33px;
  background: white;
  color: red;
  margin-top: 10px;
  float: right;
  position: relative;
  display: block;
  overflow: hidden;
}
#search {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  position: relative;
  overflow: hidden;
}

.el-menu--horizontal{
  border-bottom: none;
}

.el-menu-item{
  border-bottom: none;
}

.el-menu-item.is-active{
  border-bottom: none
}

ul li {
  border-bottom-color: #fff;
}
</style>
