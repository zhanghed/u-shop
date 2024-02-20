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

// 热门推荐
export const getHomeHotAPI = () => {
  return http({
    method: "GET",
    url: "/home/hot/mutli",
  });
};

// 猜你喜欢
export const getHomeGuessAPI = (data) => {
  return http({
    method: "GET",
    url: "/home/goods/guessLike",
    data,
  });
};