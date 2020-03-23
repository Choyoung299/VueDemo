<template>
	<!-- 会员服务协议 -->
	<div id="vip-protocol">
		<!-- 通用头部 -->
		<BaseHead headTitle="会员服务协议"></BaseHead>
		<!-- 协议内容 -->
		<div class="protocol" v-html="vipProtocol">{{vipProtocol}}</div>
	</div>
</template>

<script>
import BaseHead from "@/components/BaseHead.vue";
export default {
	name: "vipProtocol",
	data() {
		return {
			vipProtocol: ""
		};
	},
	components: {
		BaseHead
	},
	created: function() {
		this.api.getVipProtocol().then(res => {
			this.vipProtocol = res.data.data;
		});
	}
};
</script>

<style lang="scss" scoped>
.protocol {
	padding: 5px;
	font-size: 14px;
	max-width: 375px;
	overflow: hidden;
}
</style>