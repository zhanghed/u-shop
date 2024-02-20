<script setup>
import { getHomeGuessAPI } from "@/services/home";
import { onMounted, ref } from "vue";

const guessList = ref([]);
const pageParams = {
  page: 1,
  pageSize: 10,
};

// 获取数据
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

// 挂载完毕
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
.caption {
  display: flex;
  justify-content: center;
  margin-top: $uni-spacing-col-lg;
  padding: $uni-spacing-col-lg;
  font-size: $uni-font-size-lg;
  color: $uni-text-color;
  background-color: $uni-bg-color-grey;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: $uni-bg-color-grey;

  .guess-item {
    width: 49%;
    padding: $uni-spacing-row-base;
    margin-bottom: $uni-spacing-col-base;
    overflow: hidden;
    background-color: $uni-bg-color;
  }

  .image {
    width: 100%;
    height: 300rpx;
  }

  .name {
    margin: $uni-spacing-col-base 0;
    font-size: $uni-font-size-sm;
    color: $uni-text-color;
  }

  .price {
    color: #dd524d;
    font-size: $uni-font-size-sm;
  }
}

.loading-text {
  text-align: center;
  font-size: $uni-font-size-lg;
  color: $uni-text-color-grey;
  padding: $uni-spacing-col-lg 0;
}
</style>
