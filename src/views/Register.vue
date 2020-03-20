<template>
	<div id="register">
		<!-- 通用头部 -->
		<BaseHead headTitle="注册"></BaseHead>
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
			placeholder="请设置6-20位密码"
			maxlength="20"
		/>
		<!-- 获取验证码 -->
		<van-field
			v-model="sms"
			center
			clearable
			label="短信验证码"
			label-class="label-align-left"
			placeholder="请输入短信验证码"
			maxlength="8"
		>
			<van-button slot="button" size="small" type="warning">发送验证码</van-button>
		</van-field>
		<!-- 注册按钮 -->
		<div class="plr-10 mt-20">
			<van-button :disabled="!tel||!password||!sms" type="warning" block>注册</van-button>
		</div>
		<!-- 注册协议 -->
		<div class="txt-c font-12 flex-cc mt-20">
			<van-checkbox v-model="checked" shape="square" icon-size="14px" @click="checkProtocol">
				<span class="col-999">我已阅读并同意</span>
			</van-checkbox>
			<a href="./vipProtocol" style="min-height:19px">《用户服务协议》</a>
		</div>
		<!-- 登录入口 -->
		<div class="txt-c font-12 mt-20">
			<span class="col-999">已有账号？</span>
			<a href="./login" class="col-ff8a00">马上登录</a>
		</div>
	</div>
</template>

<script>
import BaseHead from "@/components/BaseHead.vue";
import { Button, Field, Checkbox } from "vant";
export default {
	name: "register",
	data() {
		return {
			tel: "",
			password: "",
			sms: "",
			checked: false
		};
	},
	components: {
		BaseHead,
		[Button.name]: Button,
		[Field.name]: Field,
		[Checkbox.name]: Checkbox
	},
	methods: {
		checkProtocol() {
			console.log(this.checked);
		}
	}
};
</script>

<style lang="scss" scoped>
#register {
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