<script setup>
// import { useGuessList } from "@/composables";
import { useMemberStore } from "@/stores";
import { onLoad } from "@dcloudio/uni-app";
// 获取屏幕边界到安全区域距离
// const { safeAreaInsets } = uni.getSystemInfoSync();
// 订单选项
const orderTypes = [
    { type: "1", text: "待付款", icon: "icon-currency" },
    { type: "2", text: "待发货", icon: "icon-gift" },
    { type: "3", text: "待收货", icon: "icon-check" },
    { type: "4", text: "待评价", icon: "icon-comment" },
];
// 获取会员信息
const memberStore = useMemberStore();

// 组合式函数;
// const { guessRef, onScrolltolower } = useGuessList();

onLoad(async () => {
    if (!memberStore.profile) uni.navigateTo({ url: "/pages/login/login" });
});
</script>

<template>
    <scroll-view enable-back-to-top @scrolltolower="" class="viewport" scroll-y>
        <!-- 个人资料 -->
        <view class="profile">
            <view class="overview">
                <navigator url="/pagesMember/profile/profile" hover-class="none">
                    <image class="avatar" :src="memberStore.profile.avatar" mode="aspectFill"></image>
                </navigator>
                <view class="meta">
                    <view class="nickname">
                        {{ memberStore.profile.nickname || memberStore.profile.account }}
                    </view>
                </view>
            </view>
            <navigator class="settings" url="/pagesMember/settings/settings" hover-class="none">
                <view>设置</view>
            </navigator>
        </view>
        <!-- 我的订单 -->
        <view class="orders">
            <view class="title">
                我的订单
            </view>
            <view class="section">
                <!-- 订单 -->
                <navigator v-for="item in orderTypes" :key="item.type" :class="item.icon"
                    :url="`/pagesOrder/list/list?type=${item.type}`" class="navigator" hover-class="none">
                    {{ item.text }}
                </navigator>
                <!-- 客服 -->
                <!-- #ifdef MP-WEIXIN -->
                <button class="contact icon-handset" open-type="contact">售后</button>
                <!-- #endif -->
            </view>
        </view>
    </scroll-view>
</template>

<style lang="scss" scoped>
.viewport {
    width: 100%;
    height: 100%;
    padding: 0 $uni-spacing-row-base;

    .profile {
        width: 100%;
        height: 15%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: $uni-bg-color;

        .overview {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: $uni-text-color;

            .avatar {
                width: 120rpx;
                height: 120rpx;
                border-radius: 50%;
            }

            .meta {
                margin-left: $uni-spacing-row-sm;

                .nickname {
                    font-size: $uni-font-size-lg;
                }
            }
        }


        .settings {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            font-size: $uni-font-size-sm;
            color: $uni-text-color;
        }
    }

    .orders {
        // position: relative;
        // z-index: 99;
        // padding: 30rpx;
        // margin: 50rpx 20rpx 0;
        background-color: $uni-bg-color-grey;
        // border-radius: 10rpx;
        // box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);

        .title {
            // height: 40rpx;
            // line-height: 40rpx;
            font-size: $uni-font-size-base;
            color: $uni-text-color;
        }

        .section {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 40rpx 20rpx 10rpx;
            background-color: #ff9545;

            .navigator,
            .contact {
                text-align: center;
                font-size: 24rpx;
                color: #333;

                // &::before {
                //     display: block;
                //     font-size: 60rpx;
                //     color: #ff9545;
                // }

                // &::after {
                //     border: none;
                // }
            }

            .contact {
                padding: 0;
                margin: 0;
                border: 0;
                background-color: transparent;
                line-height: inherit;
            }
        }
    }
}
</style>
