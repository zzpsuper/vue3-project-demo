<template>
  <div class="layout">
    <div class="layout_slider" :class="{ fold: layOutSettingStore.fold }">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          mode="vertical"
          background-color="#001529"
          text-color="white"
          :default-active="$route.path"
          :collapse="layOutSettingStore.fold"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar" :class="{ fold: layOutSettingStore.fold }">
      <TabBar></TabBar>
    </div>
    <div class="layout_main" :class="{ fold: layOutSettingStore.fold }">
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
import useLayOutSettingStore from '@/store/modules/setting.ts'

const userStore = useUserStore()
let layOutSettingStore = useLayOutSettingStore()
let $route = useRoute()
</script>
<script lang="ts">
export default {
  name: 'LayOut',
}
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
    transition: all 0.3s;

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

    &.fold {
      width: $base-menu-min-width;
    }
  }

  &_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
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
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
