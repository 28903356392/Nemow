<template>
  <div id="ss">{{ init }}</div>
  <h2>{{ init_s.count }}</h2>
  <el-button @click="init_s.inis">start</el-button>
  <HomeMode />
</template>

<script setup lang="ts">
import { userAppStrote } from './store'
import { users } from '@/api/index'
const init_s = userAppStrote()

const init = ref('asdasd')
users().then(res => {
  console.log(res)
})
ElMessage.error('网络连接异常,请稍后再试!')
</script>
<style lang="scss" scoped></style>
