<template>
  <div id="app">
    <TopBar></TopBar>
    <div class="container">
      <NavMenu></NavMenu>
      <div class="panel-main">
        <el-col :span="24">
          <div class="panel-top">
            <h2 class="panelname">{{currentPathName}}</h2>
          </div>
        </el-col>
        <el-col :span="24">
          <router-view></router-view>
        </el-col>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/iconfont.css'
  import './common/style.scss'
  import TopBar from './common/TopBar.vue'
  import NavMenu from './common/NavMenu.vue'
  export default {
    data () {
      return {
        currentPathName: ''
      }
    },
    watch: {
      '$route' (to, from) { //监听路由改变
        this.currentPathName = to.meta.title;
      }
    }, 
    components: {
      TopBar, 
      NavMenu
    }
  }
</script>

