const t=JSON.parse('{"key":"v-4c159622","path":"/posts/reprint/sharded_does_not_imply_distributed.html","title":"分片并不意味着分布式","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"分片并不意味着分布式","description":"介绍数据库分片与分布式数据库的区别","tag":["杂谈"],"date":"2023-10-12T00:00:00.000Z","sticky":true,"category":"杂谈","cover":"/assets/images/minions_cover9.jpg","icon":"tabler:blade","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/black-hole/posts/reprint/sharded_does_not_imply_distributed.html"}],["meta",{"property":"og:site_name","content":"Black Hole"}],["meta",{"property":"og:title","content":"分片并不意味着分布式"}],["meta",{"property":"og:description","content":"介绍数据库分片与分布式数据库的区别"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/black-hole/assets/images/minions_cover9.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T13:09:37.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"分片并不意味着分布式"}],["meta",{"property":"article:author","content":"YUDI-Corgi"}],["meta",{"property":"article:tag","content":"杂谈"}],["meta",{"property":"article:published_time","content":"2023-10-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T13:09:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分片并不意味着分布式\\",\\"image\\":[\\"https://mister-hope.github.io/black-hole/\\"],\\"datePublished\\":\\"2023-10-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T13:09:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"YUDI-Corgi\\",\\"url\\":\\"https://github.com/yudi-corgi\\"}]}"]]},"headers":[{"level":2,"title":"写在前头","slug":"写在前头","link":"#写在前头","children":[]},{"level":2,"title":"分片并不意味着分布式 Sharded Does Not Imply Distributed","slug":"分片并不意味着分布式-sharded-does-not-imply-distributed","link":"#分片并不意味着分布式-sharded-does-not-imply-distributed","children":[]},{"level":2,"title":"分片解决方案 Sharding Solutions","slug":"分片解决方案-sharding-solutions","link":"#分片解决方案-sharding-solutions","children":[]},{"level":2,"title":"分布式数据库 Distributed Databases","slug":"分布式数据库-distributed-databases","link":"#分布式数据库-distributed-databases","children":[]}],"git":{"createdTime":1705237729000,"updatedTime":1706965777000,"contributors":[{"name":"YUDI-Corgi","email":"1019509861@qq.com","commits":2}]},"readingTime":{"minutes":8.37,"words":2512},"filePathRelative":"posts/reprint/sharded_does_not_imply_distributed.md","localizedDate":"2023年10月12日","excerpt":"<h2> 写在前头</h2>\\n<p>本篇是 <a href=\\"https://medium.com/@magda7817/sharded-does-not-imply-distributed-572fdafc4040\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Sharded Does Not Imply Distributed</a> 一文的翻译。对于后端人员来说，分片的概念并不陌生，诸如 ElasticSearch、Redis、MySQL 等数据库都有针对于分片的实现方案来解决某些业务场景。文中对数据库分片与分布式数据库的主要区别做了说明，但请注意：<strong>分片数据库也是分布式系统</strong>。</p>"}');export{t as data};