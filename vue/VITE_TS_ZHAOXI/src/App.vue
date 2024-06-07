<script setup lang="ts">
import router from "./router"
const routerList= router.options.routes.filter(item=>item.path!='/')

</script>

<template>
    <router-link :to="item.path" v-for="item in routerList">{{ item.name }} | </router-link>
    <router-view></router-view>
</template>

<style scoped>

</style>
