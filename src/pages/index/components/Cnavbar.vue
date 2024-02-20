<script setup>
</script>

<template>
    <view class="content">
        <view class="logo">
            <image class="logo-image" src="@/static/images/logo.png"></image>
            <text class="logo-text">u-shop</text>
        </view>
        <view class="rigth">
            <uni-icons class="search" type="search" size="20"></uni-icons>
            <uni-icons class="scan" type="scan" size="20"></uni-icons>
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

    .rigth {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-left: $uni-spacing-row-lg;
        padding: $uni-spacing-col-sm;

        .search {
            margin-right: $uni-spacing-row-lg;
        }
    }
}
</style>
