<template>
	<div id="login">
		<headerItem headTitle="登录"></headerItem>
		<!-- 输入手机号，调起手机号键盘 -->
		<van-field v-model="tel" type="tel" label="手机号" label-class="label-align-left" />
		<!-- 输入密码 -->
		<van-field v-model="password" type="password" label="密码" label-class="label-align-left" />
        <div class="flex">
            <div>1</div>
            <div>2</div>
            <div>sadasd</div>
            
        </div>
	</div>
</template>

<script>
import headerItem from "@/components/head.vue";
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
		headerItem,
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
		this.api.getGoldPrice().then(res => {
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
}
</style>
