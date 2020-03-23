<template>
    <div id="set">
        <!-- 通用头部 -->
        <BaseHead headTitle="设置"></BaseHead>
        <van-cell-group>
            <van-cell center is-link title="188***8888" value="已认证" />
            <van-cell center is-link title="密码安全" />
            <van-cell center is-link title="微信关联" />
            <van-cell center is-link title="我的银行卡" />
            <van-cell center is-link title="地址管理" @click="toAddr" />
            <van-cell center is-link title="关于我们" />
            <van-cell center is-link :title="num" />
        </van-cell-group>
        <div class="plr-10">
            <van-button class="col-red mt-20" block @click="test">退出登录</van-button>
        </div>
    </div>
</template>

<script>
import BaseHead from "@/components/BaseHead.vue";
import { Cell, CellGroup, Button } from "vant";
export default {
    name: "set",
    data() {
        return {
            num: ""
        };
    },
    components: {
        BaseHead,
        [Button.name]: Button,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup
    },
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        toAddr() {
            this.$router.push({ name: "AddressManage" });
        },
        test() {
            this.$store.dispatch("getParamSync", 3);
            this.num = this.count;
            console.log(this.count);
        }
    },
    created: function() {
        console.log(this.$store.state.count);
    }
};
</script>

<style lang="scss" scoped>
#set {
    /deep/ .van-cell__title {
        text-align: left;
    }
}
</style>