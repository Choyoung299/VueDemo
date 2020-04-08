<template>
	<div id="tabbar">
		<van-tabbar v-model="active" active-color="#ffbb18" @change="onChange">
			<van-tabbar-item v-for="(item,index) in tabBar" :key="index" :to="(item.path)">
				<span>{{item.name}}</span>
				<template #icon="props">
					<img :src="props.active ? item.active : item.inactive" />
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
	name: "tabBar",
	data() {
		return {
			active: 2,
			tabBar: [
				{
					path: "/mining",
					name: "挖矿",
					active: require("../assets/img/mining_icon_on.png"),
					inactive: require("../assets/img/mining_icon.png")
				},
				{
					path: "/card",
					name: "名片",
					active: require("../assets/img/card_icon_on.png"),
					inactive: require("../assets/img/card_icon.png")
				},
				{
					path: "/",
					name: "回收",
					active: require("../assets/img/buyback_icon_on.png"),
					inactive: require("../assets/img/buyback_icon.png")
				},
				{
					path: "/shop",
					name: "商城",
					active: require("../assets/img/shop_icon_on.png"),
					inactive: require("../assets/img/shop_icon.png")
				},
				{
					path: "/mine",
					name: "我的",
					active: require("../assets/img/mine_icon_on.png"),
					inactive: require("../assets/img/mine_icon.png")
				}
			]
		};
	},
	components: {
		[Tabbar.name]: Tabbar,
		[TabbarItem.name]: TabbarItem
	},
	methods: {
		onChange(index) {
		}
	},
	created() {
	}
};
</script>

<style lang="scss" scoped>
#tabbar {
	/deep/ .van-tabbar-item__icon img {
		display: block;
		height: 0.6rem;
		width: 0.6rem;
	}
}
</style>