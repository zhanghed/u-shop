<script setup>

</script>

<template>
    <view class="content">
        <!-- logo文字 -->
        <view class="logo">
            <image class="logo-image" src="@/static/images/logo.png"></image>
            <text class="logo-text">u-shop</text>
        </view>
        <!-- 搜索条 -->
        <view class="search">
            <text class="icon-search">搜索</text>
            <text class="icon-scan"></text>
        </view>
    </view>
</template>

<style lang="scss">
.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: $uni-spacing-col-lg;

        .logo-image {
            width: $uni-img-size-lg;
            height: $uni-img-size-lg;
        }

        .logo-text {
            color: $uni-text-color;
            font-size: $uni-font-size-lg;
            margin-left: $uni-spacing-row-lg;
        }
    }

    .search {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: $uni-spacing-col-base;
        color: $uni-text-color-grey;
        font-size: $uni-font-size-base;
        background-color: $uni-bg-color-grey;
        margin-top: $uni-spacing-col-lg;
    }

    .icon-search {
        text-align: center;
        padding: $uni-spacing-col-sm;
    }

    .icon-scan {
        flex: 1;
        text-align: center;
        margin-left: $uni-spacing-row-lg;
    }

}
</style>
