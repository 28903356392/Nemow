<template>
	<view id="content">
		<navi-gation></navi-gation>
	    <grid-index></grid-index>
		<notice-index></notice-index>
		<drop-slide></drop-slide>
	</view>
</template>

<script>
	import naviGation from "@/components/navigation/navigation.vue";
	import gridIndex from "@/components/gridIndex/gridIndex.vue";
	import noticeIndex from "@/components/noticeIndex/noticeIndex.vue";
	import dropSlide from "@/components/dropSlide/dropSlide.vue";
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			naviGation,
			gridIndex,
			noticeIndex,
			dropSlide
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	#content {
		margin: 5rpx 40rpx;
	}
</style>
