<template>
  <div id="ss">{{ init }}</div>
  <h2>{{ userStore.count }}</h2>
  <el-button @click="userStore.inis">start</el-button>
</template>

<script setup lang="ts">
import { userAppStrote } from '@/store'
import { users } from '@/api/index'
const userStore = userAppStrote()
userStore.productType()

const init = ref('asdasd')
users().then(res => {
  console.log(res)
})
</script>
<style lang="scss" scoped></style>
