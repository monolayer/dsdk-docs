import{_ as t,c as d,a2 as o,o as a}from"./chunks/framework.DE7eXg1i.js";const u=JSON.parse('{"title":"Type Alias: ServiceLogsData","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/ServiceLogsData.md","filePath":"reference/api/v1.47/type-aliases/ServiceLogsData.md"}'),r={name:"reference/api/v1.47/type-aliases/ServiceLogsData.md"};function c(s,e,i,l,n,p){return a(),d("div",null,e[0]||(e[0]=[o('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / ServiceLogsData</p><h1 id="type-alias-servicelogsdata" tabindex="-1">Type Alias: ServiceLogsData <a class="header-anchor" href="#type-alias-servicelogsdata" aria-label="Permalink to &quot;Type Alias: ServiceLogsData&quot;">​</a></h1><blockquote><p><strong>ServiceLogsData</strong>: <code>object</code></p></blockquote><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>path</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>path.id</code></td><td><code>string</code></td><td>ID or name of the service</td></tr><tr><td><code>query</code>?</td><td><code>object</code></td><td>-</td></tr><tr><td><code>query.details</code>?</td><td><code>boolean</code></td><td>Show service context and extra details provided to logs.</td></tr><tr><td><code>query.follow</code>?</td><td><code>boolean</code></td><td>Keep connection after returning logs.</td></tr><tr><td><code>query.since</code>?</td><td><code>number</code></td><td>Only return logs since this time, as a UNIX timestamp</td></tr><tr><td><code>query.stderr</code>?</td><td><code>boolean</code></td><td>Return logs from <code>stderr</code></td></tr><tr><td><code>query.stdout</code>?</td><td><code>boolean</code></td><td>Return logs from <code>stdout</code></td></tr><tr><td><code>query.tail</code>?</td><td><code>string</code></td><td>Only return this number of log lines from the end of the logs. Specify as an integer or <code>all</code> to output all log lines.</td></tr><tr><td><code>query.timestamps</code>?</td><td><code>boolean</code></td><td>Add timestamps to every log line</td></tr></tbody></table>',5)]))}const g=t(r,[["render",c]]);export{u as __pageData,g as default};