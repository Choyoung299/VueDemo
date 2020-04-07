<template>
	<div id="recycle">
		<!-- 通用头部 -->
		<BaseHead headTitle="回收" headBtnText="回收记录" hideArrow></BaseHead>
		<!-- banner -->
		<div class="banner"></div>
		<!-- 实时金价 -->
		<div class="w1h40 flex-bc plr-10">
			<div>
				<span class="font-bold">实时金价</span>
				<span class="font-12 col-999 pl-5">(参考上海黄金交易所)</span>
			</div>
			<div>
				<img class="icon_logo16" src="../../assets/img/right.png" alt />
			</div>
		</div>
		<div class="w100 col-ffbb18 mt-20">
			<span class="font-24 mr-5 font-bold">364.39</span>
			<span class="font-14 mt-5">元/克</span>
		</div>
		<!-- 回收流程 -->
		<div class="w1h40 flex-bc plr-10" style="margin-top:40px;">
			<div>
				<span class="font-bold">回收流程</span>
			</div>
			<div class="flex-ec">
                <span class="font-12 col-ffbb18">《回收须知》</span>
				<img class="icon_logo16" src="../../assets/img/right.png" alt />
			</div>
		</div>
		<div>
			<span>实名预约→</span>
			<span>快递/到店→</span>
			<span>检测称重→</span>
			<span>确认结果→</span>
			<span>锁价提现</span>
		</div>
        <!-- 回收按钮 -->
        <div class="w1h50 flex-ac flex-row recycle-btn">
            <div>快递回收</div> 
            <div>门店回收</div>
        </div>
	</div>
</template>

<script>
import BaseHead from "@/components/BaseHead.vue";
export default {
	name: "recycle",
	data() {
		return {};
	},
	components: {
		BaseHead
	},
	methods: {
		onHeadRightBtn() {
			console.log(1);
		}
	}
};
</script>

<style lang="scss" scoped>
#recycle {
	height: 100%;
	padding-bottom: 50px;
	font-size: 14px;
}
.banner {
	width: 100%;
	height: 170px;
	background: url("../../assets/img/buyback.png");
	background-size: 100% 100%;
}
.recycle-btn{
    margin-top: 60px;
    div{
        width: 100px;
        height: 30px;
        background: #ffbb18;
        border-radius: 20px;
        text-align: center;
        line-height: 30px;
        color: #fff;
    }
}
</style>