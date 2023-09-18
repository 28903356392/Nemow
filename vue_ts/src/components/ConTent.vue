<template>
  <PadIng :pading="text"></PadIng>
  <el-divider border-style="dotted" />
  <div id="content">
    <h4>文件下载</h4>
    <div v-for="(item, key) in text.data" :key="key">
      <p style="display: flex; margin: 10px 0">
        <span style="width: 40px">{{ key + 1 }}</span>
        <span style="width: 80px">{{ ((item as any)._source.file.filesize / 1024 / 1024).toFixed(2) }}M</span>
        <a :href="'http://szhen.memohi.net:8100' + (item as any)._source.path.virtual" @click="open">{{
          (item as any)._source.file.filename.trim()
        }}</a>
      </p>
      <el-divider border-style="dotted" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { filebrowser_search } from '@/api'
import { userAppStrote } from '@/store'
const porps = defineProps({
  searchsd: {
    type: String,
    default: '',
  },
})

interface text_ts {
  start: number
  stop: number
  data: object
}

const text = ref<text_ts>({
  start: 0, // 页数
  stop: 20, // 每页显示个数
  data: [], // 数据
})
watchEffect(() => {
  var query = porps.searchsd == '' ? '' : `q=*${porps.searchsd}*&`
  filebrowser_search(`?${query}size=${text.value.stop}&from=${text.value.start}`).then((res: any) => {
    text.value.data = res.hits.hits
  })
})

// 点击下载的地址匹配
const open = async (e: any) => {
  e.preventDefault()
  var token = await userAppStrote().web_doc()
  console.log(decodeURIComponent(e.target.href))
  window.open(decodeURIComponent(e.target.href), `X-Auth: ${token.data}`)
}
</script>
<style lang="scss" scoped></style>
