<template>
	<div id="shop">
		<div class="nav">
			<div class="flex border-b">
				<div
					v-for="(item,index) in navName"
					:key="index"
					:class="[index==navIndex?'col-ff8a00':'']"
					@click="cutNavIndex(index)"
				>{{item}}</div>
			</div>
			<div class="flex border-b">
				<div
					v-for="(item,index) in navClassName"
					:key="index"
					:class="[index==navClassIndex?'col-ffbb18':'']"
					@click="cutNavClassIndex(index)"
				>{{item}}</div>
			</div>
		</div>
		<div class="goods">
			<div v-for="(item,index) in list[navIndex]" :key="index">
				<img :src="item.imgUrl" alt />
				<p>{{item.goodsName}}</p>
				<span class="col-ff8a00">￥{{item.goodsPrice}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "shop",
	data() {
		return {
			navIndex: 0,
			navClassIndex: 0,
			navName: ["全部", "工艺金条", "投资金条", "红包矿石"],
            navClassName: ["新品", "价格", "筛选"],
			list: [
				[
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "全部全部金山聚宝金条",
						goodsPrice: 8888
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "全部全部金山聚宝金条",
						goodsPrice: 8888
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "全部全部金山聚宝金条",
						goodsPrice: 8888
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "全部全部金山聚宝金条",
						goodsPrice: 8888
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "全部全部金山聚宝金条",
						goodsPrice: 8888
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "全部全部金山聚宝金条",
						goodsPrice: 8888
					}
				],
				[
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "工艺金条金山聚宝金条",
						goodsPrice: 6666
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "工艺金条金山聚宝金条",
						goodsPrice: 6666
					}
				],
				[
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "投资金条金山聚宝金条",
						goodsPrice: 1688
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "投资金条金山聚宝金条",
						goodsPrice: 1688
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "投资金条金山聚宝金条",
						goodsPrice: 1688
					}
				],
				[
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "红包矿石金山聚宝金条",
						goodsPrice: 2222
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "红包矿石金山聚宝金条",
						goodsPrice: 2222
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "红包矿石金山聚宝金条",
						goodsPrice: 2222
					},
					{
						imgUrl: require("../../assets/img/buyback.png"),
						goodsName: "红包矿石金山聚宝金条",
						goodsPrice: 2222
					}
				]
			]
		};
	},
	methods: {
		cutNavIndex(index) {
			this.navIndex = index;
		},
		cutNavClassIndex(index) {
			this.navClassIndex = index;
		}
	}
};
</script>

<style lang="scss" scoped>
#shop {
	font-size: 14px;
	height: 100%;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
}
.nav {
	> div div {
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	> div:nth-child(2) div {
		height: 30px;
		line-height: 30px;
	}
}
.goods {
	width: 100%;
	height: 100%;
	padding: 5px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	overflow: auto;
	> div {
		width: 180px;
		height: 250px;
		padding: 0 5px;
		margin-bottom: 5px;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		img {
			width: 180px;
			height: 180px;
		}
		p {
			margin-top: 5px;
			font-size: 12px;
		}
		span {
			margin-top: 5px;
		}
	}
}
</style>