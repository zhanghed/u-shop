<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import Cnavbar from './components/Cnavbar.vue';
import Cbanner from './components/Cbanner.vue';
import Cpanel from './components/Cpanel.vue';
import Chot from './components/Chot.vue';
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

// 加载钩子
onLoad(async () => {
  await Promise.all([
    getHomeBannerData(),
    getHomePanelData(),
    getHomeHotData(),
  ]);
});
</script>

<template>
  <view class="content">
    <!-- 导航栏 -->
    <Cnavbar></Cnavbar>
    <!-- 轮播图 -->
    <Cbanner :list="bannerList"></Cbanner>
    <!-- 分类面板 -->
    <Cpanel :list="panelList"></Cpanel>
    <!-- 热门推荐 -->
    <Chot :list="hotList"></Chot>
  </view>
</template>

<style lang="scss" scoped>
.content {
  padding: 0 20rpx;
}
</style>
