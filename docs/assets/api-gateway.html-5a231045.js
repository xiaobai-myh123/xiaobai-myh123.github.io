import{_ as p,W as l,X as i,Y as n,Z as a,$ as t,a1 as e,F as o}from"./framework-b5ed7090.js";const c={},u=e('<h2 id="什么是网关-有什么用" tabindex="-1"><a class="header-anchor" href="#什么是网关-有什么用" aria-hidden="true">#</a> 什么是网关？有什么用？</h2><p>微服务背景下，一个系统被拆分为多个服务，但是像安全认证，流量控制，日志，监控等功能是每个服务都需要的，没有网关的话，我们就需要在每个服务中单独实现，这使得我们做了很多重复的事情并且没有一个全局的视图来统一管理这些功能。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/system-design/distributed-system/api-gateway-overview.png" alt="网关示意图"></p><p>一般情况下，网关可以为我们提供请求转发、安全认证（身份/权限认证）、流量控制、负载均衡、降级熔断、日志、监控等功能。</p><p>上面介绍了这么多功能，实际上，网关主要做了一件事情：<strong>请求过滤</strong> 。</p><h2 id="有哪些常见的网关系统" tabindex="-1"><a class="header-anchor" href="#有哪些常见的网关系统" aria-hidden="true">#</a> 有哪些常见的网关系统？</h2><h3 id="netflix-zuul" tabindex="-1"><a class="header-anchor" href="#netflix-zuul" aria-hidden="true">#</a> Netflix Zuul</h3><p>Zuul 是 Netflix 开发的一款提供动态路由、监控、弹性、安全的网关服务。</p><p>Zuul 主要通过过滤器（类似于 AOP）来过滤请求，从而实现网关必备的各种功能。</p><p><img src="https://img-blog.csdnimg.cn/img_convert/865991e34f69f8cb345b4aff918e946e.png" alt="Zuul架构"></p>',10),r={href:"https://github.com/marcosbarbero/spring-cloud-zuul-ratelimit",target:"_blank",rel:"noopener noreferrer"},d=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-zuul<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.marcosbarbero.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-zuul-ratelimit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.0.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zuul 1.x 基于同步 IO，性能较差。Zuul 2.x 基于 Netty 实现了异步 IO，性能得到了大幅改进。</p><ul><li>Github 地址 ： https://github.com/Netflix/zuul</li><li>官方 Wiki ： https://github.com/Netflix/zuul/wiki</li></ul><h3 id="spring-cloud-gateway" tabindex="-1"><a class="header-anchor" href="#spring-cloud-gateway" aria-hidden="true">#</a> Spring Cloud Gateway</h3><p>SpringCloud Gateway 属于 Spring Cloud 生态系统中的网关，其诞生的目标是为了替代老牌网关 **Zuul **。准确点来说，应该是 Zuul 1.x。SpringCloud Gateway 起步要比 Zuul 2.x 更早。</p><p>为了提升网关的性能，SpringCloud Gateway 基于 Spring WebFlux 。Spring WebFlux 使用 Reactor 库来实现响应式编程模型，底层基于 Netty 实现异步 IO。</p><p>Spring Cloud Gateway 的目标，不仅提供统一的路由方式，并且基于 Filter 链的方式提供了网关基本的功能，例如：安全，监控/指标，和限流。</p><p>Spring Cloud Gateway 和 Zuul 2.x 的差别不大，也是通过过滤器来处理请求。不过，目前更加推荐使用 Spring Cloud Gateway 而非 Zuul，Spring Cloud 生态对其支持更加友好。</p><ul><li>Github 地址 ： https://github.com/spring-cloud/spring-cloud-gateway</li><li>官网 ： https://spring.io/projects/spring-cloud-gateway</li></ul><h3 id="kong" tabindex="-1"><a class="header-anchor" href="#kong" aria-hidden="true">#</a> Kong</h3>`,10),g={href:"https://github.com/openresty/",target:"_blank",rel:"noopener noreferrer"},h=e(`<blockquote><p>OpenResty 是一个基于 Nginx 与 Lua 的高性能 Web 平台，其内部集成了大量精良的 Lua 库、第三方模块以及大多数的依赖项。用于方便地搭建能够处理超高并发、扩展性极高的动态 Web 应用、Web 服务和动态网关。</p></blockquote><p>Kong 提供了插件机制来扩展其功能。比如、在服务上启用 Zipkin 插件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-X</span> POST http://kong:8001/services/<span class="token punctuation">{</span>service<span class="token punctuation">}</span>/plugins <span class="token punctuation">\\</span>
    <span class="token parameter variable">--data</span> <span class="token string">&quot;name=zipkin&quot;</span>  <span class="token punctuation">\\</span>
    <span class="token parameter variable">--data</span> <span class="token string">&quot;config.http_endpoint=http://your.zipkin.collector:9411/api/v2/spans&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--data</span> <span class="token string">&quot;config.sample_ratio=0.001&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Github 地址： https://github.com/Kong/kong</li><li>官网地址 ： https://konghq.com/kong</li></ul><h3 id="apisix" tabindex="-1"><a class="header-anchor" href="#apisix" aria-hidden="true">#</a> APISIX</h3><p>APISIX 是一款基于 Nginx 和 etcd 的高性能、云原生、可扩展的网关系统。</p><blockquote><p><em>etcd</em>是使用 Go 语言开发的一个开源的、高可用的分布式 key-value 存储系统，使用 Raft 协议做分布式共识。</p></blockquote><p>与传统 API 网关相比，APISIX 具有动态路由和插件热加载，特别适合微服务系统下的 API 管理。并且，APISIX 与 SkyWalking（分布式链路追踪系统）、Zipkin（分布式链路追踪系统）、Prometheus（监控系统） 等 DevOps 生态工具对接都十分方便。</p><p><img src="https://img-blog.csdnimg.cn/img_convert/727732fad2e943bdd2c502b83ddb1b89.png" alt="apisix架构图"></p><p>作为 NGINX 和 Kong 的替代项目，APISIX 目前已经是 Apache 顶级开源项目，并且是最快毕业的国产开源项目。国内目前已经有很多知名企业（比如金山、有赞、爱奇艺、腾讯、贝壳）使用 APISIX 处理核心的业务流量。</p><p>根据官网介绍：“APISIX 已经生产可用，功能、性能、架构全面优于 Kong”。</p><ul><li>Github 地址 ：https://github.com/apache/apisix</li><li>官网地址： https://apisix.apache.org/zh/</li></ul><p>相关阅读：</p>`,13),k={href:"https://www.apiseven.com/zh/blog/why-we-need-Apache-APISIX",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.apiseven.com/zh/blog",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.apiseven.com/zh/usercases",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"shenyu",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#shenyu","aria-hidden":"true"},"#"),a(" Shenyu")],-1),_=n("p",null,"Shenyu 是一款基于 WebFlux 的可扩展、高性能、响应式网关，Apache 顶级开源项目。",-1),f=n("p",null,[n("img",{src:"https://img-blog.csdnimg.cn/1104eb413cba468cba4dce119165e84e.png",alt:"Shenyu架构"})],-1),x=n("p",null,"Shenyu 通过插件扩展功能，插件是 ShenYu 的灵魂，并且插件也是可扩展和热插拔的。不同的插件实现不同的功能。Shenyu 自带了诸如限流、熔断、转发 、重写、重定向、和路由监控等插件。",-1),y=n("ul",null,[n("li",null,"Github 地址： https://github.com/apache/incubator-shenyu"),n("li",null,"官网地址 ： https://shenyu.apache.org/")],-1);function I(S,w){const s=o("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[a("我们可以自定义过滤器来处理请求，并且，Zuul 生态本身就有很多现成的过滤器供我们使用。就比如限流可以直接用国外朋友写的 "),n("a",r,[a("spring-cloud-zuul-ratelimit"),t(s)]),a(" (这里只是举例说明，一般是配合 hystrix 来做限流)：")]),d,n("p",null,[a("Kong 是一款基于 "),n("a",g,[a("OpenResty"),t(s)]),a(" 的高性能、云原生、可扩展的网关系统。")]),h,n("ul",null,[n("li",null,[n("a",k,[a("有了 NGINX 和 Kong，为什么还需要 Apache APISIX"),t(s)])]),n("li",null,[n("a",b,[a("APISIX 技术博客"),t(s)])]),n("li",null,[n("a",m,[a("APISIX 用户案例"),t(s)])])]),v,_,f,x,y])}const G=p(c,[["render",I],["__file","api-gateway.html.vue"]]);export{G as default};