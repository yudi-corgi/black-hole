import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  // {
  //   text: "架构",
  //   icon: "Architecture",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
  {
    text: "精选文章",
    icon: "fluent-emoji-flat:star",
    // prefix: "/posts/framework/spring/",
    children: [
      "/posts/framework/spring/spring_transaction_synchronization.md", 
      "/posts/java/java-string.md"
    ]
  },
  {
    text: "Java",
    icon: "devicon:java",
    link: "https://xiaolincoding.com/mysql/"
  },
  {
    text: "数据库",
    // icon: "mdi:electron-framework",
    icon: "icon-park:blocks-and-arrows",
    link: "https://xiaolincoding.com/mysql/"
  },
  {
    text: "关于作者",
    icon: "openmoji:black-hole",
    link: "/intro.md"
  }
]);
