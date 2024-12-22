import{_ as t,c as d,a2 as o,o as c}from"./chunks/framework.DE7eXg1i.js";const h=JSON.parse('{"title":"Type Alias: TaskSpec","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/v1.47/type-aliases/TaskSpec.md","filePath":"reference/api/v1.47/type-aliases/TaskSpec.md"}'),r={name:"reference/api/v1.47/type-aliases/TaskSpec.md"};function n(i,e,a,s,l,p){return c(),d("div",null,e[0]||(e[0]=[o('<p><a href="./../../modules.html">dsdk</a> / <a href="./../">v1.47</a> / TaskSpec</p><h1 id="type-alias-taskspec" tabindex="-1">Type Alias: TaskSpec <a class="header-anchor" href="#type-alias-taskspec" aria-label="Permalink to &quot;Type Alias: TaskSpec&quot;">​</a></h1><blockquote><p><strong>TaskSpec</strong>: <code>object</code></p></blockquote><p>User modifiable task configuration.</p><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>ContainerSpec</code>?</td><td><code>object</code></td><td>Container spec for the service. <p><br></p> &gt; <strong>Note</strong>: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are &gt; mutually exclusive. PluginSpec is only used when the Runtime field &gt; is set to <code>plugin</code>. NetworkAttachmentSpec is used when the Runtime &gt; field is set to <code>attachment</code>.</td></tr><tr><td><code>ContainerSpec.Args</code>?</td><td><code>string</code>[]</td><td>Arguments to the command.</td></tr><tr><td><code>ContainerSpec.CapabilityAdd</code>?</td><td><code>string</code>[]</td><td>A list of kernel capabilities to add to the default set for the container.</td></tr><tr><td><code>ContainerSpec.CapabilityDrop</code>?</td><td><code>string</code>[]</td><td>A list of kernel capabilities to drop from the default set for the container.</td></tr><tr><td><code>ContainerSpec.Command</code>?</td><td><code>string</code>[]</td><td>The command to be run in the image.</td></tr><tr><td><code>ContainerSpec.Configs</code>?</td><td><code>object</code>[]</td><td>Configs contains references to zero or more configs that will be exposed to the service.</td></tr><tr><td><code>ContainerSpec.Dir</code>?</td><td><code>string</code></td><td>The working directory for commands to run in.</td></tr><tr><td><code>ContainerSpec.DNSConfig</code>?</td><td><code>object</code></td><td>Specification for DNS related configurations in resolver configuration file (<code>resolv.conf</code>).</td></tr><tr><td><code>ContainerSpec.DNSConfig.Nameservers</code>?</td><td><code>string</code>[]</td><td>The IP addresses of the name servers.</td></tr><tr><td><code>ContainerSpec.DNSConfig.Options</code>?</td><td><code>string</code>[]</td><td>A list of internal resolver variables to be modified (e.g., <code>debug</code>, <code>ndots:3</code>, etc.).</td></tr><tr><td><code>ContainerSpec.DNSConfig.Search</code>?</td><td><code>string</code>[]</td><td>A search list for host-name lookup.</td></tr><tr><td><code>ContainerSpec.Env</code>?</td><td><code>string</code>[]</td><td>A list of environment variables in the form <code>VAR=value</code>.</td></tr><tr><td><code>ContainerSpec.Groups</code>?</td><td><code>string</code>[]</td><td>A list of additional groups that the container process will run as.</td></tr><tr><td><code>ContainerSpec.HealthCheck</code>?</td><td><a href="./HealthConfig.html"><code>HealthConfig</code></a></td><td>-</td></tr><tr><td><code>ContainerSpec.Hostname</code>?</td><td><code>string</code></td><td>The hostname to use for the container, as a valid <a href="https://tools.ietf.org/html/rfc1123" target="_blank" rel="noreferrer">RFC 1123</a> hostname.</td></tr><tr><td><code>ContainerSpec.Hosts</code>?</td><td><code>string</code>[]</td><td>A list of hostname/IP mappings to add to the container&#39;s <code>hosts</code> file. The format of extra hosts is specified in the <a href="http://man7.org/linux/man-pages/man5/hosts.5.html" target="_blank" rel="noreferrer">hosts(5)</a> man page: IP_address canonical_hostname [aliases...]</td></tr><tr><td><code>ContainerSpec.Image</code>?</td><td><code>string</code></td><td>The image name to use for the container</td></tr><tr><td><code>ContainerSpec.Init</code>?</td><td><code>boolean</code> | <code>null</code></td><td>Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used.</td></tr><tr><td><code>ContainerSpec.Isolation</code>?</td><td><code>&quot;default&quot;</code> | <code>&quot;process&quot;</code> | <code>&quot;hyperv&quot;</code></td><td>Isolation technology of the containers running the service. (Windows only)</td></tr><tr><td><code>ContainerSpec.Labels</code>?</td><td><code>object</code></td><td>User-defined key/value data.</td></tr><tr><td><code>ContainerSpec.Mounts</code>?</td><td><a href="./Mount.html"><code>Mount</code></a>[]</td><td>Specification for mounts to be added to containers created as part of the service.</td></tr><tr><td><code>ContainerSpec.OomScoreAdj</code>?</td><td><code>number</code></td><td>An integer value containing the score given to the container in order to tune OOM killer preferences.</td></tr><tr><td><code>ContainerSpec.OpenStdin</code>?</td><td><code>boolean</code></td><td>Open <code>stdin</code></td></tr><tr><td><code>ContainerSpec.Privileges</code>?</td><td><code>object</code></td><td>Security options for the container</td></tr><tr><td><code>ContainerSpec.Privileges.AppArmor</code>?</td><td><code>object</code></td><td>Options for configuring AppArmor on the container</td></tr><tr><td><code>ContainerSpec.Privileges.AppArmor.Mode</code>?</td><td><code>&quot;default&quot;</code> | <code>&quot;disabled&quot;</code></td><td>-</td></tr><tr><td><code>ContainerSpec.Privileges.CredentialSpec</code>?</td><td><code>object</code></td><td>CredentialSpec for managed service account (Windows only)</td></tr><tr><td><code>ContainerSpec.Privileges.CredentialSpec.Config</code>?</td><td><code>string</code></td><td>Load credential spec from a Swarm Config with the given ID. The specified config must also be present in the Configs field with the Runtime property set. <p><br></p> &gt; <strong>Note</strong>: <code>CredentialSpec.File</code>, <code>CredentialSpec.Registry</code>, &gt; and <code>CredentialSpec.Config</code> are mutually exclusive.</td></tr><tr><td><code>ContainerSpec.Privileges.CredentialSpec.File</code>?</td><td><code>string</code></td><td>Load credential spec from this file. The file is read by the daemon, and must be present in the <code>CredentialSpecs</code> subdirectory in the docker data directory, which defaults to <code>C:\\ProgramData\\Docker\\</code> on Windows. For example, specifying <code>spec.json</code> loads <code>C:\\ProgramData\\Docker\\CredentialSpecs\\spec.json</code>. <p><br></p> &gt; <strong>Note</strong>: <code>CredentialSpec.File</code>, <code>CredentialSpec.Registry</code>, &gt; and <code>CredentialSpec.Config</code> are mutually exclusive.</td></tr><tr><td><code>ContainerSpec.Privileges.CredentialSpec.Registry</code>?</td><td><code>string</code></td><td>Load credential spec from this value in the Windows registry. The specified registry value must be located in: <code>HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Virtualization\\Containers\\CredentialSpecs</code> <p><br></p> &gt; <strong>Note</strong>: <code>CredentialSpec.File</code>, <code>CredentialSpec.Registry</code>, &gt; and <code>CredentialSpec.Config</code> are mutually exclusive.</td></tr><tr><td><code>ContainerSpec.Privileges.NoNewPrivileges</code>?</td><td><code>boolean</code></td><td>Configuration of the no_new_privs bit in the container</td></tr><tr><td><code>ContainerSpec.Privileges.Seccomp</code>?</td><td><code>object</code></td><td>Options for configuring seccomp on the container</td></tr><tr><td><code>ContainerSpec.Privileges.Seccomp.Mode</code>?</td><td><code>&quot;default&quot;</code> | <code>&quot;unconfined&quot;</code> | <code>&quot;custom&quot;</code></td><td>-</td></tr><tr><td><code>ContainerSpec.Privileges.Seccomp.Profile</code>?</td><td><code>string</code></td><td>The custom seccomp profile as a json object</td></tr><tr><td><code>ContainerSpec.Privileges.SELinuxContext</code>?</td><td><code>object</code></td><td>SELinux labels of the container</td></tr><tr><td><code>ContainerSpec.Privileges.SELinuxContext.Disable</code>?</td><td><code>boolean</code></td><td>Disable SELinux</td></tr><tr><td><code>ContainerSpec.Privileges.SELinuxContext.Level</code>?</td><td><code>string</code></td><td>SELinux level label</td></tr><tr><td><code>ContainerSpec.Privileges.SELinuxContext.Role</code>?</td><td><code>string</code></td><td>SELinux role label</td></tr><tr><td><code>ContainerSpec.Privileges.SELinuxContext.Type</code>?</td><td><code>string</code></td><td>SELinux type label</td></tr><tr><td><code>ContainerSpec.Privileges.SELinuxContext.User</code>?</td><td><code>string</code></td><td>SELinux user label</td></tr><tr><td><code>ContainerSpec.ReadOnly</code>?</td><td><code>boolean</code></td><td>Mount the container&#39;s root filesystem as read only.</td></tr><tr><td><code>ContainerSpec.Secrets</code>?</td><td><code>object</code>[]</td><td>Secrets contains references to zero or more secrets that will be exposed to the service.</td></tr><tr><td><code>ContainerSpec.StopGracePeriod</code>?</td><td><code>number</code></td><td>Amount of time to wait for the container to terminate before forcefully killing it.</td></tr><tr><td><code>ContainerSpec.StopSignal</code>?</td><td><code>string</code></td><td>Signal to stop the container.</td></tr><tr><td><code>ContainerSpec.Sysctls</code>?</td><td><code>object</code></td><td>Set kernel namedspaced parameters (sysctls) in the container. The Sysctls option on services accepts the same sysctls as the are supported on containers. Note that while the same sysctls are supported, no guarantees or checks are made about their suitability for a clustered environment, and it&#39;s up to the user to determine whether a given sysctl will work properly in a Service.</td></tr><tr><td><code>ContainerSpec.TTY</code>?</td><td><code>boolean</code></td><td>Whether a pseudo-TTY should be allocated.</td></tr><tr><td><code>ContainerSpec.Ulimits</code>?</td><td><code>object</code>[]</td><td>A list of resource limits to set in the container. For example: <code>{&quot;Name&quot;: &quot;nofile&quot;, &quot;Soft&quot;: 1024, &quot;Hard&quot;: 2048}</code>&quot;</td></tr><tr><td><code>ContainerSpec.User</code>?</td><td><code>string</code></td><td>The user inside the container.</td></tr><tr><td><code>ForceUpdate</code>?</td><td><code>number</code></td><td>A counter that triggers an update even if no relevant parameters have been changed.</td></tr><tr><td><code>LogDriver</code>?</td><td><code>object</code></td><td>Specifies the log driver to use for tasks created from this spec. If not present, the default one for the swarm will be used, finally falling back to the engine default if not specified.</td></tr><tr><td><code>LogDriver.Name</code>?</td><td><code>string</code></td><td>-</td></tr><tr><td><code>LogDriver.Options</code>?</td><td><code>object</code></td><td>-</td></tr><tr><td><code>NetworkAttachmentSpec</code>?</td><td><code>object</code></td><td>Read-only spec type for non-swarm containers attached to swarm overlay networks. <p><br></p> &gt; <strong>Note</strong>: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are &gt; mutually exclusive. PluginSpec is only used when the Runtime field &gt; is set to <code>plugin</code>. NetworkAttachmentSpec is used when the Runtime &gt; field is set to <code>attachment</code>.</td></tr><tr><td><code>NetworkAttachmentSpec.ContainerID</code>?</td><td><code>string</code></td><td>ID of the container represented by this task</td></tr><tr><td><code>Networks</code>?</td><td><a href="./NetworkAttachmentConfig.html"><code>NetworkAttachmentConfig</code></a>[]</td><td>Specifies which networks the service should attach to.</td></tr><tr><td><code>Placement</code>?</td><td><code>object</code></td><td>-</td></tr><tr><td><code>Placement.Constraints</code>?</td><td><code>string</code>[]</td><td>An array of constraint expressions to limit the set of nodes where a task can be scheduled. Constraint expressions can either use a <em>match</em> (<code>==</code>) or <em>exclude</em> (<code>!=</code>) rule. Multiple constraints find nodes that satisfy every expression (AND match). Constraints can match node or Docker Engine labels as follows: node attribute</td></tr><tr><td><code>Placement.MaxReplicas</code>?</td><td><code>number</code></td><td>Maximum number of replicas for per node (default value is 0, which is unlimited)</td></tr><tr><td><code>Placement.Platforms</code>?</td><td><a href="./Platform.html"><code>Platform</code></a>[]</td><td>Platforms stores all the platforms that the service&#39;s image can run on. This field is used in the platform filter for scheduling. If empty, then the platform filter is off, meaning there are no scheduling restrictions.</td></tr><tr><td><code>Placement.Preferences</code>?</td><td><code>object</code>[]</td><td>Preferences provide a way to make the scheduler aware of factors such as topology. They are provided in order from highest to lowest precedence.</td></tr><tr><td><code>PluginSpec</code>?</td><td><code>object</code></td><td>Plugin spec for the service. <em>(Experimental release only.)</em> <p><br></p> &gt; <strong>Note</strong>: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are &gt; mutually exclusive. PluginSpec is only used when the Runtime field &gt; is set to <code>plugin</code>. NetworkAttachmentSpec is used when the Runtime &gt; field is set to <code>attachment</code>.</td></tr><tr><td><code>PluginSpec.Disabled</code>?</td><td><code>boolean</code></td><td>Disable the plugin once scheduled.</td></tr><tr><td><code>PluginSpec.Name</code>?</td><td><code>string</code></td><td>The name or &#39;alias&#39; to use for the plugin.</td></tr><tr><td><code>PluginSpec.PluginPrivilege</code>?</td><td><a href="./PluginPrivilege.html"><code>PluginPrivilege</code></a>[]</td><td>-</td></tr><tr><td><code>PluginSpec.Remote</code>?</td><td><code>string</code></td><td>The plugin image reference to use.</td></tr><tr><td><code>Resources</code>?</td><td><code>object</code></td><td>Resource requirements which apply to each individual container created as part of the service.</td></tr><tr><td><code>Resources.Limits</code>?</td><td><a href="./Limit.html"><code>Limit</code></a></td><td>Define resources limits.</td></tr><tr><td><code>Resources.Reservations</code>?</td><td><a href="./ResourceObject.html"><code>ResourceObject</code></a></td><td>Define resources reservation.</td></tr><tr><td><code>RestartPolicy</code>?</td><td><code>object</code></td><td>Specification for the restart policy which applies to containers created as part of this service.</td></tr><tr><td><code>RestartPolicy.Condition</code>?</td><td><code>&quot;none&quot;</code> | <code>&quot;on-failure&quot;</code> | <code>&quot;any&quot;</code></td><td>Condition for restart.</td></tr><tr><td><code>RestartPolicy.Delay</code>?</td><td><code>number</code></td><td>Delay between restart attempts.</td></tr><tr><td><code>RestartPolicy.MaxAttempts</code>?</td><td><code>number</code></td><td>Maximum attempts to restart a given container before giving up (default value is 0, which is ignored).</td></tr><tr><td><code>RestartPolicy.Window</code>?</td><td><code>number</code></td><td>Windows is the time window used to evaluate the restart policy (default value is 0, which is unbounded).</td></tr><tr><td><code>Runtime</code>?</td><td><code>string</code></td><td>Runtime is the type of runtime specified for the task executor.</td></tr></tbody></table>',6)]))}const f=t(r,[["render",n]]);export{h as __pageData,f as default};