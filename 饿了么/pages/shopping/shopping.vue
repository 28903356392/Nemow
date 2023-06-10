<template>
	<view>
		<u-sticky>
		<u-tabs :list="list2" @change="onli" style="background-color:#F8F8F8 ;"></u-tabs>
		</u-sticky>
		<order-shop :name="name" v-for="(item,index) in 10" :key="index"></order-shop>
	</view>
</template>

<script>
	import orderShop from "@/components/order_shop/order_shop.vue"
	export default {
		data() {
			return {
				name:'全部',
				list2:[{
					name:"全部",
					badge: {
						isDot:true,
					    value: 5,
					}
				},{
					name:"进行中",
					badge: {
						isDot:true,
					    value: 5,
					}
				}
				]
			};
		},
		components:{
			orderShop,
		},
		methods:{
			onli(e){
				this.name=e.name
			}
		}
	}
</script>

<style lang="scss">

</style>
