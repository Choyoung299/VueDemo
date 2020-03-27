<template>
	<div id="recycle">
		<!-- 通用头部 -->
		<BaseHead headTitle="回收" headBtnText="回收记录" hideArrow></BaseHead>
        <div class="banner"></div>
	</div>
</template>

<script>
import BaseHead from "@/components/BaseHead.vue";
export default {
    name: "recycle",
    data(){
        return{
            
        }
    },
    components: {
		BaseHead
    },
    methods:{
        onHeadRightBtn(){
            console.log(1)
        }
    }
};
</script>

<style>
#recycle{
    height: 100%;
    padding-bottom: 50px;
}
.banner{
    width: 100%;
    height: 170px;
    background: url("../../assets/img/buyback.png");
    background-size: 100% 100%;
}
</style>