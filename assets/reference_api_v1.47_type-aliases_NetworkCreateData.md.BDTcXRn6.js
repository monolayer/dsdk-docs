import{_ as t,c as o,a2 as d,o as r}from"./chunks/framework.DE7eXg1i.js";const p=JSON.parse('{"title":"Type Alias: NetworkCreateData","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/NetworkCreateData.md","filePath":"reference/api/v1.47/type-aliases/NetworkCreateData.md"}'),a={name:"reference/api/v1.47/type-aliases/NetworkCreateData.md"};function c(n,e,i,s,l,h){return r(),o("div",null,e[0]||(e[0]=[d('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / NetworkCreateData</p><h1 id="type-alias-networkcreatedata" tabindex="-1">Type Alias: NetworkCreateData <a class="header-anchor" href="#type-alias-networkcreatedata" aria-label="Permalink to &quot;Type Alias: NetworkCreateData&quot;">​</a></h1><blockquote><p><strong>NetworkCreateData</strong>: <code>object</code></p></blockquote><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>body</code></td><td><code>object</code></td><td>Network configuration</td></tr><tr><td><code>body.Attachable</code>?</td><td><code>boolean</code></td><td>Globally scoped network is manually attachable by regular containers from workers in swarm mode.</td></tr><tr><td><code>body.ConfigFrom</code>?</td><td><a href="./ConfigReference.html"><code>ConfigReference</code></a></td><td>Specifies the source which will provide the configuration for this network. The specified network must be an existing config-only network; see ConfigOnly.</td></tr><tr><td><code>body.ConfigOnly</code>?</td><td><code>boolean</code></td><td>Creates a config-only network. Config-only networks are placeholder networks for network configurations to be used by other networks. Config-only networks cannot be used directly to run containers or services.</td></tr><tr><td><code>body.Driver</code>?</td><td><code>string</code></td><td>Name of the network driver plugin to use.</td></tr><tr><td><code>body.EnableIPv4</code>?</td><td><code>boolean</code></td><td>Enable IPv4 on the network. To disable IPv4, the daemon must be started with experimental features enabled.</td></tr><tr><td><code>body.EnableIPv6</code>?</td><td><code>boolean</code></td><td>Enable IPv6 on the network.</td></tr><tr><td><code>body.Ingress</code>?</td><td><code>boolean</code></td><td>Ingress network is the network which provides the routing-mesh in swarm mode.</td></tr><tr><td><code>body.Internal</code>?</td><td><code>boolean</code></td><td>Restrict external access to the network.</td></tr><tr><td><code>body.IPAM</code>?</td><td><a href="./IPAM.html"><code>IPAM</code></a></td><td>Optional custom IP scheme for the network.</td></tr><tr><td><code>body.Labels</code>?</td><td><code>object</code></td><td>User-defined key/value metadata.</td></tr><tr><td><code>body.Name</code></td><td><code>string</code></td><td>The network&#39;s name.</td></tr><tr><td><code>body.Options</code>?</td><td><code>object</code></td><td>Network specific options to be used by the drivers.</td></tr><tr><td><code>body.Scope</code>?</td><td><code>string</code></td><td>The level at which the network exists (e.g. <code>swarm</code> for cluster-wide or <code>local</code> for machine level).</td></tr></tbody></table>',5)]))}const f=t(a,[["render",c]]);export{p as __pageData,f as default};