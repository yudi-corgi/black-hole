import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    /*{
      text: "如何使用",        // 组名
      icon: "laptop-code",    // 图标
      prefix: "demo/",        // 前缀 url
      link: "demo/",          // 文章链接
      children: "structure",  // 子节点
      collapsible: true       // 是否可折叠，默认 false
    },*/
    {
      text: "Java",
      icon: "book",
      prefix: "posts/java/",
      children: "structure",
      collapsible: true
    },
    {
      text: "框架",
      icon: "book",
      prefix: "posts/framework/",
      children: "structure",
      collapsible: true
    },
    {
      text: "开发技巧",
      icon: "book",
      prefix: "posts/dev_experience/",
      children: "structure",
      collapsible: true
    },
    "intro"
  ],
});
