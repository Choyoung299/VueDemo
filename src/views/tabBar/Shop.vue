<template>
	<div id="shop">
		<div class="nav">
			<div class="flex border-b">
				<div class="col-ff8a00">全部</div>
				<div>工艺金条</div>
				<div>投资金条</div>
				<div>红包矿石</div>
			</div>
            <div class="flex border-b">
                <div class="col-ffbb18">新品</div>
                <div>价格</div>
                <div>筛选</div>
            </div>
		</div>
        <div class="goods">
            
        </div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#shop {
	font-size: 14px;
}
.nav {
	>div div {
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
    >div:nth-child(2) div{
        height: 30px;
        line-height: 30px;
    }
}
</style>