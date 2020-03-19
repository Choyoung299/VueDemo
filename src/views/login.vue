<template>
	<div id="test">
		<headerItem headTitle="登录"></headerItem>
		<van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
			<van-button slot="button" size="small" type="primary" @click="test">发送验证码</van-button>
		</van-field>
		<div>
			123
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
			sms: ""
		};
	},
	components: {
		headerItem,
		[Button.name]: Button,
		[Field.name]: Field
	},
	methods: {
        test(){
            console.log(123)
            this.sms=1235
        }
    },
	created: function() {
		this.api.getGoldPrice().then(res => {
			console.log(res.data);
		});
		// this.Toast.success({ duration: 800, message: "test" });
		////test git
		console.log("test-git");
	}
};
</script>
<style scoped></style>
