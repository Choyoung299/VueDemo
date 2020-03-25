<template>
	<div id="mine">
		<!-- 通用头部 -->
		<BaseHead headTitle="我的" hideArrow></BaseHead>
		<div class="mine-info">
			<div class="mine-head flex flex-around">
				<div class="portrait"></div>
				<div class="tel">登录/注册</div>
				<div class="set" @click="toSet">
					<img src="../../assets/img/mine_set.png" />
				</div>
			</div>
			<div class="flex-ac flex-row">
				<div class="balance flex-cc flex-column">
					<span class="font-14">账号余额（元）</span>
					<span class="font-26">8888</span>
				</div>
				<div class="balance flex-cc flex-column">
					<span class="font-14">黄金克重（克）</span>
					<span class="font-26">8888</span>
				</div>
				<div class="balance flex-cc flex-column">
					<span class="font-14">家里有矿（克）</span>
					<span class="font-26">8888</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseHead from "@/components/BaseHead.vue";
import { Cell, CellGroup, Button, Tabbar, TabbarItem } from "vant";
import md5 from "@/assets/utils/md5.js";

//探索如何把qs模块封装进请求里
export default {
	name: "mine",
	data() {
		return {};
	},
	components: {
		BaseHead,
		[Button.name]: Button,
		[Cell.name]: Cell,
		[CellGroup.name]: CellGroup
	},
	methods: {
		toSet() {
			//前往设置页面
			this.$router.push({ path: "/Set" });
		}
	},
	created() {
		this.api
			.login({
				LoginName: 18955822420,
				password: md5.hexMD5("qwerty")
				// password: "qwerty"
			})
			.then(res => {
				console.log(res.data);
			});
	}
};
</script>

<style lang="scss" scoped>
.mine-info {
	width: 100%;
	height: 182.5px;
	background-image: url("../../assets/img/mine_banner.png");
	background-size: 100% 100%;
	overflow: hidden;
	.mine-head {
		width: 100%;
		height: 80px;
		margin-top: 20px;
	}

	.portrait {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		overflow: hidden;
		background-image: url("../../assets/img/icon_head_default.png");
		background-size: 100% 100%;
	}

	.tel {
		font-size: 20px;
		width: 140px;
		height: 40px;
		margin-top: 20px;
		font-style: italic;
		color: #fff;
		left: -10px;
	}

	.set img {
		width: 24px;
		height: 24px;
	}
	.balance {
		margin-top: 20px;
		color: #fff;
	}
}
</style>