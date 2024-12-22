import{_ as e,c as d,a2 as o,o as r}from"./chunks/framework.DE7eXg1i.js";const g=JSON.parse('{"title":"Type Alias: ContainerInspectResponse","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/ContainerInspectResponse.md","filePath":"reference/api/v1.47/type-aliases/ContainerInspectResponse.md"}'),c={name:"reference/api/v1.47/type-aliases/ContainerInspectResponse.md"};function n(a,t,s,i,h,p){return r(),d("div",null,t[0]||(t[0]=[o('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / ContainerInspectResponse</p><h1 id="type-alias-containerinspectresponse" tabindex="-1">Type Alias: ContainerInspectResponse <a class="header-anchor" href="#type-alias-containerinspectresponse" aria-label="Permalink to &quot;Type Alias: ContainerInspectResponse&quot;">​</a></h1><blockquote><p><strong>ContainerInspectResponse</strong>: <code>object</code></p></blockquote><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>AppArmorProfile</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>Args</code>?</td><td><code>string</code>[]</td><td>The arguments to the command being run</td></tr><tr><td><code>Config</code>?</td><td><a href="./ContainerConfig.html"><code>ContainerConfig</code></a></td><td>-</td></tr><tr><td><code>Created</code>?</td><td><code>string</code></td><td>The time the container was created</td></tr><tr><td><code>Driver</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>ExecIDs</code>?</td><td><code>string</code>[] | <code>null</code></td><td>IDs of exec instances that are running in the container.</td></tr><tr><td><code>GraphDriver</code>?</td><td><a href="./DriverData.html"><code>DriverData</code></a></td><td>-</td></tr><tr><td><code>HostConfig</code>?</td><td><a href="./HostConfig.html"><code>HostConfig</code></a></td><td>-</td></tr><tr><td><code>HostnamePath</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>HostsPath</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>Id</code>?</td><td><code>string</code></td><td>The ID of the container</td></tr><tr><td><code>Image</code>?</td><td><code>string</code></td><td>The container&#39;s image ID</td></tr><tr><td><code>LogPath</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>MountLabel</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>Mounts</code>?</td><td><a href="./MountPoint.html"><code>MountPoint</code></a>[]</td><td>-</td></tr><tr><td><code>Name</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>NetworkSettings</code>?</td><td><a href="./NetworkSettings.html"><code>NetworkSettings</code></a></td><td>-</td></tr><tr><td><code>Path</code>?</td><td><code>string</code></td><td>The path to the command being run</td></tr><tr><td><code>Platform</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>ProcessLabel</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>ResolvConfPath</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>RestartCount</code>?</td><td><code>number</code></td><td>-</td></tr><tr><td><code>SizeRootFs</code>?</td><td><code>number</code></td><td>The total size of all the files in this container.</td></tr><tr><td><code>SizeRw</code>?</td><td><code>number</code></td><td>The size of files that have been created or changed by this container.</td></tr><tr><td><code>State</code>?</td><td><a href="./ContainerState.html"><code>ContainerState</code></a></td><td>-</td></tr></tbody></table>',5)]))}const f=e(c,[["render",n]]);export{g as __pageData,f as default};