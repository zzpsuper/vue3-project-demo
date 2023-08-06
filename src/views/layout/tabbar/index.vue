<script setup lang="ts">
import Breadcrumb from '@/views/layout/tabbar/breadcrumb/index.vue'
import Setting from '@/views/layout/tabbar/setting/index.vue'
</script>

<template>
  <div class="tab-bar">
    <div class="tab-bar-left">
      <Breadcrumb />
    </div>
    <div class="tab-bar-right">
      <Setting />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tab-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  color: black;

  &-left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  &-right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
