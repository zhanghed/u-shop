<script setup>
defineProps({ list: Array });
</script>

<template>
  <view class="content">
    <navigator class="navigator" hover-class="none" url="/pages/index/index" v-for="item in list" :key="item.id">
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
.content {
  width: 100%;
  margin-top: $uni-spacing-col-lg;
  padding: $uni-spacing-col-lg 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: $uni-bg-color-grey;

  .navigator {
    width: 20%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: $uni-spacing-col-lg;

    .icon {
      width: $uni-img-size-lg;
      height: $uni-img-size-lg;
    }

    .text {
      font-size: $uni-font-size-sm;
      color: $uni-text-color;
    }
  }
}
</style>
