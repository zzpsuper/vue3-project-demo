<script setup lang="ts">
defineProps(['menuList'])
import { useRouter } from 'vue-router'

let $router = useRouter()
let goRoute = (vc) => {
  $router.push(vc.index)
}
</script>
<script lang="ts">
//注意这里需要两个script标签,需要导出组件的名称，不然此组件不能调用到自己
export default {
  name: 'Menu',
}
</script>

<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        v-if="!item.children[0].meta.hidden"
        :index="item.children[0].path"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          {{ item.children[0].meta.title }}
        </template>
      </el-menu-item>
    </template>

    <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<style scoped lang="scss"></style>
