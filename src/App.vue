<template>
  <div id="app">
    <el-menu :default-active="$route.path"
             active-text-color="#ffd04b"
             background-color="#545c64"
             class="el-menu-demo"
             mode="horizontal"
             router
             text-color="#fff"
             @select="handleSelect"
    >
      <template v-for="(firstNode) in navTree">
        <el-submenu
            v-if="firstNode.children && firstNode.children.length > 0"
            :key="'su_'+firstNode.path"
            :index="firstNode.path"
        >
          <template slot="title">{{ firstNode.name }}</template>
          <el-menu-item v-if="!!firstNode.component && firstNode.show"
              :key="firstNode.path"
              :index="firstNode.path">{{ firstNode.name }}
          </el-menu-item>
          <el-menu-item
              v-for="secondNode in firstNode.children"
              :key="firstNode.path+secondNode.path"
              :index="firstNode.path+'/'+secondNode.path">{{ secondNode.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item
            v-else
            :key="firstNode.path"
            :index="firstNode.path">{{ firstNode.name }}
        </el-menu-item>
      </template>
    </el-menu>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view class="mainBox"></router-view>
    <div class="footer">
      <div class="copyright" >
        ©2021 Xavier
      </div>
    </div>
  </div>
</template>
<script>
import navTree from '@/navTree'

export default {
  data() {
    return {
      //activeIndex: '/home',
      navTree: navTree
    }
  },
  computed: {
    activeIndex(){
      console.log('url',this.$route)
      return '/user/profile';
    }
  },
  methods: {
    handleSelect() {

    }
  }
}
</script>
<style>

html,body,#app {
  height: 100%;
}
body {
  margin: 0;
}


.mainBox{
  height: calc(100% - 61px);
}

.footer{
  position: fixed;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  width: 100%;
  bottom: 0;
  text-align: center;
}
.copyright{

}

div.el-row{
  margin-left: 0!important;
  margin-right: 0!important;
}
</style>
