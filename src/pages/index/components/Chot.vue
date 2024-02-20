<script setup>
defineProps({ list: Array });
</script>

<template>
  <view class="content">
    <navigator hover-class="none" :url="`/pages/hot/hot?type=${item.type}`" class="navigator" v-for="item in list"
      :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <image class="image" mode="aspectFill" :src="item.pictures[0]"></image>
    </navigator>
  </view>
</template>

<style lang="scss">
.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .navigator {
    width: 48%;
    margin-top: $uni-spacing-col-lg;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: $uni-bg-color-grey;

    .title {
      width: 100%;
      margin-bottom: $uni-spacing-col-sm;

      .title-text {
        font-size: $uni-font-size-base;
        color: $uni-text-color;
      }

      .title-desc {
        margin-left: $uni-spacing-col-sm;
        font-size: $uni-font-size-sm;
        color: $uni-text-color-grey;
      }
    }

    .image {
      width: 100%;
      height: 200rpx;
    }
  }
}
</style>
