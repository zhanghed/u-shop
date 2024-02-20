<script setup>
import { getHomeGuessAPI } from "@/services/home";
import { onMounted, ref } from "vue";

const guessList = ref([]);
const pageParams = {
  page: 1,
  pageSize: 10,
};

// 获取猜你喜欢数据
const finish = ref(false);
let isGet = ref(true);//解决重复加载问题
const getHomeGuessData = async () => {
  if (finish.value === true || !isGet.value) return;
  isGet.value = false;
  const res = await getHomeGuessAPI(pageParams);
  guessList.value.push(...res.result.items);
  if (pageParams.page >= res.result.pages) return (finish.value = true);
  pageParams.page++;
  isGet.value = true;
};

// 重置数据
const resetData = () => {
  pageParams.page = 1;
  guessList.value = [];
  finish.value = false;
};

// 组件挂载完毕
onMounted(() => {
  getHomeGuessData();
});

// 暴露方法
defineExpose({
  resetData,
  getMore: getHomeGuessData,
});
</script>

<template>
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator class="guess-item" v-for="item in guessList" :key="item.id" :url="`/pages/goods/goods?id=${item.id}`">
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text">
    {{ finish ? "没有更多数据了~" : "加载中..." }}
  </view>
</template>

<style lang="scss">
:host {
  display: block;
}

/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #333;
  background-color: #f8f8f8;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: "";
      width: 20rpx;
      height: 20rpx;
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // padding: 0 20rpx;
  background-color: #f8f8f8;

  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }

  .image {
    width: 304rpx;
    height: 304rpx;
  }

  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }

  .small {
    font-size: 80%;
  }
}

// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #999;
  padding: 20rpx 0;
}
</style>
