import { http } from "@/utils/http";

// 分类列表
export const getCategoryAPI = () => {
  return http({
    method: "GET",
    url: "/category/top",
  });
};
