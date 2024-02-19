<script setup>
defineProps({ list: Array });
</script>

<template>
  <view class="content">
    <swiper :circular="true" :autoplay="true" :interval="3000">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss">
/* 轮播图 */
.content {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  margin-top: $uni-spacing-col-lg;

  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
