const t=JSON.parse('{"key":"v-295a04b5","path":"/posts/java/java-string.html","title":"Java String 字符串详解","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Java String 字符串详解","description":"讲述 String 的结构、JVM 中的存储方式以及关联的信息","tag":["Java","String"],"date":"2023-12-16T00:00:00.000Z","sticky":true,"category":"Java","cover":"/assets/images/minions_cover15.jpg","icon":"ant-design:field-string-outlined","isOriginal":true,"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/black-hole/posts/java/java-string.html"}],["meta",{"property":"og:site_name","content":"Black Hole"}],["meta",{"property":"og:title","content":"Java String 字符串详解"}],["meta",{"property":"og:description","content":"讲述 String 的结构、JVM 中的存储方式以及关联的信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/black-hole/assets/images/minions_cover15.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T01:02:30.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java String 字符串详解"}],["meta",{"property":"article:author","content":"YUDI-Corgi"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"String"}],["meta",{"property":"article:published_time","content":"2023-12-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-03T01:02:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java String 字符串详解\\",\\"image\\":[\\"https://mister-hope.github.io/black-hole/assets/images/minions_cover15.jpg\\"],\\"datePublished\\":\\"2023-12-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-03T01:02:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"YUDI-Corgi\\",\\"url\\":\\"https://github.com/yudi-corgi\\"}]}"]]},"headers":[{"level":2,"title":"引子","slug":"引子","link":"#引子","children":[]},{"level":2,"title":"String 内部结构","slug":"string-内部结构","link":"#string-内部结构","children":[]},{"level":2,"title":"String 在 JVM 中的存储方式","slug":"string-在-jvm-中的存储方式","link":"#string-在-jvm-中的存储方式","children":[]},{"level":2,"title":"String 的 hash 算法","slug":"string-的-hash-算法","link":"#string-的-hash-算法","children":[]},{"level":2,"title":"StringBuilder 与 StringBuffer","slug":"stringbuilder-与-stringbuffer","link":"#stringbuilder-与-stringbuffer","children":[]}],"git":{"createdTime":1717376550000,"updatedTime":1717376550000,"contributors":[{"name":"YUDI-Corgi","email":"1019509861@qq.com","commits":1}]},"readingTime":{"minutes":0.75,"words":226},"filePathRelative":"posts/java/java-string.md","localizedDate":"2023年12月16日","excerpt":"<h2> 引子</h2>\\n<p>相信每个 Javaer 都遇到这么一个问题，<code>String abc = new String(\\"123\\");</code>，其作为八股文已经是老生常谈的问题，考究的是大伙对对象以及字符串在 JVM 中的存储理解。本篇文章就来深入研究下 String 方方面面的问题。</p>\\n<h2> String 内部结构</h2>\\n<ul>\\n<li>char[] value</li>\\n<li>不可变是否真的不可变？</li>\\n<li>8 / 9 的变化</li>\\n<li>是否线程安全</li>\\n</ul>\\n<h2> String 在 JVM 中的存储方式</h2>\\n"}');export{t as data};