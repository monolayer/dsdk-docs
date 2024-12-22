import{_ as t,c as a,a2 as o,o as s}from"./chunks/framework.DE7eXg1i.js";const m=JSON.parse('{"title":"Function: containerStats()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/functions/containerStats.md","filePath":"reference/api/v1.47/functions/containerStats.md"}'),c={name:"reference/api/v1.47/functions/containerStats.md"};function r(n,e,i,d,l,u){return s(),a("div",null,e[0]||(e[0]=[o('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / containerStats</p><h1 id="function-containerstats" tabindex="-1">Function: containerStats() <a class="header-anchor" href="#function-containerstats" aria-label="Permalink to &quot;Function: containerStats()&quot;">​</a></h1><blockquote><p><strong>containerStats</strong>(<code>opts</code>): <code>Promise</code>&lt;<a href="./../type-aliases/ContainerStatsResponse.html"><code>ContainerStatsResponse</code></a>&gt;</p></blockquote><p>Get container stats based on resource usage</p><p>This endpoint returns a live stream of a container’s resource usage statistics.</p><p>The <code>precpu_stats</code> is the CPU statistic of the <em>previous</em> read, and is used to calculate the CPU usage percentage. It is not an exact copy of the <code>cpu_stats</code> field.</p><p>If either <code>precpu_stats.online_cpus</code> or <code>cpu_stats.online_cpus</code> is nil then for compatibility with older daemons the length of the corresponding <code>cpu_usage.percpu_usage</code> array should be used.</p><p>On a cgroup v2 host, the following fields are not set</p><ul><li><code>blkio_stats</code>: all fields other than <code>io_service_bytes_recursive</code></li><li><code>cpu_stats</code>: <code>cpu_usage.percpu_usage</code></li><li><code>memory_stats</code>: <code>max_usage</code> and <code>failcnt</code> Also, <code>memory_stats.stats</code> fields are incompatible with cgroup v1.</li></ul><p>To calculate the values shown by the <code>stats</code> command of the docker cli tool the following formulas can be used:</p><ul><li>used_memory = <code>memory_stats.usage - memory_stats.stats.cache</code></li><li>available_memory = <code>memory_stats.limit</code></li><li>Memory usage % = <code>(used_memory / available_memory) * 100.0</code></li><li>cpu_delta = <code>cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage</code></li><li>system_cpu_delta = <code>cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage</code></li><li>number_cpus = <code>length(cpu_stats.cpu_usage.percpu_usage)</code> or <code>cpu_stats.online_cpus</code></li><li>CPU usage % = <code>(cpu_delta / system_cpu_delta) * number_cpus * 100.0</code></li></ul><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><p><code>opts</code></p></td><td><p><a href="./../type-aliases/ExtendedOptions.html"><code>ExtendedOptions</code></a>&lt;<a href="./../type-aliases/ContainerStatsData.html"><code>ContainerStatsData</code></a>&gt;</p></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Promise</code>&lt;<a href="./../type-aliases/ContainerStatsResponse.html"><code>ContainerStatsResponse</code></a>&gt;</p>',15)]))}const h=t(c,[["render",r]]);export{m as __pageData,h as default};
