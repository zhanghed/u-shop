<script setup>
</script>

<template>
    <view class="content">
        <view class="logo">
            <image class="logo-image" src="@/static/images/logo.png"></image>
            <text class="logo-text">u-shop</text>
        </view>
        <view class="search">
            <text class="search-text">搜索</text>
        </view>
    </view>
</template>

<style lang="scss">
.content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

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
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: $uni-spacing-col-base;
        background-color: $uni-bg-color-grey;
        margin-left: $uni-spacing-row-lg;
        padding: $uni-spacing-col-sm;

        .search-text {
            color: $uni-text-color-grey;
            font-size: $uni-font-size-sm;
            text-align: center;
        }
    }
}
</style>
