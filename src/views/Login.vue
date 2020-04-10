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
			<van-button :disabled="!tel||!password" type="warning" block @click="onLogin">登录</van-button>
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
import md5 from "@/assets/utils/md5.js";
import util from "@/assets/utils/util.js";
import Storage from "@/assets/utils/localStorage.js";
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
		onLogin() {
			if (!util.checkParam(this.tel, "phone")) {
				this.Toast("请输入正确的账号");
				return;
			}
			if (!util.checkParam(this.password, "password")) {
				this.Toast("密码不正确");
				return;
			}
			this.$api
				.login({
					LoginName: this.tel,
					password: md5.hexMD5(this.password)
				})
				.then(res => {
					if (res.code == "000000") {
						Storage.set("token", res.data.userInfo.token);
						Storage.set("userInfo", res.data.userInfo);
						this.$router.go(-1);
					}else{
                        this.Toast(res.description)
                    }
				});
		}
	},
	created: function() {
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
