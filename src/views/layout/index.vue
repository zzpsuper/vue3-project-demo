<template>
  <div class="layout">
    <div class="layout_slider">
      <Logo></Logo>
    </div>
    <div class="layout_tabbar">头部</div>
    <div class="layout_main">内容</div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/views/login/index.vue'
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100vh;

  &_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
  }

  &_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: #a9c1ed;
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
