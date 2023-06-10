<template>
	<view>
		<u-grid :border="false" col="5">
			<u-grid-item class="icon_grid" v-for="item in icon" :key="item._id" @click="ongrid_home">
				<image :src="item.img" mode="widthFix" style="width: 50rpx;"></image>
				<text class="grid-text">{{item.title}}</text>
			</u-grid-item>
		</u-grid>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		name: "gridIndex",
		data() {
			return {
				icon: [],
			};
		},
		created() {
			this.initHome()
		},
		methods: {
			initHome() {
				this.db.collection("home_icon").where("icon!=null").field("_id,icon.path as img,title").get().then(res => {
					this.icon = res.result.data
				})
			},
			ongrid_home(e){
				uni.navigateTo({
					url:"../../pages/home_icon/add"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.grid-text {
		color: $uni-text-s;
	}
	.icon_grid{
		margin: 20rpx 0;
	}
</style>