<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import Cnavbar from './components/Cnavbar.vue';
import Cbanner from './components/Cbanner.vue';
import Cpanel from './components/Cpanel.vue';
import Chot from './components/Chot.vue';
import CCguess from '@/components/CCguess.vue';
import PageSkeleton from "./components/PageSkeleton.vue";
import { getHomeBannerAPI, getHomePanelAPI, getHomeHotAPI } from "@/services/home";

// 轮播图
const bannerList = ref();
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI();
  bannerList.value = res.result;
};

// 分类面板
const panelList = ref();
const getHomePanelData = async () => {
  const res = await getHomePanelAPI();
  panelList.value = res.result;
};

// 热门推荐
const hotList = ref();
const getHomeHotData = async () => {
  const res = await getHomeHotAPI();
  hotList.value = res.result;
};

// 猜你喜欢
const guessRef = ref();

// 滚动触底
const onScrolltolower = () => {
  guessRef.value.getMore();
};

// 下拉刷新
const isTriggered = ref(false);
const onRefresherrefresh = async () => {
  isTriggered.value = true;
  guessRef.value.resetData();
  await Promise.all([
    getHomeBannerData(),
    getHomePanelData(),
    getHomeHotData(),
    guessRef.value.getMore(),
  ]);
  isTriggered.value = false;
};

// 加载钩子
const isLoading = ref(false);
onLoad(async () => {
  isLoading.value = true;
  await Promise.all([
    getHomeBannerData(),
    getHomePanelData(),
    getHomeHotData(),
  ]);
  isLoading.value = false;
});
</script>

<template>
  <view class="content">
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading"></PageSkeleton>
    <template v-else>
      <!-- 导航栏 -->
      <Cnavbar></Cnavbar>
      <scroll-view class="scroll" scroll-y @scrolltolower="onScrolltolower" refresher-enabled
        @refresherrefresh="onRefresherrefresh" :refresher-triggered="isTriggered">
        <!-- <view v-if="isLoading"></view> -->
        <!-- 轮播图 -->
        <Cbanner :list="bannerList"></Cbanner>
        <!-- 分类面板 -->
        <Cpanel :list="panelList"></Cpanel>
        <!-- 热门推荐 -->
        <Chot :list="hotList"></Chot>
        <!-- 猜你喜欢 -->
        <CCguess ref="guessRef"></CCguess>
      </scroll-view>
    </template>
  </view>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20rpx;

  .scroll {
    flex: 1;
    overflow: hidden;
  }
}
</style>
