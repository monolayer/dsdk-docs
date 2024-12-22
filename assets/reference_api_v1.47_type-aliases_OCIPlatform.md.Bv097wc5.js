import{_ as t,c as a,a2 as o,o as d}from"./chunks/framework.DE7eXg1i.js";const m=JSON.parse('{"title":"Type Alias: OCIPlatform","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/OCIPlatform.md","filePath":"reference/api/v1.47/type-aliases/OCIPlatform.md"}'),r={name:"reference/api/v1.47/type-aliases/OCIPlatform.md"};function i(c,e,n,s,l,p){return d(),a("div",null,e[0]||(e[0]=[o('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / OCIPlatform</p><h1 id="type-alias-ociplatform" tabindex="-1">Type Alias: OCIPlatform <a class="header-anchor" href="#type-alias-ociplatform" aria-label="Permalink to &quot;Type Alias: OCIPlatform&quot;">​</a></h1><blockquote><p><strong>OCIPlatform</strong>: <code>object</code></p></blockquote><p>Describes the platform which the image in the manifest runs on, as defined in the <a href="https://github.com/opencontainers/image-spec/blob/v1.0.1/image-index.md" target="_blank" rel="noreferrer">OCI Image Index Specification</a>.</p><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>architecture</code>?</td><td><code>string</code></td><td>The CPU architecture, for example <code>amd64</code> or <code>ppc64</code>.</td></tr><tr><td><code>os</code>?</td><td><code>string</code></td><td>The operating system, for example <code>linux</code> or <code>windows</code>.</td></tr><tr><td><code>os.features</code>?</td><td><code>string</code>[]</td><td>Optional field specifying an array of strings, each listing a required OS feature (for example on Windows <code>win32k</code>).</td></tr><tr><td><code>os.version</code>?</td><td><code>string</code></td><td>Optional field specifying the operating system version, for example on Windows <code>10.0.19041.1165</code>.</td></tr><tr><td><code>variant</code>?</td><td><code>string</code></td><td>Optional field specifying a variant of the CPU, for example <code>v7</code> to specify ARMv7 when architecture is <code>arm</code>.</td></tr></tbody></table>',6)]))}const h=t(r,[["render",i]]);export{m as __pageData,h as default};