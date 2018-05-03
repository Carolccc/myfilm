<template>
  <div id="app">
        <div id="header">
          <div id="contain">
            <div id="logo">
              <router-link to="/index"><img src="./image/1.jpg"></router-link>
            </div>
            <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color=red>
                <el-menu-item index="index">首页</el-menu-item>
                <el-menu-item index="flim">电影</el-menu-item>
                <el-menu-item index="3"  disabled>影院</el-menu-item>
                <el-menu-item index="ranking">榜单</el-menu-item>
                <el-menu-item index="5"  disabled>热点</el-menu-item>
            </el-menu>
             <el-dropdown>
              <span class="el-dropdown-link icon iconfont icon-shenfenzheng">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>登陆</el-dropdown-item>
                <el-dropdown-item>注册</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div id="search">
              <el-input placeholder="找影视剧、影人、影院" v-model="searchinput" class="input-with-select">
                <el-button slot="append" type="primary" icon="el-icon-search">搜索</el-button>
              </el-input>
            </div>

        </div>
    </div>
    <router-view/>
    <div id="footer">
      <p style="color:white; text-align:center">@zmh,ywj,wzj</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
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
  }
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
.el-dropdown{
  float: right;
  margin-top: 1px;
}
.el-menu-item.is-active{
  border-bottom: none
}

ul li {
  border-bottom-color: #fff;
}
#footer{
  background-color: #262426;
  padding: 56px 0;
  margin: 0 auto;
  min-width: 1200px;
  margin-top: 82px;
}
</style>
