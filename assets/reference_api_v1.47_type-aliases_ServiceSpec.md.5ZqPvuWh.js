import{_ as e,c as d,a2 as o,o as a}from"./chunks/framework.DE7eXg1i.js";const f=JSON.parse('{"title":"Type Alias: ServiceSpec","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/ServiceSpec.md","filePath":"reference/api/v1.47/type-aliases/ServiceSpec.md"}'),c={name:"reference/api/v1.47/type-aliases/ServiceSpec.md"};function r(i,t,n,s,l,u){return a(),d("div",null,t[0]||(t[0]=[o('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / ServiceSpec</p><h1 id="type-alias-servicespec" tabindex="-1">Type Alias: ServiceSpec <a class="header-anchor" href="#type-alias-servicespec" aria-label="Permalink to &quot;Type Alias: ServiceSpec&quot;">​</a></h1><blockquote><p><strong>ServiceSpec</strong>: <code>object</code></p></blockquote><p>User modifiable configuration for a service.</p><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>EndpointSpec</code>?</td><td><a href="./EndpointSpec.html"><code>EndpointSpec</code></a></td><td>-</td></tr><tr><td><code>Labels</code>?</td><td><code>object</code></td><td>User-defined key/value metadata.</td></tr><tr><td><code>Mode</code>?</td><td><code>object</code></td><td>Scheduling mode for the service.</td></tr><tr><td><code>Mode.Global</code>?</td><td><code>unknown</code></td><td>-</td></tr><tr><td><code>Mode.GlobalJob</code>?</td><td><code>unknown</code></td><td>The mode used for services which run a task to the completed state on each valid node.</td></tr><tr><td><code>Mode.Replicated</code>?</td><td><code>object</code></td><td>-</td></tr><tr><td><code>Mode.Replicated.Replicas</code>?</td><td><code>number</code></td><td>-</td></tr><tr><td><code>Mode.ReplicatedJob</code>?</td><td><code>object</code></td><td>The mode used for services with a finite number of tasks that run to a completed state.</td></tr><tr><td><code>Mode.ReplicatedJob.MaxConcurrent</code>?</td><td><code>number</code></td><td>The maximum number of replicas to run simultaneously.</td></tr><tr><td><code>Mode.ReplicatedJob.TotalCompletions</code>?</td><td><code>number</code></td><td>The total number of replicas desired to reach the Completed state. If unset, will default to the value of <code>MaxConcurrent</code></td></tr><tr><td><code>Name</code>?</td><td><code>string</code></td><td>Name of the service.</td></tr><tr><td><code>Networks</code>?</td><td><a href="./NetworkAttachmentConfig.html"><code>NetworkAttachmentConfig</code></a>[]</td><td>Specifies which networks the service should attach to. Deprecated: This field is deprecated since v1.44. The Networks field in TaskSpec should be used instead.</td></tr><tr><td><code>RollbackConfig</code>?</td><td><code>object</code></td><td>Specification for the rollback strategy of the service.</td></tr><tr><td><code>RollbackConfig.Delay</code>?</td><td><code>number</code></td><td>Amount of time between rollback iterations, in nanoseconds.</td></tr><tr><td><code>RollbackConfig.FailureAction</code>?</td><td><code>&quot;continue&quot;</code> | <code>&quot;pause&quot;</code></td><td>Action to take if an rolled back task fails to run, or stops running during the rollback.</td></tr><tr><td><code>RollbackConfig.MaxFailureRatio</code>?</td><td><code>number</code></td><td>The fraction of tasks that may fail during a rollback before the failure action is invoked, specified as a floating point number between 0 and 1.</td></tr><tr><td><code>RollbackConfig.Monitor</code>?</td><td><code>number</code></td><td>Amount of time to monitor each rolled back task for failures, in nanoseconds.</td></tr><tr><td><code>RollbackConfig.Order</code>?</td><td><code>&quot;stop-first&quot;</code> | <code>&quot;start-first&quot;</code></td><td>The order of operations when rolling back a task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down.</td></tr><tr><td><code>RollbackConfig.Parallelism</code>?</td><td><code>number</code></td><td>Maximum number of tasks to be rolled back in one iteration (0 means unlimited parallelism).</td></tr><tr><td><code>TaskTemplate</code>?</td><td><a href="./TaskSpec.html"><code>TaskSpec</code></a></td><td>-</td></tr><tr><td><code>UpdateConfig</code>?</td><td><code>object</code></td><td>Specification for the update strategy of the service.</td></tr><tr><td><code>UpdateConfig.Delay</code>?</td><td><code>number</code></td><td>Amount of time between updates, in nanoseconds.</td></tr><tr><td><code>UpdateConfig.FailureAction</code>?</td><td><code>&quot;continue&quot;</code> | <code>&quot;pause&quot;</code> | <code>&quot;rollback&quot;</code></td><td>Action to take if an updated task fails to run, or stops running during the update.</td></tr><tr><td><code>UpdateConfig.MaxFailureRatio</code>?</td><td><code>number</code></td><td>The fraction of tasks that may fail during an update before the failure action is invoked, specified as a floating point number between 0 and 1.</td></tr><tr><td><code>UpdateConfig.Monitor</code>?</td><td><code>number</code></td><td>Amount of time to monitor each updated task for failures, in nanoseconds.</td></tr><tr><td><code>UpdateConfig.Order</code>?</td><td><code>&quot;stop-first&quot;</code> | <code>&quot;start-first&quot;</code></td><td>The order of operations when rolling out an updated task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down.</td></tr><tr><td><code>UpdateConfig.Parallelism</code>?</td><td><code>number</code></td><td>Maximum number of tasks to be updated in one iteration (0 means unlimited parallelism).</td></tr></tbody></table>',6)]))}const h=e(c,[["render",r]]);export{f as __pageData,h as default};