# u-shop

# uniapp 小程序

## 下载 uniapp 官方模板：

`npx degit dcloudio/uni-preset-vue#vite 项目名`

## 添加微信小程序 appid：

```
"mp-weixin": {
"appid": "",
}
```

## 安装依赖：

`pnpm i`

## 运行调试(就是转微信小程序标准)：

`pnpm run dev:mp-weixin`

## 小程序预览调试：

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

## sass

`pnpm i sass -D`

## pinia(注意版本兼容和持久化配置)

`pnpm i pinia -S`
`pnpm i pinia-plugin-persistedstate -S`

## uni-ui

`pnpm i @dcloudio/uni-ui`

```
// pages.json 自动导入组件配置
{
    // 组件自动导入
    "easycom": {
    "autoscan": true,
    "custom": {
            // uni-ui 规则如下配置
            "^uni-(.\*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
        }
    },
}
```

## uni.request 拦截器和请求封装

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

