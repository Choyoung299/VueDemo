<template>
	<div id="app">
		<router-view />
		<BaseTabbar v-show="$route.meta.showTabbar" ></BaseTabbar>
	</div>
</template>
<script>
import BaseTabbar from "@/components/BaseTabBar.vue";
export default {
    name: "App",
    data(){
        return {
            active: "recycle",
        }
    },
	components: {
		BaseTabbar
	}
};
</script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
