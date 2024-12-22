import{_ as t,c as o,a2 as d,o as a}from"./chunks/framework.DE7eXg1i.js";const m=JSON.parse('{"title":"Type Alias: ClusterVolume","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/ClusterVolume.md","filePath":"reference/api/v1.47/type-aliases/ClusterVolume.md"}'),r={name:"reference/api/v1.47/type-aliases/ClusterVolume.md"};function s(c,e,l,i,n,u){return a(),o("div",null,e[0]||(e[0]=[d('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / ClusterVolume</p><h1 id="type-alias-clustervolume" tabindex="-1">Type Alias: ClusterVolume <a class="header-anchor" href="#type-alias-clustervolume" aria-label="Permalink to &quot;Type Alias: ClusterVolume&quot;">​</a></h1><blockquote><p><strong>ClusterVolume</strong>: <code>object</code></p></blockquote><p>Options and information specific to, and only present on, Swarm CSI cluster volumes.</p><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>CreatedAt</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>ID</code>?</td><td><code>string</code></td><td>The Swarm ID of this volume. Because cluster volumes are Swarm objects, they have an ID, unlike non-cluster volumes. This ID can be used to refer to the Volume instead of the name.</td></tr><tr><td><code>Info</code>?</td><td><code>object</code></td><td>Information about the global status of the volume.</td></tr><tr><td><code>Info.AccessibleTopology</code>?</td><td><a href="./Topology.html"><code>Topology</code></a>[]</td><td>The topology this volume is actually accessible from.</td></tr><tr><td><code>Info.CapacityBytes</code>?</td><td><code>number</code></td><td>The capacity of the volume in bytes. A value of 0 indicates that the capacity is unknown.</td></tr><tr><td><code>Info.VolumeContext</code>?</td><td><code>object</code></td><td>A map of strings to strings returned from the storage plugin when the volume is created.</td></tr><tr><td><code>Info.VolumeID</code>?</td><td><code>string</code></td><td>The ID of the volume as returned by the CSI storage plugin. This is distinct from the volume&#39;s ID as provided by Docker. This ID is never used by the user when communicating with Docker to refer to this volume. If the ID is blank, then the Volume has not been successfully created in the plugin yet.</td></tr><tr><td><code>PublishStatus</code>?</td><td><code>object</code>[]</td><td>The status of the volume as it pertains to its publishing and use on specific nodes</td></tr><tr><td><code>Spec</code>?</td><td><a href="./ClusterVolumeSpec.html"><code>ClusterVolumeSpec</code></a></td><td>-</td></tr><tr><td><code>UpdatedAt</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>Version</code>?</td><td><a href="./ObjectVersion.html"><code>ObjectVersion</code></a></td><td>-</td></tr></tbody></table>',6)]))}const p=t(r,[["render",s]]);export{m as __pageData,p as default};