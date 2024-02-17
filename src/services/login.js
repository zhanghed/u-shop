import { http } from "@/utils/http";

// 模拟手机号码
export const postLoginWxMinSimpleAPI = (phoneNumber) => {
  return http({
    method: "POST",
    url: "/login/wxMin/simple",
    data: {
      phoneNumber,
    },
  });
};
