<template>
  <svg :style="{ height, width }">
    <use :href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '16px',
  },
  width: {
    type: String,
    default: '16px',
  },
})
</script>
<style scoped></style>
