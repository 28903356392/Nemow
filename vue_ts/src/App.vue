<template>
  <div id="ss">{{ init }}</div>
  <h2>{{ count }}</h2>
  <el-button @click="inis">start</el-button>
  <HomeMode />
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { userAppStrote } from './store'
const { count, inis } = userAppStrote()
nextTick(() => {
  inis
})
console.log(count)

const init = ref('asdasd')
</script>
<style lang="scss" scoped></style>
