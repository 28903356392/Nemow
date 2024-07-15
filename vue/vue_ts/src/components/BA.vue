<template>
  <div>wwwwwwwwwwwwwwwwwww</div>
</template>
<script setup lang="ts">
import { customRef } from 'vue'
customRef((tarck,trigger)=>{
  return {
    get(){
      tarck()
    },
    set(){
      trigger()
    }
  }
})
</script>