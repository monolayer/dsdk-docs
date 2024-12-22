import{_ as a,c as t,a2 as s,o as i}from"./chunks/framework.DE7eXg1i.js";const m=JSON.parse('{"title":"Function: imageGet()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/functions/imageGet.md","filePath":"reference/api/v1.47/functions/imageGet.md"}'),o={name:"reference/api/v1.47/functions/imageGet.md"};function n(r,e,l,d,c,p){return i(),t("div",null,e[0]||(e[0]=[s(`<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / imageGet</p><h1 id="function-imageget" tabindex="-1">Function: imageGet() <a class="header-anchor" href="#function-imageget" aria-label="Permalink to &quot;Function: imageGet()&quot;">​</a></h1><blockquote><p><strong>imageGet</strong>(<code>opts</code>): <code>Promise</code>&lt;<a href="./../type-aliases/ImageGetResponse.html"><code>ImageGetResponse</code></a>&gt;</p></blockquote><p>Export an image</p><p>Get a tarball containing all images and metadata for a repository.</p><p>If <code>name</code> is a specific name and tag (e.g. <code>ubuntu:latest</code>), then only that image (and its parents) are returned. If <code>name</code> is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the <code>repositories</code> file in the tarball, as there were no image names referenced.</p><h3 id="image-tarball-format" tabindex="-1">Image tarball format <a class="header-anchor" href="#image-tarball-format" aria-label="Permalink to &quot;Image tarball format&quot;">​</a></h3><p>An image tarball contains one directory per image layer (named using its long ID), each containing these files:</p><ul><li><code>VERSION</code>: currently <code>1.0</code> - the file format version</li><li><code>json</code>: detailed layer information, similar to <code>docker inspect layer_id</code></li><li><code>layer.tar</code>: A tarfile containing the filesystem changes in this layer</li></ul><p>The <code>layer.tar</code> file contains <code>aufs</code> style <code>.wh..wh.aufs</code> files and directories for storing attribute changes and deletions.</p><p>If the tarball defines a repository, the tarball should also include a <code>repositories</code> file at the root that contains a list of repository and tag names mapped to layer IDs.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hello-world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;latest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><p><code>opts</code></p></td><td><p><a href="./../type-aliases/ExtendedOptions.html"><code>ExtendedOptions</code></a>&lt;<a href="./../type-aliases/ImageGetData.html"><code>ImageGetData</code></a>&gt;</p></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Promise</code>&lt;<a href="./../type-aliases/ImageGetResponse.html"><code>ImageGetResponse</code></a>&gt;</p>`,16)]))}const g=a(o,[["render",n]]);export{m as __pageData,g as default};
