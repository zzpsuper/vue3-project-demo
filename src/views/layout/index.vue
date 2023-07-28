<template>
  <div class="layout">
    <div class="layout_slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          mode="vertical"
          background-color="#001529"
          text-color="white"
          :default-active="$route.path"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar"><TabBar></TabBar></div>
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/views/layout/logo/index.vue'
import Menu from '@/views/layout/menu/index.vue'
import Main from '@/views/layout/main/index.vue'
import TabBar from '@/views/layout/tabbar/index.vue'
import useUserStore from '@/store/modules/user.ts'
import { useRoute } from 'vue-router'

const userStore = useUserStore()
let $route = useRoute()
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100vh;
  color: white;

  &_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }

      /* 解决卡顿问题 */
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: $base-menu-width;
        height: 100%;
      }
    }
  }

  &_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
  }

  &_main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    box-sizing: border-box;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    padding: 20px;
    background-color: #507efc;
  }
}
</style>
