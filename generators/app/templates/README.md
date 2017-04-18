# <%- name %>

> <%- desc %>

## Build Setup

``` bash
# install dependencies，windows上安装node-sass时，需要去github上下载一个文件，可能会失败需要单独安装node-sass模块
npm install --registry=https://registry.npm.taobao.org

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 目录结构

```
-- dist 打包压缩之后的代码，打包命令：npm run build
  | -- static
  |   -- css 样式文件
  |   -- fonts 字体文件
  |   -- img 图片文件
  |   -- js js文件
  |   -- config.js 配置文件
  | index.html
-- src 源码目录
  | -- components 页面通用组件
  | -- directives 自定义指令
  | -- filter 自定义过滤器
  | -- modules 页面模块
  | -- store vuex状态管理配置
  |   -- modules 维护各个模块需要使用的数据
  |  -- index.js 注册vuex的各种配置
  | -- styles 通用的样式配置
  | -- vendor 第三方库；如boostrap的插件
  | -- main.js 页面主入口
  | -- router.js 页面路由配置
-- static
  | -- config.js 通用配置
```

## 代码检测
> 使用了eslint保证代码格式标准，若要去除eslint的规则可以注释掉build/webpack.base.conf.js中line32~40preLoaders的配置。或者配置.eslintignore忽略src目录下的所有js文件检测：src/**/\*.js
