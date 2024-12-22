import{_ as e,c as o,a2 as d,o as a}from"./chunks/framework.DE7eXg1i.js";const h=JSON.parse('{"title":"Type Alias: ContainerLogsData","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/ContainerLogsData.md","filePath":"reference/api/v1.47/type-aliases/ContainerLogsData.md"}'),r={name:"reference/api/v1.47/type-aliases/ContainerLogsData.md"};function n(c,t,s,i,l,p){return a(),o("div",null,t[0]||(t[0]=[d('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / ContainerLogsData</p><h1 id="type-alias-containerlogsdata" tabindex="-1">Type Alias: ContainerLogsData <a class="header-anchor" href="#type-alias-containerlogsdata" aria-label="Permalink to &quot;Type Alias: ContainerLogsData&quot;">​</a></h1><blockquote><p><strong>ContainerLogsData</strong>: <code>object</code></p></blockquote><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>path</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>path.id</code></td><td><code>string</code></td><td>ID or name of the container</td></tr><tr><td><code>query</code>?</td><td><code>object</code></td><td>-</td></tr><tr><td><code>query.follow</code>?</td><td><code>boolean</code></td><td>Keep connection after returning logs.</td></tr><tr><td><code>query.since</code>?</td><td><code>number</code></td><td>Only return logs since this time, as a UNIX timestamp</td></tr><tr><td><code>query.stderr</code>?</td><td><code>boolean</code></td><td>Return logs from <code>stderr</code></td></tr><tr><td><code>query.stdout</code>?</td><td><code>boolean</code></td><td>Return logs from <code>stdout</code></td></tr><tr><td><code>query.tail</code>?</td><td><code>string</code></td><td>Only return this number of log lines from the end of the logs. Specify as an integer or <code>all</code> to output all log lines.</td></tr><tr><td><code>query.timestamps</code>?</td><td><code>boolean</code></td><td>Add timestamps to every log line</td></tr><tr><td><code>query.until</code>?</td><td><code>number</code></td><td>Only return logs before this time, as a UNIX timestamp</td></tr></tbody></table>',5)]))}const m=e(r,[["render",n]]);export{h as __pageData,m as default};
