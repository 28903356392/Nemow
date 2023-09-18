<template>
  <el-input id="search" v-model="searchs" class="search" placeholder="search" clearable />
  <ConTent :searchsd="searchs"></ConTent>
</template>

<script lang="ts" setup>
//!
const searchs = ref('')

watch(searchs, () => {})
</script>
<style lang="scss">
.search {
  .el-input__wrapper {
    background-color: #f0f0f0;

    .el-input__inner {
      background-color: #f0f0f0;
    }
  }
}
</style>
