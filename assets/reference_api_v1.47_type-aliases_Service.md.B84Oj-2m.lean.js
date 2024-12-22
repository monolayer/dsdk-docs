import{_ as e,c as d,a2 as o,o as a}from"./chunks/framework.DE7eXg1i.js";const p=JSON.parse('{"title":"Type Alias: Service","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/Service.md","filePath":"reference/api/v1.47/type-aliases/Service.md"}'),c={name:"reference/api/v1.47/type-aliases/Service.md"};function r(s,t,i,n,h,u){return a(),d("div",null,t[0]||(t[0]=[o('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / Service</p><h1 id="type-alias-service" tabindex="-1">Type Alias: Service <a class="header-anchor" href="#type-alias-service" aria-label="Permalink to &quot;Type Alias: Service&quot;">​</a></h1><blockquote><p><strong>Service</strong>: <code>object</code></p></blockquote><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>CreatedAt</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>Endpoint</code>?</td><td><code>object</code></td><td>-</td></tr><tr><td><code>Endpoint.Ports</code>?</td><td><a href="./EndpointPortConfig.html"><code>EndpointPortConfig</code></a>[]</td><td>-</td></tr><tr><td><code>Endpoint.Spec</code>?</td><td><a href="./EndpointSpec.html"><code>EndpointSpec</code></a></td><td>-</td></tr><tr><td><code>Endpoint.VirtualIPs</code>?</td><td><code>object</code>[]</td><td>-</td></tr><tr><td><code>ID</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>JobStatus</code>?</td><td><code>object</code></td><td>The status of the service when it is in one of ReplicatedJob or GlobalJob modes. Absent on Replicated and Global mode services. The JobIteration is an ObjectVersion, but unlike the Service&#39;s version, does not need to be sent with an update request.</td></tr><tr><td><code>JobStatus.JobIteration</code>?</td><td><a href="./ObjectVersion.html"><code>ObjectVersion</code></a></td><td>JobIteration is a value increased each time a Job is executed, successfully or otherwise. &quot;Executed&quot;, in this case, means the job as a whole has been started, not that an individual Task has been launched. A job is &quot;Executed&quot; when its ServiceSpec is updated. JobIteration can be used to disambiguate Tasks belonging to different executions of a job. Though JobIteration will increase with each subsequent execution, it may not necessarily increase by 1, and so JobIteration should not be used to</td></tr><tr><td><code>JobStatus.LastExecution</code>?</td><td><code>string</code></td><td>The last time, as observed by the server, that this job was started.</td></tr><tr><td><code>ServiceStatus</code>?</td><td><code>object</code></td><td>The status of the service&#39;s tasks. Provided only when requested as part of a ServiceList operation.</td></tr><tr><td><code>ServiceStatus.CompletedTasks</code>?</td><td><code>number</code></td><td>The number of tasks for a job that are in the Completed state. This field must be cross-referenced with the service type, as the value of 0 may mean the service is not in a job mode, or it may mean the job-mode service has no tasks yet Completed.</td></tr><tr><td><code>ServiceStatus.DesiredTasks</code>?</td><td><code>number</code></td><td>The number of tasks for the service desired to be running. For replicated services, this is the replica count from the service spec. For global services, this is computed by taking count of all tasks for the service with a Desired State other than Shutdown.</td></tr><tr><td><code>ServiceStatus.RunningTasks</code>?</td><td><code>number</code></td><td>The number of tasks for the service currently in the Running state.</td></tr><tr><td><code>Spec</code>?</td><td><a href="./ServiceSpec.html"><code>ServiceSpec</code></a></td><td>-</td></tr><tr><td><code>UpdatedAt</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>UpdateStatus</code>?</td><td><code>object</code></td><td>The status of a service update.</td></tr><tr><td><code>UpdateStatus.CompletedAt</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>UpdateStatus.Message</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>UpdateStatus.StartedAt</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>UpdateStatus.State</code>?</td><td><code>&quot;updating&quot;</code> | <code>&quot;paused&quot;</code> | <code>&quot;completed&quot;</code></td><td>-</td></tr><tr><td><code>Version</code>?</td><td><a href="./ObjectVersion.html"><code>ObjectVersion</code></a></td><td>-</td></tr></tbody></table>',5)]))}const b=e(c,[["render",r]]);export{p as __pageData,b as default};