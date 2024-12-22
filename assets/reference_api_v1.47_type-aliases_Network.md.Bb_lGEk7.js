import{_ as t,c as d,a2 as o,o as r}from"./chunks/framework.DE7eXg1i.js";const f=JSON.parse('{"title":"Type Alias: Network","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/Network.md","filePath":"reference/api/v1.47/type-aliases/Network.md"}'),a={name:"reference/api/v1.47/type-aliases/Network.md"};function c(n,e,i,s,l,h){return r(),d("div",null,e[0]||(e[0]=[o('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / Network</p><h1 id="type-alias-network" tabindex="-1">Type Alias: Network <a class="header-anchor" href="#type-alias-network" aria-label="Permalink to &quot;Type Alias: Network&quot;">​</a></h1><blockquote><p><strong>Network</strong>: <code>object</code></p></blockquote><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>Attachable</code>?</td><td><code>boolean</code></td><td>Whether a global / swarm scope network is manually attachable by regular containers from workers in swarm mode.</td></tr><tr><td><code>ConfigFrom</code>?</td><td><a href="./ConfigReference.html"><code>ConfigReference</code></a></td><td>-</td></tr><tr><td><code>ConfigOnly</code>?</td><td><code>boolean</code></td><td>Whether the network is a config-only network. Config-only networks are placeholder networks for network configurations to be used by other networks. Config-only networks cannot be used directly to run containers or services.</td></tr><tr><td><code>Containers</code>?</td><td><code>object</code></td><td>Contains endpoints attached to the network.</td></tr><tr><td><code>Created</code>?</td><td><code>string</code></td><td>Date and time at which the network was created in <a href="https://www.ietf.org/rfc/rfc3339.txt" target="_blank" rel="noreferrer">RFC 3339</a> format with nano-seconds.</td></tr><tr><td><code>Driver</code>?</td><td><code>string</code></td><td>The name of the driver used to create the network (e.g. <code>bridge</code>, <code>overlay</code>).</td></tr><tr><td><code>EnableIPv4</code>?</td><td><code>boolean</code></td><td>Whether the network was created with IPv4 enabled.</td></tr><tr><td><code>EnableIPv6</code>?</td><td><code>boolean</code></td><td>Whether the network was created with IPv6 enabled.</td></tr><tr><td><code>Id</code>?</td><td><code>string</code></td><td>ID that uniquely identifies a network on a single machine.</td></tr><tr><td><code>Ingress</code>?</td><td><code>boolean</code></td><td>Whether the network is providing the routing-mesh for the swarm cluster.</td></tr><tr><td><code>Internal</code>?</td><td><code>boolean</code></td><td>Whether the network is created to only allow internal networking connectivity.</td></tr><tr><td><code>IPAM</code>?</td><td><a href="./IPAM.html"><code>IPAM</code></a></td><td>-</td></tr><tr><td><code>Labels</code>?</td><td><code>object</code></td><td>User-defined key/value metadata.</td></tr><tr><td><code>Name</code>?</td><td><code>string</code></td><td>Name of the network.</td></tr><tr><td><code>Options</code>?</td><td><code>object</code></td><td>Network-specific options uses when creating the network.</td></tr><tr><td><code>Peers</code>?</td><td><a href="./PeerInfo.html"><code>PeerInfo</code></a>[] | <code>null</code></td><td>List of peer nodes for an overlay network. This field is only present for overlay networks, and omitted for other network types.</td></tr><tr><td><code>Scope</code>?</td><td><code>string</code></td><td>The level at which the network exists (e.g. <code>swarm</code> for cluster-wide or <code>local</code> for machine level)</td></tr></tbody></table>',5)]))}const k=t(a,[["render",c]]);export{f as __pageData,k as default};
