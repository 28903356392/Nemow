<script setup lang="ts">
import ContentArea from "../../components/ContentArea/index.vue"
import Layout from "../../components/Layout/index.vue"
import MenuClassification from "../../components/MenuClassification/index.vue"
import Navigation from "../../components/Navigation/index.vue"

</script>

<template>
    <Layout />
    <Navigation />
    <MenuClassification />
    <ContentArea />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

</style>
