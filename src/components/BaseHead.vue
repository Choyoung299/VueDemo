<template>
	<div id="head" :style="bgColor">
		<div class="goback" @click="goBack">
			<img src="../assets/img/left.png" alt />
		</div>
		<div class="head-title">{{ headTitle }}</div>
		<div @click="onHeadRightBtn()">{{ headBtnText }}</div>
	</div>
</template>

<script>
export default {
	name: "baseHead",
	props: {
		headTitle: String,
		headBtnText: String,
		bgColor: String
	},
	methods: {
		//返回上一页
		goBack() {
			this.$router.go(-1); //返回上一层
		},

		//获取父组件传过来的右侧按钮方法
		onHeadRightBtn() {
			this.$parent.onHeadRightBtn();
		}
	}
};
</script>

<style lang="scss">
#head {
	width: 100%;
	height: 40px;
	background: #fff;
	z-index: 999999;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	padding-right: 10px;
	box-sizing: border-box;
	position: relative;
	border-bottom: 1px solid #f3f3f3;

	.head-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.goback {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 30px;
			height: 30px;
		}
	}
}
</style>
