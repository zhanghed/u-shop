<script setup>
import { ref } from "vue";
const title = ref("Hello123");
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text">
      <text class="title">{{ title }}</text>
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
    height: $uni-img-size-lg;
    width: $uni-img-size-lg;
    // height: 200rpx;
    // width: 200rpx;
    // margin-top: 200rpx;
    // margin-left: auto;
    // margin-right: auto;
    // margin-bottom: 50rpx;
    margin-top: $uni-spacing-col-lg auto;
  }

  .text {
    display: flex;
    justify-content: center;

    .title {
      font-size: $uni-font-size-lg;
      color: $uni-text-color;
    }
  }
}
</style>
