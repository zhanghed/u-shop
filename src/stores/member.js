import { defineStore } from "pinia";
import { ref } from "vue";

// 定义 Store
export const useMemberStore = defineStore(
  "member",
  () => {
    // 会员信息
    const profile = ref();

    // 保存会员信息，登录时使用
    const setProfile = (val) => {
      profile.value = val;
    };

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined;
    };

    return {
      profile,
      setProfile,
      clearProfile,
    };
  },
  {
    // 配置持久化
    persist: {
      // 兼容多端的API
      storage: {
        setItem(key, value) {
          return uni.setStorageSync(key, value);
        },
        getItem(key) {
          return uni.getStorageSync(key);
        },
      },
    },
  }
);
