<script setup>
import { postLoginWxMinSimpleAPI } from "@/services/login";
import { useMemberStore } from "@/stores";


// 模拟手机号码快捷登录（开发练习）
const onGetphonenumberSimple = async () => {
    const res = await postLoginWxMinSimpleAPI("13635903276");
    loginSuccess(res.result);
};

// 保存会员信息
const loginSuccess = (profile) => {
    // 保存会员信息
    const memberStore = useMemberStore();
    memberStore.setProfile(profile);
    // 成功提示
    uni.showToast({ icon: "success", title: "登录成功" });
    setTimeout(() => {
        // 页面跳转
        uni.navigateBack();
    }, 500);
};
</script>

<template>
    <view class="content">
        <image class="logo" src="@/static/images/logo.png"></image>
        <button @tap="onGetphonenumberSimple">
            <text>模拟快捷登录</text>
        </button>
        <view class="tips">登录/注册即视为你同意《服务条款》</view>
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
