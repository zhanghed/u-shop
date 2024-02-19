import { http } from "@/utils/http";

// 广告区域
export const getHomeBannerAPI = () => {
  return http({
    method: "GET",
    url: "/home/banner",
    data: {
      distributionSite: 1,
    },
  });
};

// 分类面板
export const getHomePanelAPI = () => {
  return http({
    method: "GET",
    url: "/home/category/mutli",
  });
};

// src/services/home.ts
/**
 * 猜你喜欢-小程序
 */
export const getHomeGoodsGuessLikeAPI = (data) => {
  return http({
    method: "GET",
    url: "/home/goods/guessLike",
    data,
  });
};
