<script setup>
import { getCategoryAPI } from "@/services/category";
import { onLoad } from "@dcloudio/uni-app";
import { computed, ref } from "vue";
import PageSkeleton from "./components/PageSkeleton.vue";

// 序号
const activeIndex = ref(0);

// 获取分类列表数据
const categoryList = ref([]);
const getCategoryTopData = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
};

// 加载钩子函数
const isFinish = ref(false);
onLoad(async () => {
    await Promise.all([getCategoryTopData()]);
    isFinish.value = true;
});

// 二级分类数据计算属性
const subCategoryList = computed(() => {
    return categoryList.value[activeIndex.value].children || [];
});
</script>

<template>
    <view class="viewport" v-if="isFinish">
        <view class="categories">
            <!-- 左侧：一级分类 -->
            <scroll-view class="primary" scroll-y>
                <view v-for="(item, index) in categoryList" :key="item.id" :class="{ item, active: index === activeIndex }"
                    @tap="activeIndex = index">
                    <text class="name">
                        {{ item.name }}
                    </text>
                </view>
            </scroll-view>
            <!-- 右侧：二级分类 -->
            <scroll-view enable-back-to-top class="secondary" scroll-y>
                <view class="panel" v-for="item in subCategoryList" :key="item.id">
                    <view class="title">
                        <text class="name">{{ item.name }}</text>
                    </view>
                    <view class="section">
                        <navigator v-for="goods in item.goods" :key="goods.id" class="goods" hover-class="none"
                            :url="`/pages/goods/goods?id=${goods.id}`">
                            <image class="image" :src="goods.picture"></image>
                            <view class="name ellipsis">{{ goods.name }}</view>
                            <view class="price">
                                <text class="symbol">¥</text>
                                <text class="number">{{ goods.price }}</text>
                            </view>
                        </navigator>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
    <!-- 骨架屏 -->
    <PageSkeleton v-else></PageSkeleton>
</template>

<style lang="scss" scoped>
.viewport {
    height: 100%;
    display: flex;
    flex-direction: column;

    .categories {
        height: 100%;
        display: flex;

        .primary {
            overflow: hidden;
            width: 22%;
            flex: none;
            background-color: $uni-bg-color-grey;

            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 96rpx;
                font-size: $uni-font-size-base;
                color: $uni-text-color;
                position: relative;
            }

            .active {
                background-color: $uni-bg-color;
                box-shadow: inset 8rpx 0 $u-shop;
            }
        }

        .secondary {
            background-color: $uni-bg-color;

            .panel {
                padding: $uni-spacing-col-base;
            }

            .title {
                color: $uni-text-color;
                font-size: $uni-font-size-base;
            }

            .section {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                padding: $uni-spacing-col-base 0;

                .goods {
                    width: 170rpx;
                    margin: $uni-spacing-row-sm 0;

                    image {
                        width: 170rpx;
                        height: 170rpx;
                    }

                    .name {
                        padding-top: $uni-spacing-row-sm;
                        font-size: $uni-font-size-sm;
                        color: $uni-text-color;
                    }

                    .price {
                        padding-top: $uni-spacing-row-sm;
                        font-size: $uni-font-size-sm;
                        color: $uni-color-error;
                    }

                    .number {
                        font-size: $uni-font-size-sm;
                        margin-left: 2rpx;
                    }
                }
            }
        }
    }
}
</style>
