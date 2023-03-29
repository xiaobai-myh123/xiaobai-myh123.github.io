const l=JSON.parse('{"key":"v-45ce85f6","path":"/my-blog/software-installation/docker.html","title":"docker 安装","lang":"zh-CN","frontmatter":{"title":"docker 安装","category":["软件安装"],"author":"xiaobai","tag":["docker"],"date":"2023-03-29T00:00:00.000Z","isOriginal":"转载","description":"安装基础软件 👉 日常博客文章，编写docker 若依网址来的 👉 作者：小白 原文：忘记了！！！ 应用容器部署 1. 基本介绍基本介绍 虚拟机问题 虚拟机是带环境安装的一种解决方案。它可以在一种操作系统里面运行另一种操作系统，比如在Windows系统里面运行Linux系统。应用程序对此毫无感知，因为虚拟机看上去跟真实系统一模一样，而对于底层系统来说，虚拟机就是一个普通文件，不需要了就删掉，对其他部分毫无影响。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/my-blog/software-installation/docker.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"docker 安装"}],["meta",{"property":"og:description","content":"安装基础软件 👉 日常博客文章，编写docker 若依网址来的 👉 作者：小白 原文：忘记了！！！ 应用容器部署 1. 基本介绍基本介绍 虚拟机问题 虚拟机是带环境安装的一种解决方案。它可以在一种操作系统里面运行另一种操作系统，比如在Windows系统里面运行Linux系统。应用程序对此毫无感知，因为虚拟机看上去跟真实系统一模一样，而对于底层系统来说，虚拟机就是一个普通文件，不需要了就删掉，对其他部分毫无影响。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xiaobai"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:published_time","content":"2023-03-29T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker 安装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-29T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xiaobai\\"}]}"]]},"headers":[{"level":2,"title":"1. 基本介绍基本介绍","slug":"_1-基本介绍基本介绍","link":"#_1-基本介绍基本介绍","children":[]},{"level":2,"title":"2.下载方式","slug":"_2-下载方式","link":"#_2-下载方式","children":[]},{"level":2,"title":"3.配置镜像","slug":"_3-配置镜像","link":"#_3-配置镜像","children":[]},{"level":2,"title":"4.架构概念","slug":"_4-架构概念","link":"#_4-架构概念","children":[{"level":3,"title":"1.Client 客户端","slug":"_1-client-客户端","link":"#_1-client-客户端","children":[]},{"level":3,"title":"2.Host 主机(Docker 引擎)","slug":"_2-host-主机-docker-引擎","link":"#_2-host-主机-docker-引擎","children":[]},{"level":3,"title":"3.Image 镜像","slug":"_3-image-镜像","link":"#_3-image-镜像","children":[]},{"level":3,"title":"4.Container 容器","slug":"_4-container-容器","link":"#_4-container-容器","children":[]},{"level":3,"title":"5.镜像分层","slug":"_5-镜像分层","link":"#_5-镜像分层","children":[]},{"level":3,"title":"6.Volume 数据卷","slug":"_6-volume-数据卷","link":"#_6-volume-数据卷","children":[]},{"level":3,"title":"Registry 注册中心","slug":"registry-注册中心","link":"#registry-注册中心","children":[]}]},{"level":2,"title":"5.镜像命令","slug":"_5-镜像命令","link":"#_5-镜像命令","children":[{"level":3,"title":"1.查看镜像","slug":"_1-查看镜像","link":"#_1-查看镜像","children":[]},{"level":3,"title":"2.搜索镜像","slug":"_2-搜索镜像","link":"#_2-搜索镜像","children":[]},{"level":3,"title":"3.拉取镜像","slug":"_3-拉取镜像","link":"#_3-拉取镜像","children":[]},{"level":3,"title":"4.删除镜像","slug":"_4-删除镜像","link":"#_4-删除镜像","children":[]}]},{"level":2,"title":"6.容器命令","slug":"_6-容器命令","link":"#_6-容器命令","children":[{"level":3,"title":"1.查看容器","slug":"_1-查看容器","link":"#_1-查看容器","children":[]},{"level":3,"title":"2.创建与启动容器","slug":"_2-创建与启动容器","link":"#_2-创建与启动容器","children":[]},{"level":3,"title":"3.创建并进入容器","slug":"_3-创建并进入容器","link":"#_3-创建并进入容器","children":[]},{"level":3,"title":"4.退出当前容器","slug":"_4-退出当前容器","link":"#_4-退出当前容器","children":[]},{"level":3,"title":"5.守护式方式创建容器","slug":"_5-守护式方式创建容器","link":"#_5-守护式方式创建容器","children":[]},{"level":3,"title":"6.登录守护式容器方式","slug":"_6-登录守护式容器方式","link":"#_6-登录守护式容器方式","children":[]},{"level":3,"title":"7.停止与启动容器","slug":"_7-停止与启动容器","link":"#_7-停止与启动容器","children":[]},{"level":3,"title":"8.文件拷贝","slug":"_8-文件拷贝","link":"#_8-文件拷贝","children":[]},{"level":3,"title":"9.目录挂载","slug":"_9-目录挂载","link":"#_9-目录挂载","children":[]},{"level":3,"title":"10.删除容器","slug":"_10-删除容器","link":"#_10-删除容器","children":[]},{"level":3,"title":"11.查看容器 IP 地址","slug":"_11-查看容器-ip-地址","link":"#_11-查看容器-ip-地址","children":[]}]},{"level":2,"title":"7.应用部署","slug":"_7-应用部署","link":"#_7-应用部署","children":[{"level":3,"title":"1.Nacos","slug":"_1-nacos","link":"#_1-nacos","children":[]},{"level":3,"title":"2.Nginx","slug":"_2-nginx","link":"#_2-nginx","children":[]},{"level":3,"title":"3.Mysql","slug":"_3-mysql","link":"#_3-mysql","children":[]},{"level":3,"title":"4.Redis","slug":"_4-redis","link":"#_4-redis","children":[]}]},{"level":2,"title":"8.镜像构建","slug":"_8-镜像构建","link":"#_8-镜像构建","children":[{"level":3,"title":"1.创建容器","slug":"_1-创建容器","link":"#_1-创建容器","children":[]},{"level":3,"title":"2.拷贝资源","slug":"_2-拷贝资源","link":"#_2-拷贝资源","children":[]},{"level":3,"title":"3.安装资源","slug":"_3-安装资源","link":"#_3-安装资源","children":[]},{"level":3,"title":"4.构建镜像","slug":"_4-构建镜像","link":"#_4-构建镜像","children":[]}]},{"level":2,"title":"9.Dockerfile","slug":"_9-dockerfile","link":"#_9-dockerfile","children":[{"level":3,"title":"1.Dockerfile 常用指令","slug":"_1-dockerfile-常用指令","link":"#_1-dockerfile-常用指令","children":[]},{"level":3,"title":"2.构建镜像","slug":"_2-构建镜像","link":"#_2-构建镜像","children":[]},{"level":3,"title":"3.Dockerfile 实践","slug":"_3-dockerfile-实践","link":"#_3-dockerfile-实践","children":[]},{"level":3,"title":"4.镜像构建历史","slug":"_4-镜像构建历史","link":"#_4-镜像构建历史","children":[]}]},{"level":2,"title":"10.镜像仓库","slug":"_10-镜像仓库","link":"#_10-镜像仓库","children":[{"level":3,"title":"1.注册账号","slug":"_1-注册账号","link":"#_1-注册账号","children":[]},{"level":3,"title":"2.登录账号","slug":"_2-登录账号","link":"#_2-登录账号","children":[]},{"level":3,"title":"3.推送镜像至仓库","slug":"_3-推送镜像至仓库","link":"#_3-推送镜像至仓库","children":[]},{"level":3,"title":"4.查看仓库","slug":"_4-查看仓库","link":"#_4-查看仓库","children":[]},{"level":3,"title":"5.拉取镜像","slug":"_5-拉取镜像","link":"#_5-拉取镜像","children":[]},{"level":3,"title":"6.退出账号","slug":"_6-退出账号","link":"#_6-退出账号","children":[]}]},{"level":2,"title":"11.Docker Compose","slug":"_11-docker-compose","link":"#_11-docker-compose","children":[{"level":3,"title":"1.Compose 安装","slug":"_1-compose-安装","link":"#_1-compose-安装","children":[]},{"level":3,"title":"2.docker-compose.yml 文件详解","slug":"_2-docker-compose-yml-文件详解","link":"#_2-docker-compose-yml-文件详解","children":[]},{"level":3,"title":"3. Compose 常用命令","slug":"_3-compose-常用命令","link":"#_3-compose-常用命令","children":[]}]},{"level":2,"title":"11.项目部署","slug":"_11-项目部署","link":"#_11-项目部署","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":38.44,"words":11532},"filePathRelative":"my-blog/software-installation/docker.md","localizedDate":"2023年3月29日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">安装基础软件</p>\\n<p>👉 日常博客文章，编写docker 若依网址来的</p>\\n<p>👉 作者：小白</p>\\n</div>\\n<blockquote>\\n<p>原文：忘记了！！！</p>\\n</blockquote>\\n<h1> 应用容器部署</h1>\\n<h2> 1. 基本介绍基本介绍</h2>\\n<ul>\\n<li>虚拟机问题</li>\\n</ul>\\n<p>虚拟机是带环境安装的一种解决方案。它可以在一种操作系统里面运行另一种操作系统，比如在<code>Windows</code>系统里面运行<code>Linux</code>系统。应用程序对此毫无感知，因为虚拟机看上去跟真实系统一模一样，而对于底层系统来说，虚拟机就是一个普通文件，不需要了就删掉，对其他部分毫无影响。</p>","copyright":{"author":"xiaobai"},"autoDesc":true}');export{l as data};
