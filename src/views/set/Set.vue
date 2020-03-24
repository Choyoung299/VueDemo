<template>
	<div id="set">
		<!-- 通用头部 -->
		<BaseHead headTitle="设置"></BaseHead>
		<van-cell-group>
			<van-cell center is-link title="188***8888" value="已认证" />
			<van-cell center is-link title="密码安全" />
			<van-cell center is-link title="微信关联" />
			<van-cell center is-link title="我的银行卡" />
			<van-cell center is-link title="地址管理" @click="toAddr" />
			<van-cell center is-link title="关于我们" />
			<van-cell center is-link :title="this.count" />
		</van-cell-group>
		<div class="plr-10">
			<van-button class="col-red mt-20" block @click="test">退出登录</van-button>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import BaseHead from "@/components/BaseHead.vue";
import { Cell, CellGroup, Button } from "vant";
export default {
	name: "set",
	data() {
		return {
		};
	},
	components: {
		BaseHead,
		[Button.name]: Button,
		[Cell.name]: Cell,
		[CellGroup.name]: CellGroup
	},
	computed: {

		...mapState({
			count: state => state.count
		})
	},
	methods: {
		toAddr() {
			this.$router.push({ path: "/AddressManage" });
		},
		test() {
			this.$store.dispatch("getParamSync", 3);
		}
	},
	created: function() {
		console.log(this.$store.state.count);
	}
};
</script>

<style lang="scss" scoped>
#set {
	/deep/ .van-cell__title {
		text-align: left;
	}
}
</style>