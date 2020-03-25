<template>
	<div id="login">
		<!-- 通用头部 -->
		<BaseHead headTitle="登录"></BaseHead>
		<!-- 输入手机号，调起手机号键盘 -->
		<van-field
			v-model="tel"
			type="tel"
			label="手机号"
			label-class="label-align-left"
			class="mt-20"
			placeholder="请输入手机号"
            maxlength="11"
		/>
		<!-- 输入密码 -->
		<van-field
			v-model="password"
			type="password"
			label="密码"
			label-class="label-align-left"
			placeholder="请输入密码"
            maxlength="20"
		/>
		<!-- 登录按钮 -->
		<div class="plr-10 mt-20">
			<van-button :disabled="!tel||!password" type="warning" block>登录</van-button>
		</div>
		<!-- 注册入口 -->
		<div class="txt-c font-12 mt-20">
			<span class="col-999">没有账号？</span>
			<a href="./register" class="col-ff8a00">立即注册</a>
		</div>
		<!-- 登录协议 -->
		<div class="txt-c font-12" style="margin-top:100px;">
			<span class="col-999">登录即代表您已同意</span>
			<a href="./vipProtocol">《用户服务协议》</a>
		</div>
	</div>
</template>

<script>
import BaseHead from "@/components/BaseHead.vue";
import { Button, Field } from "vant";

export default {
	name: "login",
	data() {
		return {
			tel: "",
			password: ""
		};
	},
	components: {
		BaseHead,
		[Button.name]: Button,
		[Field.name]: Field
	},
	methods: {
		test() {
			console.log(123);
			this.sms = 1235;
		}
	},
	created: function() {
		this.$api.getGoldPrice().then(res => {
			console.log(res.data);
		});
	}
};
</script>
<style lang="scss" scoped>
#login {
	/deep/ .label-align-left {
		display: flex;
	}
	/deep/ .van-button--warning {
		color: #fff;
		background-color: #ffbb18;
		border: 1px solid #ffbb18;
	}
}
</style>
