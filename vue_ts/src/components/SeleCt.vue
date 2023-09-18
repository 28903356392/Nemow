<template>
  <span>索引平台</span>&nbsp;&nbsp;
  <el-select v-model="value" class="m-2" placeholder="Select" style="width: 140px; margin-right: 20px">
    <el-option v-for="item in options" :key="item" :label="item" :value="item" />
  </el-select>
</template>

<script setup lang="ts">
const value = ref('filebrowser')

const options = ['filebrowser']
</script>
<style lang="scss" scoped></style>
