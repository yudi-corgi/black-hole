import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { shikiPlugin } from "@vuepress/plugin-shiki";

export default defineUserConfig({
  base: "/black-hole/",

  lang: "zh-CN",
  title: "Black Hole",
  description: "个人博客",
  
  theme,

  markdown: {
    headers: {
      level: [1, 2, 3, 4]
    }
  },

  // 搜索插件
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
