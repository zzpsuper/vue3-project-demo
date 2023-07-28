<script setup lang="ts"></script>

<template>
  <div class="tab-bar">
    <div class="tab-bar-left">
      <el-icon style="margin-right: 10px">
        <Expand />
      </el-icon>
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>角色管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tab-bar-right">
      <el-button size="small" icon="Refresh" circle></el-button>
      <el-button size="small" icon="FullScreen" circle></el-button>
      <el-button size="small" icon="Setting" circle></el-button>
      <img src="/public/logo.png" style="width: 64px; height: 64px; margin: 0 10px" alt="" />
      <el-dropdown>
        <span class="el-dropdown-link">
          Admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
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
