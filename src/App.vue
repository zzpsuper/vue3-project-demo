<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'

onMounted(() => {
  reqLogin({ username: 'zzp', password: '111111' })
})
// import { ref } from 'vue'
//
// const pageSize4 = ref(100)
// const currentPage4 = ref(4)
// const small = ref(false)
// const disabled = ref(false)
// const background = ref(false)
//递归函数
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">
@import '@/style.css';

.sp {
  color: $color;
}
</style>
