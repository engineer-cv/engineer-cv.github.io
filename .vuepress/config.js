const nav = require('./config/nav');
const sidebar = require('./config/sidebar');
const friendLink = require('./config/friendLink');
const plugins = require('./config/plugins');

module.exports = {
  title: "Lyk-Study",
  description: "一起来学前端吧 →",
  dest: "dist",
  // base: './',   // 部署的路径配置  hash模式(build)   注释（dev）
  head: [
    ["link", {
      rel: "icon",
      href: "/img/common/favicon.ico"
    }],
    ["meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1,user-scalable=no"
    }],
    ["script", {
      language: "javascript",
      type: "text/javascript",
      src: "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
    }],
    ["script", {
      language: "javascript",
      type: "text/javascript",
      src: "/js/BaiduStatistics.js"
    }]
  ],
  theme: "reco",
  themeConfig: {
    nav,
    sidebar,
    subSidebar: "auto",
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "技术分类"
      },
      tag: {
        location: 3,
        text: "标签"
      }
    },
    friendLink,
    logo: "/img/common/logo.jpg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "最后更新时间",
    author: "coderCV",
    authorAvatar: "/img/common/avatar.jpg",
    record: "无备案-页面托管于github Page",
    startYear: "2021",
    // repo: "https://github.com/lyk19990226/lyk19990226.github.io", // 只有当这条存在时才有编辑跳转链接
    docsBranch: "main",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页！",
    noFoundPageByTencent: false
  },
  plugins,
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {//翻译成中文
      lang: 'zh-CN', 
    }
  }
}


