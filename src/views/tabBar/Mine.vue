<template>
	<div id="mine">
		<!-- 通用头部 -->
		<!-- <BaseHead headTitle="我的" hideArrow></BaseHead> -->
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
		<div class="pay flex">
			<div class="flex-cc wh100">
				<img src="../../assets/img/drawmoney.png" />
				<span>提现</span>
			</div>
			<div class="flex-cc wh100">
				<img src="../../assets/img/filling.png" />
				<span>充值</span>
			</div>
		</div>
		<div class="mine-item">
			<div data-id="1">
				<img src="../../assets/img/icon_steady.png" />
				<span>我的订单</span>
			</div>
			<div data-id="2">
				<img src="../../assets/img/icon_my_cart.png" />
				<span>购物车</span>
			</div>
			<div data-id="3">
				<img src="../../assets/img/icon_act_invite.png" />
				<span>邀请</span>
			</div>
		</div>
	</div>
</template>

<script>
import { Cell, CellGroup, Button, Tabbar, TabbarItem } from "vant";
import md5 from "@/assets/utils/md5.js";
import qs from "qs";
export default {
	name: "mine",
	data() {
		return {
		};
	},
	components: {
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
		this.$api
			.login({
				LoginName: 18955822420,
				password: md5.hexMD5("qwerty")
			})
			.then(res => {
				console.log(res);
			});
		this.$api.getGoldPrice().then(res => {
			console.log(res);
		});
	}
};
</script>

<style lang="scss" scoped>
#mine {
	width: 100%;
	height: 100%;
	background: #fafafa;
	font-size: 14px;
	padding-bottom: 50px;
}
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
.pay {
	width: 100%;
	height: 50px;
	margin: 10px auto 0;
	padding: 0 10px;
	color: #fff;
	font-size: 14px;

	div img {
		width: 28px;
		height: 23px;
		margin-right: 5px;
	}
	div:nth-child(1) {
		color: #ff8a00;
		background: #fff;
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	div:nth-child(2) {
		color: #fff;
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		background: linear-gradient(to bottom, #fc0, #ff8a00);
	}
}
.mine-item {
	width: 100%;
	height: 120px;
	display: flex;
	flex-wrap: wrap;
	img {
		width: 30px;
		height: 30px;
	}
	div {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
		margin-top: 20px;
		width: 20%;
		height: 60px;
		color: #666;
	}
}
</style>