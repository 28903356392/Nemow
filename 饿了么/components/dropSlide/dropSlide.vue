<template>
	<view class="">
		<u-sticky class="silde_sticky">
		<view class="silde_index">
			<view class="silde_ase">
				<text>综合排序</text>
				<u-icon name="arrow-down" size="10" :bold="true"></u-icon>
			</view>
			<view class="silde_ase">
				<text>分类</text>
				<u-icon name="arrow-down" size="10" :bold="true"></u-icon>
			</view>
			<view class="silde_ase">
				<text>速度</text>
				<u-icon name="arrow-down" size="10" :bold="true"></u-icon>
			</view>
			<view class="silde_ase">
				<text>全部筛选</text>
				<u-icon name="arrow-down" size="10" :bold="true"></u-icon>
			</view>
		</view>
		<view class="silde_nav">
			<view>天天包红包</view>
			<view>见配送</view>
			<view>无门槛红包</view>
			<view>毛尖优惠</view>
		</view>
		</u-sticky>
		<view class="silde_content" v-for="(item,index) in 5" :key="index">
			<image src="../../static/logo.png" mode=""></image>
			<view class="">
				<view class="silde_content_header">
					<text>包红包</text>
					<text>茶白到（地址）</text>
				</view>
				<view class="silde_content_2">
					<view class="silde_content_2_1">
						<text>4.9分</text>.
						<text>月售1000+</text>
					</view>
					<text>30分钟</text>
				</view>
				<view class="silde_content_3">
					<text>起送￥15</text>
					<view class="silde_content_3_2">
						<text>免费配送</text>
						<text>￥3.2</text>
					</view>
				</view>
				<view class="silde_content_4">
					<text>甜品，至于的力量</text>
				</view>
				<view class="silde_content_5">
					<view class="silde_content_5_1">
						<view><text>拼单4元气</text></view>
						<view><text>32减5</text></view>
						<view><text>6元无门槛</text></view>
					</view>
					<view class="silde_content_5_2">
						<u-icon name="arrow-down" size="10" :bold="true"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	export default {
		name: "dropSlide",
		data() {
			return {
               status: 'loadmore'
			};
		}
	}
</script>

<style lang="scss">
	.silde_sticky{
		padding: 20rpx 0;
		background-color: #F6F6F6!important;
	}
	.silde_index {
		margin: 10rpx 0;
		display: flex;
		justify-content: center;

		.silde_ase {
			flex: 1;
			color: #000000;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.silde_nav {
		display: flex;
		color: #000000;
		justify-content: space-between;

		>view {
			padding: 20rpx 20rpx;
			border-radius: 20rpx;
			background-color: #ffffff;
		}
	}

	.silde_content {
		display: flex;
        align-items: center;
		background-color: #ffffff;
		padding: 15rpx;
		border-radius: 10rpx;
		margin-top: 20rpx;
		>image {
			width: 220rpx;
			height: 220rpx;
			margin-right: 10rpx;
		}
        >view{
			flex:1;
			>view{
				&:nth-of-type(n+2){
					padding-top: 10rpx;
				}
			}
		}
		
		.silde_content_header {
			display: flex;
			>text {
				&:nth-of-type(1) {
					background-color: #F87045;
					color: #ffffff;
					border-radius: 10rpx;
					font-size: 20rpx;
					padding:0 5rpx;
					margin: 7rpx 0;
				}

				&:nth-of-type(2) {
					font-size: 32rpx;
					font-weight: 600;
					margin-left: 10rpx;
					
				}
			}
		}
		.silde_content_2{
			
			display: flex;
			justify-content:space-between;
			.silde_content_2_1{
				display: flex;
				text{
					&:nth-of-type(1){
						font-size: 28rpx;
						color: #E06F1E;
						margin-right: 20rpx;
					}
				}
			}
		}
		.silde_content_3{
			display: flex;
			.silde_content_3_2{
				margin-left: 20rpx;
				>text{
					&:nth-of-type(1){
						color: #E06F1E;
					}
					&:nth-of-type(2){
						font-size: 16rpx;
						margin-left: 5rpx;					
						color: #B1B1B2;
						text-decoration:line-through #B1B1B2;
					}
				}
			}
		}
		.silde_content_4{
			>text{
				color: #BE752F;
				background-color: #FFEFE2;
				padding: 5rpx;
				border-radius: 5rpx;
			}
		}
		
		.silde_content_5{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.silde_content_5_1{
				display: flex;
				
				>view{
				   padding:0 5rpx;
				   color: #E6553D;
				   border: 1rpx solid #E6553D;
				   border-radius: 6rpx;
				   &:nth-of-type(n+2){
					   margin-left: 10rpx;
				   }
				   &:nth-of-type(3){
				   	color: #D08D40;
				   	border-color: #D08D40;
				   }
				}
			}
		}
		
	}
</style>