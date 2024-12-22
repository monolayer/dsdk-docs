import{_ as e,c as d,a2 as o,o as r}from"./chunks/framework.DE7eXg1i.js";const p=JSON.parse('{"title":"Type Alias: SystemVersion","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/SystemVersion.md","filePath":"reference/api/v1.47/type-aliases/SystemVersion.md"}'),n={name:"reference/api/v1.47/type-aliases/SystemVersion.md"};function a(s,t,i,c,m,h){return r(),d("div",null,t[0]||(t[0]=[o('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / SystemVersion</p><h1 id="type-alias-systemversion" tabindex="-1">Type Alias: SystemVersion <a class="header-anchor" href="#type-alias-systemversion" aria-label="Permalink to &quot;Type Alias: SystemVersion&quot;">​</a></h1><blockquote><p><strong>SystemVersion</strong>: <code>object</code></p></blockquote><p>Response of Engine API: GET &quot;/version&quot;</p><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>ApiVersion</code>?</td><td><code>string</code></td><td>The default (and highest) API version that is supported by the daemon</td></tr><tr><td><code>Arch</code>?</td><td><code>string</code></td><td>The architecture that the daemon is running on</td></tr><tr><td><code>BuildTime</code>?</td><td><code>string</code></td><td>The date and time that the daemon was compiled.</td></tr><tr><td><code>Components</code>?</td><td><code>object</code>[]</td><td>Information about system components</td></tr><tr><td><code>Experimental</code>?</td><td><code>boolean</code></td><td>Indicates if the daemon is started with experimental features enabled. This field is omitted when empty / false.</td></tr><tr><td><code>GitCommit</code>?</td><td><code>string</code></td><td>The Git commit of the source code that was used to build the daemon</td></tr><tr><td><code>GoVersion</code>?</td><td><code>string</code></td><td>The version Go used to compile the daemon, and the version of the Go runtime in use.</td></tr><tr><td><code>KernelVersion</code>?</td><td><code>string</code></td><td>The kernel version (<code>uname -r</code>) that the daemon is running on. This field is omitted when empty.</td></tr><tr><td><code>MinAPIVersion</code>?</td><td><code>string</code></td><td>The minimum API version that is supported by the daemon</td></tr><tr><td><code>Os</code>?</td><td><code>string</code></td><td>The operating system that the daemon is running on (&quot;linux&quot; or &quot;windows&quot;)</td></tr><tr><td><code>Platform</code>?</td><td><code>object</code></td><td>-</td></tr><tr><td><code>Platform.Name</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>Version</code>?</td><td><code>string</code></td><td>The version of the daemon</td></tr></tbody></table>',6)]))}const u=e(n,[["render",a]]);export{p as __pageData,u as default};