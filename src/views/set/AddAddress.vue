<template>
	<div id="add-addr">
		<!-- 通用头部 -->
		<BaseHead headTitle="添加新地址"></BaseHead>
		<van-address-edit
			:area-list="areaList"
			show-postal
			show-delete
			show-set-default
			show-search-result
			:search-result="searchResult"
			:area-columns-placeholder="['请选择', '请选择', '请选择']"
			@save="onSave"
			@delete="onDelete"
			@change-detail="onChangeDetail"
		/>
	</div>
</template>

<script>
import BaseHead from "@/components/BaseHead.vue";
import areaList from "@/assets/area.js"
import { AddressEdit } from "vant";
export default {
	name: "add-addr",
	data() {
		return {
			areaList,
			searchResult: []
		};
	},
	components: {
		BaseHead,
		[AddressEdit.name]: AddressEdit
	},
	methods: {
		onSave() {
            this.Toast("save");
            this.$router.push({path: '/AddressManage'});
		},
		onDelete() {
			this.Toast("delete");
		},
		onChangeDetail(val) {
			if (val) {
				this.searchResult = [
					{
						name: "黄龙万科中心",
						address: "杭州市西湖区"
                    },
                    {
						name: "黄龙万科中心H",
						address: "杭州市西湖区"
					}
				];
			} else {
				this.searchResult = [];
			}
		}
	}
};
</script>

<style lang="scss" scoped>
#add-addr {
	/deep/ .van-field__label {
		text-align: left;
	}
	/deep/ .van-cell__title {
		text-align: left;
	}
}
</style>