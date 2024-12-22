import{_ as t,c as a,a2 as o,o as l}from"./chunks/framework.DE7eXg1i.js";const p=JSON.parse('{"title":"Type Alias: VolumeListData","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/VolumeListData.md","filePath":"reference/api/v1.47/type-aliases/VolumeListData.md"}'),d={name:"reference/api/v1.47/type-aliases/VolumeListData.md"};function r(s,e,c,i,n,u){return l(),a("div",null,e[0]||(e[0]=[o('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / VolumeListData</p><h1 id="type-alias-volumelistdata" tabindex="-1">Type Alias: VolumeListData <a class="header-anchor" href="#type-alias-volumelistdata" aria-label="Permalink to &quot;Type Alias: VolumeListData&quot;">​</a></h1><blockquote><p><strong>VolumeListData</strong>: <code>object</code></p></blockquote><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>query</code>?</td><td><code>object</code></td><td>-</td></tr><tr><td><code>query.filters</code>?</td><td><code>string</code></td><td>JSON encoded value of the filters (a <code>map[string][]string</code>) to process on the volumes list. Available filters: - <code>dangling=&lt;boolean&gt;</code> When set to <code>true</code> (or <code>1</code>), returns all volumes that are not in use by a container. When set to <code>false</code> (or <code>0</code>), only volumes that are in use by one or more containers are returned. - <code>driver=&lt;volume-driver-name&gt;</code> Matches volumes based on their driver. - <code>label=&lt;key&gt;</code> or <code>label=&lt;key&gt;:&lt;value&gt;</code> Matches volumes based on the presence of a <code>label</code> alone or a <code>label</code> and a value. - <code>name=&lt;volume-name&gt;</code> Matches all or part of a volume name.</td></tr></tbody></table>',5)]))}const h=t(d,[["render",r]]);export{p as __pageData,h as default};
