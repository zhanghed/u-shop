<!-- 骨架屏 需要在微信开发工具中生成 -->
<template name="skeleton">
  <view class="sk-container">
    <view class="content content data-v-83a5a03c data-v-83a5a03c">
      <view is="pages/index/components/Cnavbar" class="data-v-83a5a03c data-v-83a5a03c">
        <view class="content Cnavbar--content">
          <view class="logo Cnavbar--logo">
            <image class="logo-image Cnavbar--logo-image sk-image"></image>
            <text class="logo-text Cnavbar--logo-text sk-transparent sk-text-14-2857-920 sk-text">u-shop</text>
          </view>
          <view class="search Cnavbar--search">
            <text class="search-text Cnavbar--search-text sk-transparent sk-text-14-2857-232 sk-text"
              style="background-position-x: 50%;">搜索</text>
          </view>
        </view>
      </view>
      <scroll-view refresher-enabled="true" scroll-y="true" class="scroll scroll data-v-83a5a03c data-v-83a5a03c">
        <view is="pages/index/components/Cbanner" class="data-v-83a5a03c data-v-83a5a03c">
          <view class="content Cbanner--content">
            <swiper autoplay="false" circular="true" interval="3000" current="0"></swiper>
          </view>
        </view>
        <view is="pages/index/components/Cpanel" class="data-v-83a5a03c data-v-83a5a03c">
          <view class="content Cpanel--content">
            <navigator class="navigator Cpanel--navigator" hover-class="none">
              <image class="icon Cpanel--icon sk-image"></image>
              <text class="text Cpanel--text sk-transparent sk-text-14-2857-410 sk-text">居家</text>
            </navigator>
            <navigator class="navigator Cpanel--navigator" hover-class="none">
              <image class="icon Cpanel--icon sk-image"></image>
              <text class="text Cpanel--text sk-transparent sk-text-14-2857-192 sk-text">锦鲤</text>
            </navigator>
            <navigator class="navigator Cpanel--navigator" hover-class="none">
              <image class="icon Cpanel--icon sk-image"></image>
              <text class="text Cpanel--text sk-transparent sk-text-14-2857-233 sk-text">服饰</text>
            </navigator>
            <navigator class="navigator Cpanel--navigator" hover-class="none">
              <image class="icon Cpanel--icon sk-image"></image>
              <text class="text Cpanel--text sk-transparent sk-text-14-2857-594 sk-text">母婴</text>
            </navigator>
            <navigator class="navigator Cpanel--navigator" hover-class="none">
              <image class="icon Cpanel--icon sk-image"></image>
              <text class="text Cpanel--text sk-transparent sk-text-14-2857-103 sk-text">个护</text>
            </navigator>
            <navigator class="navigator Cpanel--navigator" hover-class="none">
              <image class="icon Cpanel--icon sk-image"></image>
              <text class="text Cpanel--text sk-transparent sk-text-14-2857-236 sk-text">严选</text>
            </navigator>
            <navigator class="navigator Cpanel--navigator" hover-class="none">
              <image class="icon Cpanel--icon sk-image"></image>
              <text class="text Cpanel--text sk-transparent sk-text-14-2857-90 sk-text">数码</text>
            </navigator>
            <navigator class="navigator Cpanel--navigator" hover-class="none">
              <image class="icon Cpanel--icon sk-image"></image>
              <text class="text Cpanel--text sk-transparent sk-text-14-2857-190 sk-text">运动</text>
            </navigator>
            <navigator class="navigator Cpanel--navigator" hover-class="none">
              <image class="icon Cpanel--icon sk-image"></image>
              <text class="text Cpanel--text sk-transparent sk-text-14-2857-506 sk-text">杂项</text>
            </navigator>
            <navigator class="navigator Cpanel--navigator" hover-class="none">
              <image class="icon Cpanel--icon sk-image"></image>
              <text class="text Cpanel--text sk-transparent sk-text-14-2857-263 sk-text">品牌</text>
            </navigator>
          </view>
        </view>
        <view is="pages/index/components/Chot" class="data-v-83a5a03c data-v-83a5a03c">
          <view class="content Chot--content">
            <navigator class="navigator Chot--navigator" hover-class="none">
              <view class="title Chot--title">
                <text class="title-text Chot--title-text sk-transparent sk-text-14-2857-18 sk-text">特惠推荐</text>
                <text class="title-desc Chot--title-desc sk-transparent sk-text-14-2857-543 sk-text">精选全攻略</text>
              </view>
              <image class="image Chot--image sk-image" mode="aspectFill"></image>
            </navigator>
            <navigator class="navigator Chot--navigator" hover-class="none">
              <view class="title Chot--title">
                <text class="title-text Chot--title-text sk-transparent sk-text-14-2857-469 sk-text">爆款推荐</text>
                <text class="title-desc Chot--title-desc sk-transparent sk-text-14-2857-512 sk-text">最受欢迎</text>
              </view>
              <image class="image Chot--image sk-image" mode="aspectFill"></image>
            </navigator>
            <navigator class="navigator Chot--navigator" hover-class="none">
              <view class="title Chot--title">
                <text class="title-text Chot--title-text sk-transparent sk-text-14-2857-99 sk-text">一站买全</text>
                <text class="title-desc Chot--title-desc sk-transparent sk-text-14-2857-676 sk-text">精心优选</text>
              </view>
              <image class="image Chot--image sk-image" mode="aspectFill"></image>
            </navigator>
            <navigator class="navigator Chot--navigator" hover-class="none">
              <view class="title Chot--title">
                <text class="title-text Chot--title-text sk-transparent sk-text-14-2857-385 sk-text">新鲜好物</text>
                <text class="title-desc Chot--title-desc sk-transparent sk-text-14-2857-379 sk-text">生活加分项</text>
              </view>
              <image class="image Chot--image sk-image" mode="aspectFill"></image>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-920 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-232 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-410 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-192 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-233 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-594 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-103 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-236 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-90 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-190 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-506 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-263 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-18 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-543 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 39.2000rpx;
  position: relative !important;
}

.sk-text-14-2857-469 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-512 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 39.2000rpx;
  position: relative !important;
}

.sk-text-14-2857-99 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-676 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 39.2000rpx;
  position: relative !important;
}

.sk-text-14-2857-385 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-379 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 39.2000rpx;
  position: relative !important;
}

.sk-image {
  background: #EFEFEF !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
