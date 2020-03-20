<template>
	<div id="set">
		<!-- 通用头部 -->
		<BaseHead headTitle="设置"></BaseHead>
		<van-cell-group>
			<van-cell title="单元格" value="内容内容内容内容内容内容内容" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" />
		</van-cell-group>
	</div>
</template>

<script>
import BaseHead from "@/components/BaseHead.vue";
import { Cell, CellGroup } from "vant";
export default {
	name: "set",
	data() {
		return {};
	},
	components: {
		BaseHead,
		[Cell.name]: Cell,
		[CellGroup.name]: CellGroup
	}
};
</script>

<style lang="scss" scoped>
#set{
    /deep/ .van-cell__title{
        text-align: left;
    }
}
</style>