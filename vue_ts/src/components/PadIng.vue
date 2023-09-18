<template>
  <div id="pading">
    <SeleCt></SeleCt>
    <el-button-group>
      <el-button type="primary" :icon="ArrowLeft" @click="start('T')">上一页</el-button>
      <el-button type="primary" @click="start('L')">
        下一页<el-icon class="el-icon--right"><ArrowRight /></el-icon>
      </el-button>
    </el-button-group>
    <el-button-group class="ml-4"
      >&nbsp;&nbsp;&nbsp; <span>当前页 : {{ porps.pading.start + 1 }} </span>&nbsp;&nbsp;
      <span>每页个数 :&nbsp;&nbsp;<el-input v-model="porps.pading.stop" style="width: 60px" /></span>
    </el-button-group>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
const porps = defineProps({
  pading: Object, // 内容
}) as Record<string, any>

// 翻页按钮
const start = (data: string) => {
  if (data == 'T') {
    if (porps.pading.start >= 1) {
      porps.pading.start--
    }
  } else {
    porps.pading.start++
  }
}
</script>
<style lang="scss" scoped>
#pading {
  padding: 20px;
  margin-bottom: 20px;
}
</style>
