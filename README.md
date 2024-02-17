# u-shop

## 下载 uniapp 官方模板

`npx degit dcloudio/uni-preset-vue#vite 项目名`

## 添加微信小程序 appid

```
<!-- manifest.json -->
"mp-weixin": {
"appid": "",
}
```

## 安装依赖

`npm i`

## 运行调试(就是转微信小程序标准)

`npm run dev:mp-weixin`

## 小程序预览调试

`项目目录/dist/dev/mp-weixin 目录使用微信开发者工具打开`

## vscode 插件

```
禁用 @builtin typescript 插件
安装 Vue Language Features (Volar)
安装 TypeScript Vue Plugin (Volar)
安装 uni-create-view
安装 uni-helper
安装 uniapp 小程序扩展
```

## 构建界面

### sass

`npm i sass -D`

### uni-ui

`npm i @dcloudio/uni-ui`

```
<!-- // pages.json 自动导入组件配置 -->
// 组件自动引入规则
	"easycom": {
		// 是否开启自动扫描 @/components/$1/$1.vue 组件
		"autoscan": true,
		// 以正则方式自定义组件匹配规则
		"custom": {
			// uni-ui 规则如下配置
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
			// 以 Co 开头的组件，在 components 目录中查找  自定义的
			"^Co(.*)": "@/components/Co$1.vue"
		}
	}
```

## 状态管理

### pinia

`npm i pinia -S`
`npm i pinia-plugin-persistedstate -S`

<!-- 注意版本兼容 -->
`"vue": "^3.2.45","pinia": "^2.0.36",`

```
<!-- main.js -->
import { createSSRApp } from "vue";
import pinia from "./stores";

import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);

	app.use(pinia);
	return {
		app,
	};
}
```
```
<!-- stores/index.js -->
import { createPinia } from "pinia";
import persist from "pinia-plugin-persistedstate";

// 创建 pinia 实例
const pinia = createPinia();
// 使用持久化存储插件
pinia.use(persist);

// 默认导出，给 main.ts 使用
export default pinia;

// 模块统一导出
export * from "./member";
```
```
<!-- stores/member.js -->
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
```

## 数据交互

### uni.request 拦截器和请求函数封装

```
import { useMemberStore } from "@/stores";

// 请求基地址
const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    // 2. 请求超时
    options.timeout = 10000;
    // 3. 添加小程序端请求头标识
    options.header = {
      "source-client": "miniapp",
      ...options.header,
    };
    // 4. 添加 token 请求头标识
    const memberStore = useMemberStore();
    const token = memberStore.profile?.token;
    if (token) {
      options.header.Authorization = token;
    }
  },
};

// 拦截 request 请求
uni.addInterceptor("request", httpInterceptor);
// 拦截 uploadFile 文件上传
uni.addInterceptor("uploadFile", httpInterceptor);

// 封装请求函数
export const http = (options) => {
  // 1. 返回 Promise 对象
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 状态码 2xx，参考 axios 的设计
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          resolve(res.data);
        } else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          const memberStore = useMemberStore();
          memberStore.clearProfile();
          uni.navigateTo({ url: "/pages/login/login" });
          reject(res);
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          uni.showToast({
            icon: "none",
            title: res.data.msg || "其他错误",
          });
          reject(res);
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: "none",
          title: "网络错误",
        });
        reject(err);
      },
    });
  });
};

```
