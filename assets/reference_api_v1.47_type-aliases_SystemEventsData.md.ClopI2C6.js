import{_ as t,c as o,a2 as a,o as d}from"./chunks/framework.DE7eXg1i.js";const p=JSON.parse('{"title":"Type Alias: SystemEventsData","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/SystemEventsData.md","filePath":"reference/api/v1.47/type-aliases/SystemEventsData.md"}'),c={name:"reference/api/v1.47/type-aliases/SystemEventsData.md"};function n(r,e,s,i,l,m){return d(),o("div",null,e[0]||(e[0]=[a('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / SystemEventsData</p><h1 id="type-alias-systemeventsdata" tabindex="-1">Type Alias: SystemEventsData <a class="header-anchor" href="#type-alias-systemeventsdata" aria-label="Permalink to &quot;Type Alias: SystemEventsData&quot;">​</a></h1><blockquote><p><strong>SystemEventsData</strong>: <code>object</code></p></blockquote><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>query</code>?</td><td><code>object</code></td><td>-</td></tr><tr><td><code>query.filters</code>?</td><td><code>string</code></td><td>A JSON encoded value of filters (a <code>map[string][]string</code>) to process on the event list. Available filters: - <code>config=&lt;string&gt;</code> config name or ID - <code>container=&lt;string&gt;</code> container name or ID - <code>daemon=&lt;string&gt;</code> daemon name or ID - <code>event=&lt;string&gt;</code> event type - <code>image=&lt;string&gt;</code> image name or ID - <code>label=&lt;string&gt;</code> image or container label - <code>network=&lt;string&gt;</code> network name or ID - <code>node=&lt;string&gt;</code> node ID - <code>plugin=&lt;string&gt;</code> plugin name or ID - <code>scope=&lt;string&gt;</code> local or swarm - <code>secret=&lt;string&gt;</code> secret name or ID - <code>service=&lt;string&gt;</code> service name or ID - <code>type=&lt;string&gt;</code> object to filter by, one of <code>container</code>, <code>image</code>, <code>volume</code>, <code>network</code>, <code>daemon</code>, <code>plugin</code>, <code>node</code>, <code>service</code>, <code>secret</code> or <code>config</code> - <code>volume=&lt;string&gt;</code> volume name</td></tr><tr><td><code>query.since</code>?</td><td><code>string</code></td><td>Show events created since this timestamp then stream new events.</td></tr><tr><td><code>query.until</code>?</td><td><code>string</code></td><td>Show events created until this timestamp then stop streaming.</td></tr></tbody></table>',5)]))}const y=t(c,[["render",n]]);export{p as __pageData,y as default};