<template>
	<div id="addr">
		<!-- 通用头部 -->
		<BaseHead headTitle="地址管理"></BaseHead>
		<!-- 地址列表 -->
		<van-address-list
			v-model="chosenAddressId"
			:list="list"
			:disabled-list="disabledList"
			disabled-text="以下地址超出配送范围"
			default-tag-text="默认"
			@add="onAdd"
			@edit="onEdit"
		/>
	</div>
</template>

<script>
import BaseHead from "@/components/BaseHead.vue";
import { AddressList } from "vant";

export default {
	name: "addr",
	data() {
		return {
			chosenAddressId: "2",
			list: [
				{
					id: "1",
					name: "张三",
                    tel: "13000000000",
                    isDefault:false,
					address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
				},
				{
					id: "2",
                    name: "李四",
                    isDefault:true,
					tel: "1310000000",
					address: "浙江省杭州市拱墅区莫干山路 50 号"
				}
			],
			disabledList: [
				{
					id: "3",
					name: "王五",
					tel: "1320000000",
					address: "浙江省杭州市滨江区江南大道 15 号"
				}
			]
		};
	},
	components: {
		BaseHead,
		[AddressList.name]: AddressList
	},
	methods: {
		onAdd() {
            this.Toast("新增地址");
            this.$router.push({path: '/AddAddress'});
		},
		onEdit(item, index) {
			this.Toast("编辑地址:" + index);
		}
	}
};
</script>

<style lang="scss" scoped>
#addr{
    background: #f3f3f3;
}
</style>