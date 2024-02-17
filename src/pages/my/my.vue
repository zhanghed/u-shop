<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { useMemberStore } from "@/stores";

// 获取会员信息
const memberStore = useMemberStore();

onLoad(async () => {
    if (!memberStore.profile) uni.navigateTo({ url: "/pages/login/login" });
});
</script>

<template>
    <view class="content" v-if="memberStore.profile">
        <image class="logo" :src="memberStore.profile.avatar" mode="aspectFill"></image>
        <view>
            {{ memberStore.profile.nickname || memberStore.profile.account }}
        </view>
    </view>
</template>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
        height: 200rpx;
        width: 200rpx;
        margin-top: 200rpx;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50rpx;
        margin-top: $uni-spacing-col-lg auto;
    }
}
</style>
