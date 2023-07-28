<template>
  <div v-if="!setting.logoHidden" class="logo">
    <img alt="" :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting.ts'
</script>

<style scoped lang="scss">
.logo {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: $base-menu-logo-height;
  padding: 15px;
  color: white;

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }

  p {
    margin-left: 10px;
    font-size: $base-logo-title-font-size;
  }
}
</style>
