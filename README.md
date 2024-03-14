<div align="center">

[![Visit Circleci](./header.png)](https://circleci.com)

# [Circleci](https://circleci.com)<a id="circleci"></a>

This describes the resources that make up the CircleCI API v2.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`circleci.context.createNewContext`](#circlecicontextcreatenewcontext)
  * [`circleci.context.createRestriction`](#circlecicontextcreaterestriction)
  * [`circleci.context.deleteRestriction`](#circlecicontextdeleterestriction)
  * [`circleci.context.getInformation`](#circlecicontextgetinformation)
  * [`circleci.context.getRestrictions`](#circlecicontextgetrestrictions)
  * [`circleci.context.listEnvironmentVariables`](#circlecicontextlistenvironmentvariables)
  * [`circleci.context.listOwnerContexts`](#circlecicontextlistownercontexts)
  * [`circleci.context.removeContext`](#circlecicontextremovecontext)
  * [`circleci.context.removeEnvironmentVariable`](#circlecicontextremoveenvironmentvariable)
  * [`circleci.context.updateEnvironmentVariable`](#circlecicontextupdateenvironmentvariable)
  * [`circleci.insights.getFlakyTests`](#circleciinsightsgetflakytests)
  * [`circleci.insights.getJobTimeseriesData`](#circleciinsightsgetjobtimeseriesdata)
  * [`circleci.insights.getProjectSummaryMetrics`](#circleciinsightsgetprojectsummarymetrics)
  * [`circleci.insights.getProjectWorkflowJobMetrics`](#circleciinsightsgetprojectworkflowjobmetrics)
  * [`circleci.insights.getProjectWorkflowMetrics`](#circleciinsightsgetprojectworkflowmetrics)
  * [`circleci.insights.getProjectWorkflowTestMetrics`](#circleciinsightsgetprojectworkflowtestmetrics)
  * [`circleci.insights.getRecentWorkflowRuns`](#circleciinsightsgetrecentworkflowruns)
  * [`circleci.insights.getSummaryMetricsWithTrends`](#circleciinsightsgetsummarymetricswithtrends)
  * [`circleci.insights.getWorkflowSummaryMetrics`](#circleciinsightsgetworkflowsummarymetrics)
  * [`circleci.insights.listProjectBranches`](#circleciinsightslistprojectbranches)
  * [`circleci.job.cancelWithNumber`](#circlecijobcancelwithnumber)
  * [`circleci.job.getArtifacts`](#circlecijobgetartifacts)
  * [`circleci.job.getDetails`](#circlecijobgetdetails)
  * [`circleci.job.getTestMetadata`](#circlecijobgettestmetadata)
  * [`circleci.oidcTokenManagement.deleteOrgClaims`](#circlecioidctokenmanagementdeleteorgclaims)
  * [`circleci.oidcTokenManagement.deleteProjectClaims`](#circlecioidctokenmanagementdeleteprojectclaims)
  * [`circleci.oidcTokenManagement.getOrgClaims`](#circlecioidctokenmanagementgetorgclaims)
  * [`circleci.oidcTokenManagement.getProjectClaims`](#circlecioidctokenmanagementgetprojectclaims)
  * [`circleci.oidcTokenManagement.updateOrgClaims`](#circlecioidctokenmanagementupdateorgclaims)
  * [`circleci.oidcTokenManagement.updateProjectClaims`](#circlecioidctokenmanagementupdateprojectclaims)
  * [`circleci.pipeline.continueExecution`](#circlecipipelinecontinueexecution)
  * [`circleci.pipeline.getAllPipelines`](#circlecipipelinegetallpipelines)
  * [`circleci.pipeline.getById`](#circlecipipelinegetbyid)
  * [`circleci.pipeline.getByNumber`](#circlecipipelinegetbynumber)
  * [`circleci.pipeline.getConfigurationById`](#circlecipipelinegetconfigurationbyid)
  * [`circleci.pipeline.listRecentPipelines`](#circlecipipelinelistrecentpipelines)
  * [`circleci.pipeline.listUserPipelines`](#circlecipipelinelistuserpipelines)
  * [`circleci.pipeline.listWorkflows`](#circlecipipelinelistworkflows)
  * [`circleci.pipeline.triggerNewPipeline`](#circlecipipelinetriggernewpipeline)
  * [`circleci.policyManagement.createPolicyBundleForContext`](#circlecipolicymanagementcreatepolicybundleforcontext)
  * [`circleci.policyManagement.evaluateInputData`](#circlecipolicymanagementevaluateinputdata)
  * [`circleci.policyManagement.getDecisionAuditLogByGivenId`](#circlecipolicymanagementgetdecisionauditlogbygivenid)
  * [`circleci.policyManagement.getDecisionAuditLogs`](#circlecipolicymanagementgetdecisionauditlogs)
  * [`circleci.policyManagement.getDecisionSettings`](#circlecipolicymanagementgetdecisionsettings)
  * [`circleci.policyManagement.getDocument`](#circlecipolicymanagementgetdocument)
  * [`circleci.policyManagement.getPolicyBundle`](#circlecipolicymanagementgetpolicybundle)
  * [`circleci.policyManagement.getPolicyBundleForDecision`](#circlecipolicymanagementgetpolicybundlefordecision)
  * [`circleci.policyManagement.modifyDecisionSettings`](#circlecipolicymanagementmodifydecisionsettings)
  * [`circleci.project.createCheckoutKey`](#circleciprojectcreatecheckoutkey)
  * [`circleci.project.createEnvVar`](#circleciprojectcreateenvvar)
  * [`circleci.project.createProjectDefaultSettings`](#circleciprojectcreateprojectdefaultsettings)
  * [`circleci.project.deleteCheckoutKeyByFingerprint`](#circleciprojectdeletecheckoutkeybyfingerprint)
  * [`circleci.project.deleteEnvironmentVariable`](#circleciprojectdeleteenvironmentvariable)
  * [`circleci.project.getBySlug`](#circleciprojectgetbyslug)
  * [`circleci.project.getCheckoutKeyByFingerprint`](#circleciprojectgetcheckoutkeybyfingerprint)
  * [`circleci.project.getMaskedEnvVar`](#circleciprojectgetmaskedenvvar)
  * [`circleci.project.getSettings`](#circleciprojectgetsettings)
  * [`circleci.project.listCheckoutKeys`](#circleciprojectlistcheckoutkeys)
  * [`circleci.project.listEnvVarValues`](#circleciprojectlistenvvarvalues)
  * [`circleci.project.updateSettings`](#circleciprojectupdatesettings)
  * [`circleci.schedule.createNewSchedule`](#circlecischedulecreatenewschedule)
  * [`circleci.schedule.getAllSchedules`](#circlecischedulegetallschedules)
  * [`circleci.schedule.getById`](#circlecischedulegetbyid)
  * [`circleci.schedule.removeById`](#circlecischeduleremovebyid)
  * [`circleci.schedule.updateSchedule`](#circlecischeduleupdateschedule)
  * [`circleci.user.getInformation`](#circleciusergetinformation)
  * [`circleci.user.getUserInformation`](#circleciusergetuserinformation)
  * [`circleci.user.listCollaborations`](#circleciuserlistcollaborations)
  * [`circleci.webhook.createOutboundWebhook`](#circleciwebhookcreateoutboundwebhook)
  * [`circleci.webhook.deleteOutboundWebhook`](#circleciwebhookdeleteoutboundwebhook)
  * [`circleci.webhook.getById`](#circleciwebhookgetbyid)
  * [`circleci.webhook.listMatchingScope`](#circleciwebhooklistmatchingscope)
  * [`circleci.webhook.updateOutboundWebhook`](#circleciwebhookupdateoutboundwebhook)
  * [`circleci.workflow.approveJob`](#circleciworkflowapprovejob)
  * [`circleci.workflow.cancelWorkflow`](#circleciworkflowcancelworkflow)
  * [`circleci.workflow.getById`](#circleciworkflowgetbyid)
  * [`circleci.workflow.getJobs`](#circleciworkflowgetjobs)
  * [`circleci.workflow.rerunWorkflow`](#circleciworkflowrerunworkflow)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=CircleCI&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { CircleCi } from "circle-ci-typescript-sdk";

const circleci = new CircleCi({
  // Defining the base path is optional and defaults to https://circleci.com/api/v2
  // basePath: "https://circleci.com/api/v2",
  apiKeyHeader: "API_KEY",
  apiKeyQuery: "API_KEY",
});

const createNewContextResponse = await circleci.context.createNewContext({
  name: "name_example",
  owner: null,
});

console.log(createNewContextResponse);
```

## Reference<a id="reference"></a>


### `circleci.context.createNewContext`<a id="circlecicontextcreatenewcontext"></a>

Creates a new context.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewContextResponse = await circleci.context.createNewContext({
  name: "name_example",
  owner: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The user defined name of the context.

##### owner: [`ContextCreateNewContextRequestOwner`](./models/context-create-new-context-request-owner.ts)<a id="owner-contextcreatenewcontextrequestownermodelscontext-create-new-context-request-ownerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ContextCreateNewContextResponse](./models/context-create-new-context-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/context` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.context.createRestriction`<a id="circlecicontextcreaterestriction"></a>

[__EXPERIMENTAL__] Creates project restriction on a context.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRestrictionResponse = await circleci.context.createRestriction({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contextId: `string`<a id="contextid-string"></a>

An opaque identifier of a context.

##### project_id: `string`<a id="project_id-string"></a>

Deprecated - Use \\\"restriction_type\\\" and \\\"restriction_value\\\" instead.  The project ID to use for a project restriction. This is mutually exclusive with restriction_type and restriction_value and implies restriction_type is \\\"project\\\". 

##### restriction_type: `string`<a id="restriction_type-string"></a>

##### restriction_value: `string`<a id="restriction_value-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RestrictionCreated](./models/restriction-created.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/context/{context_id}/restrictions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.context.deleteRestriction`<a id="circlecicontextdeleterestriction"></a>

[__EXPERIMENTAL__] Deletes a project restriction on a context.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRestrictionResponse = await circleci.context.deleteRestriction({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contextId: `string`<a id="contextid-string"></a>

An opaque identifier of a context.

##### restrictionId: `string`<a id="restrictionid-string"></a>

An opaque identifier of a context restriction.

#### 🔄 Return<a id="🔄-return"></a>

[RestrictionDeleted](./models/restriction-deleted.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/context/{context_id}/restrictions/{restriction_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.context.getInformation`<a id="circlecicontextgetinformation"></a>

Returns basic information about a context.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformationResponse = await circleci.context.getInformation({
  contextId: "contextId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contextId: `string`<a id="contextid-string"></a>

ID of the context (UUID)

#### 🔄 Return<a id="🔄-return"></a>

[ContextGetInformationResponse](./models/context-get-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/context/{context-id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.context.getRestrictions`<a id="circlecicontextgetrestrictions"></a>

[__EXPERIMENTAL__] Gets a list of project restrictions associated with a context.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRestrictionsResponse = await circleci.context.getRestrictions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contextId: `string`<a id="contextid-string"></a>

An opaque identifier of a context.

#### 🔄 Return<a id="🔄-return"></a>

[ContextProjectRestrictionsList](./models/context-project-restrictions-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/context/{context_id}/restrictions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.context.listEnvironmentVariables`<a id="circlecicontextlistenvironmentvariables"></a>

List information about environment variables in a context, not including their values.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEnvironmentVariablesResponse =
  await circleci.context.listEnvironmentVariables({
    contextId: "contextId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contextId: `string`<a id="contextid-string"></a>

ID of the context (UUID)

##### pageToken: `string`<a id="pagetoken-string"></a>

A token to retrieve the next page of results.

#### 🔄 Return<a id="🔄-return"></a>

[ContextListEnvironmentVariablesResponse](./models/context-list-environment-variables-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/context/{context-id}/environment-variable` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.context.listOwnerContexts`<a id="circlecicontextlistownercontexts"></a>

List all contexts for an owner.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOwnerContextsResponse = await circleci.context.listOwnerContexts({
  ownerType: "account",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerId: `string`<a id="ownerid-string"></a>

The unique ID of the owner of the context. Specify either this or owner-slug.

##### ownerSlug: `string`<a id="ownerslug-string"></a>

A string that represents an organization. Specify either this or owner-id. Cannot be used for accounts.

##### ownerType: `'account' | 'organization'`<a id="ownertype-account--organization"></a>

The type of the owner. Defaults to \"organization\". Accounts are only used as context owners in server.

##### pageToken: `string`<a id="pagetoken-string"></a>

A token to retrieve the next page of results.

#### 🔄 Return<a id="🔄-return"></a>

[ContextListOwnerContextsResponse](./models/context-list-owner-contexts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/context` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.context.removeContext`<a id="circlecicontextremovecontext"></a>

Delete a context

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeContextResponse = await circleci.context.removeContext({
  contextId: "contextId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contextId: `string`<a id="contextid-string"></a>

ID of the context (UUID)

#### 🔄 Return<a id="🔄-return"></a>

[ContextRemoveContextResponse](./models/context-remove-context-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/context/{context-id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.context.removeEnvironmentVariable`<a id="circlecicontextremoveenvironmentvariable"></a>

Delete an environment variable from a context.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeEnvironmentVariableResponse =
  await circleci.context.removeEnvironmentVariable({
    envVarName: "envVarName_example",
    contextId: "contextId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### envVarName: `string`<a id="envvarname-string"></a>

The name of the environment variable

##### contextId: `string`<a id="contextid-string"></a>

ID of the context (UUID)

#### 🔄 Return<a id="🔄-return"></a>

[ContextRemoveEnvironmentVariableResponse](./models/context-remove-environment-variable-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/context/{context-id}/environment-variable/{env-var-name}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.context.updateEnvironmentVariable`<a id="circlecicontextupdateenvironmentvariable"></a>

Create or update an environment variable within a context. Returns information about the environment variable, not including its value.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEnvironmentVariableResponse =
  await circleci.context.updateEnvironmentVariable({
    contextId: "contextId_example",
    envVarName: "envVarName_example",
    value: "some-secret-value",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### value: `string`<a id="value-string"></a>

The value of the environment variable

##### contextId: `string`<a id="contextid-string"></a>

ID of the context (UUID)

##### envVarName: `string`<a id="envvarname-string"></a>

The name of the environment variable

#### 🔄 Return<a id="🔄-return"></a>

[ContextUpdateEnvironmentVariableResponse](./models/context-update-environment-variable-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/context/{context-id}/environment-variable/{env-var-name}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.insights.getFlakyTests`<a id="circleciinsightsgetflakytests"></a>

Get a list of flaky tests for a given project. Flaky tests are branch agnostic.
             A flaky test is a test that passed and failed in the same commit.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFlakyTestsResponse = await circleci.insights.getFlakyTests({
  projectSlug: "projectSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[InsightsGetFlakyTestsResponse](./models/insights-get-flaky-tests-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/insights/{project-slug}/flaky-tests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.insights.getJobTimeseriesData`<a id="circleciinsightsgetjobtimeseriesdata"></a>

Get timeseries data for all jobs within a workflow. Hourly granularity data is only retained for 48 hours while daily granularity data is retained for 90 days.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobTimeseriesDataResponse =
  await circleci.insights.getJobTimeseriesData({
    projectSlug: "projectSlug_example",
    workflowName: "workflowName_example",
    granularity: "daily",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### workflowName: `string`<a id="workflowname-string"></a>

The name of the workflow.

##### branch: `string`<a id="branch-string"></a>

The name of a vcs branch. If not passed we will scope the API call to the default branch.

##### granularity: `'daily' | 'hourly'`<a id="granularity-daily--hourly"></a>

The granularity for which to query timeseries data.

##### startDate: `string`<a id="startdate-string"></a>

Include only executions that started at or after this date. This must be specified if an end-date is provided.

##### endDate: `string`<a id="enddate-string"></a>

Include only executions that started before this date. This date can be at most 90 days after the start-date.

#### 🔄 Return<a id="🔄-return"></a>

[InsightsGetJobTimeseriesDataResponse](./models/insights-get-job-timeseries-data-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/insights/time-series/{project-slug}/workflows/{workflow-name}/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.insights.getProjectSummaryMetrics`<a id="circleciinsightsgetprojectsummarymetrics"></a>

Get summary metrics and trends for a project at workflow and branch level.
             Workflow runs going back at most 90 days are included in the aggregation window.
             Trends are only supported upto last 30 days.
             Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectSummaryMetricsResponse =
  await circleci.insights.getProjectSummaryMetrics({
    projectSlug: "projectSlug_example",
    reportingWindow: "last-7-days",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### reportingWindow: `'last-7-days' | 'last-90-days' | 'last-24-hours' | 'last-30-days' | 'last-60-days'`<a id="reportingwindow-last-7-days--last-90-days--last-24-hours--last-30-days--last-60-days"></a>

The time window used to calculate summary metrics. If not provided, defaults to last-90-days

##### branches: `object`<a id="branches-object"></a>

The names of VCS branches to include in branch-level workflow metrics.

##### workflowNames: `object`<a id="workflownames-object"></a>

The names of workflows to include in workflow-level metrics.

#### 🔄 Return<a id="🔄-return"></a>

[InsightsGetProjectSummaryMetricsResponse](./models/insights-get-project-summary-metrics-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/insights/pages/{project-slug}/summary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.insights.getProjectWorkflowJobMetrics`<a id="circleciinsightsgetprojectworkflowjobmetrics"></a>

Get summary metrics for a project workflow's jobs. Job runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectWorkflowJobMetricsResponse =
  await circleci.insights.getProjectWorkflowJobMetrics({
    projectSlug: "projectSlug_example",
    workflowName: "workflowName_example",
    reportingWindow: "last-7-days",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### workflowName: `string`<a id="workflowname-string"></a>

The name of the workflow.

##### pageToken: `string`<a id="pagetoken-string"></a>

A token to retrieve the next page of results.

##### allBranches: `boolean`<a id="allbranches-boolean"></a>

Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.

##### branch: `string`<a id="branch-string"></a>

The name of a vcs branch. If not passed we will scope the API call to the default branch.

##### reportingWindow: `'last-7-days' | 'last-90-days' | 'last-24-hours' | 'last-30-days' | 'last-60-days'`<a id="reportingwindow-last-7-days--last-90-days--last-24-hours--last-30-days--last-60-days"></a>

The time window used to calculate summary metrics. If not provided, defaults to last-90-days

#### 🔄 Return<a id="🔄-return"></a>

[InsightsGetProjectWorkflowJobMetricsResponse](./models/insights-get-project-workflow-job-metrics-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/insights/{project-slug}/workflows/{workflow-name}/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.insights.getProjectWorkflowMetrics`<a id="circleciinsightsgetprojectworkflowmetrics"></a>

Get summary metrics for a project's workflows.  Workflow runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours.  Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectWorkflowMetricsResponse =
  await circleci.insights.getProjectWorkflowMetrics({
    projectSlug: "projectSlug_example",
    reportingWindow: "last-7-days",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### pageToken: `string`<a id="pagetoken-string"></a>

A token to retrieve the next page of results.

##### allBranches: `boolean`<a id="allbranches-boolean"></a>

Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.

##### branch: `string`<a id="branch-string"></a>

The name of a vcs branch. If not passed we will scope the API call to the default branch.

##### reportingWindow: `'last-7-days' | 'last-90-days' | 'last-24-hours' | 'last-30-days' | 'last-60-days'`<a id="reportingwindow-last-7-days--last-90-days--last-24-hours--last-30-days--last-60-days"></a>

The time window used to calculate summary metrics. If not provided, defaults to last-90-days

#### 🔄 Return<a id="🔄-return"></a>

[InsightsGetProjectWorkflowMetricsResponse](./models/insights-get-project-workflow-metrics-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/insights/{project-slug}/workflows` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.insights.getProjectWorkflowTestMetrics`<a id="circleciinsightsgetprojectworkflowtestmetrics"></a>

Get test metrics for a project's workflows. Currently tests metrics are calculated based on 10 most recent workflow runs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectWorkflowTestMetricsResponse =
  await circleci.insights.getProjectWorkflowTestMetrics({
    projectSlug: "projectSlug_example",
    workflowName: "workflowName_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### workflowName: `string`<a id="workflowname-string"></a>

The name of the workflow.

##### branch: `string`<a id="branch-string"></a>

The name of a vcs branch. If not passed we will scope the API call to the default branch.

##### allBranches: `boolean`<a id="allbranches-boolean"></a>

Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.

#### 🔄 Return<a id="🔄-return"></a>

[InsightsGetProjectWorkflowTestMetricsResponse](./models/insights-get-project-workflow-test-metrics-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/insights/{project-slug}/workflows/{workflow-name}/test-metrics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.insights.getRecentWorkflowRuns`<a id="circleciinsightsgetrecentworkflowruns"></a>

Get recent runs of a workflow. Runs going back at most 90 days are returned. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentWorkflowRunsResponse =
  await circleci.insights.getRecentWorkflowRuns({
    projectSlug: "projectSlug_example",
    workflowName: "workflowName_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### workflowName: `string`<a id="workflowname-string"></a>

The name of the workflow.

##### allBranches: `boolean`<a id="allbranches-boolean"></a>

Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.

##### branch: `string`<a id="branch-string"></a>

The name of a vcs branch. If not passed we will scope the API call to the default branch.

##### pageToken: `string`<a id="pagetoken-string"></a>

A token to retrieve the next page of results.

##### startDate: `string`<a id="startdate-string"></a>

Include only executions that started at or after this date. This must be specified if an end-date is provided.

##### endDate: `string`<a id="enddate-string"></a>

Include only executions that started before this date. This date can be at most 90 days after the start-date.

#### 🔄 Return<a id="🔄-return"></a>

[InsightsGetRecentWorkflowRunsResponse](./models/insights-get-recent-workflow-runs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/insights/{project-slug}/workflows/{workflow-name}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.insights.getSummaryMetricsWithTrends`<a id="circleciinsightsgetsummarymetricswithtrends"></a>

Gets aggregated summary metrics with trends for the entire org.
              Also gets aggregated metrics and trends for each project belonging to the org.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSummaryMetricsWithTrendsResponse =
  await circleci.insights.getSummaryMetricsWithTrends({
    orgSlug: "orgSlug_example",
    reportingWindow: "last-7-days",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgSlug: `string`<a id="orgslug-string"></a>

Org slug in the form `vcs-slug/org-name`. The `/` characters may be URL-escaped.

##### reportingWindow: `'last-7-days' | 'last-90-days' | 'last-24-hours' | 'last-30-days' | 'last-60-days'`<a id="reportingwindow-last-7-days--last-90-days--last-24-hours--last-30-days--last-60-days"></a>

The time window used to calculate summary metrics. If not provided, defaults to last-90-days

##### projectNames: `object`<a id="projectnames-object"></a>

List of project names.

#### 🔄 Return<a id="🔄-return"></a>

[InsightsGetSummaryMetricsWithTrendsResponse](./models/insights-get-summary-metrics-with-trends-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/insights/{org-slug}/summary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.insights.getWorkflowSummaryMetrics`<a id="circleciinsightsgetworkflowsummarymetrics"></a>

Get the metrics and trends for a particular workflow on a single branch or all branches

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkflowSummaryMetricsResponse =
  await circleci.insights.getWorkflowSummaryMetrics({
    projectSlug: "projectSlug_example",
    workflowName: "workflowName_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### workflowName: `string`<a id="workflowname-string"></a>

The name of the workflow.

##### allBranches: `boolean`<a id="allbranches-boolean"></a>

Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.

##### branch: `string`<a id="branch-string"></a>

The name of a vcs branch. If not passed we will scope the API call to the default branch.

#### 🔄 Return<a id="🔄-return"></a>

[InsightsGetWorkflowSummaryMetricsResponse](./models/insights-get-workflow-summary-metrics-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/insights/{project-slug}/workflows/{workflow-name}/summary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.insights.listProjectBranches`<a id="circleciinsightslistprojectbranches"></a>

Get a list of all branches for a specified project. The list will only contain branches currently available within Insights. The maximum number of branches returned by this endpoint is 5,000.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listProjectBranchesResponse = await circleci.insights.listProjectBranches(
  {
    projectSlug: "projectSlug_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### workflowName: `string`<a id="workflowname-string"></a>

The name of a workflow. If not passed we will scope the API call to the project.

#### 🔄 Return<a id="🔄-return"></a>

[InsightsListProjectBranchesResponse](./models/insights-list-project-branches-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/insights/{project-slug}/branches` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.job.cancelWithNumber`<a id="circlecijobcancelwithnumber"></a>

Cancel job with a given job number.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelWithNumberResponse = await circleci.job.cancelWithNumber({
  jobNumber: null,
  projectSlug: "projectSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobNumber: `any`<a id="jobnumber-any"></a>

The number of the job.

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[JobCancelWithNumberResponse](./models/job-cancel-with-number-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/job/{job-number}/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.job.getArtifacts`<a id="circlecijobgetartifacts"></a>

Returns a job's artifacts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getArtifactsResponse = await circleci.job.getArtifacts({
  jobNumber: null,
  projectSlug: "projectSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobNumber: `any`<a id="jobnumber-any"></a>

The number of the job.

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[JobGetArtifactsResponse](./models/job-get-artifacts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/{job-number}/artifacts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.job.getDetails`<a id="circlecijobgetdetails"></a>

Returns job details.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await circleci.job.getDetails({
  jobNumber: null,
  projectSlug: "projectSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobNumber: `any`<a id="jobnumber-any"></a>

The number of the job.

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[JobGetDetailsResponse](./models/job-get-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/job/{job-number}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.job.getTestMetadata`<a id="circlecijobgettestmetadata"></a>

Get test metadata for a build. In the rare case where there is more than 250MB of test data on the job, no results will be returned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTestMetadataResponse = await circleci.job.getTestMetadata({
  jobNumber: null,
  projectSlug: "projectSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobNumber: `any`<a id="jobnumber-any"></a>

The number of the job.

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[JobGetTestMetadataResponse](./models/job-get-test-metadata-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/{job-number}/tests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.oidcTokenManagement.deleteOrgClaims`<a id="circlecioidctokenmanagementdeleteorgclaims"></a>

Deletes org-level custom claims of OIDC identity tokens

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOrgClaimsResponse =
  await circleci.oidcTokenManagement.deleteOrgClaims({
    orgID: "orgID_example",
    claims: "claims_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgID: `string`<a id="orgid-string"></a>

##### claims: `string`<a id="claims-string"></a>

comma separated list of claims to delete. Valid values are \"audience\" and \"ttl\".

#### 🔄 Return<a id="🔄-return"></a>

[ClaimResponse](./models/claim-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/org/{orgID}/oidc-custom-claims` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.oidcTokenManagement.deleteProjectClaims`<a id="circlecioidctokenmanagementdeleteprojectclaims"></a>

Deletes project-level custom claims of OIDC identity tokens

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteProjectClaimsResponse =
  await circleci.oidcTokenManagement.deleteProjectClaims({
    orgID: "orgID_example",
    projectID: "projectID_example",
    claims: "claims_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgID: `string`<a id="orgid-string"></a>

##### projectID: `string`<a id="projectid-string"></a>

##### claims: `string`<a id="claims-string"></a>

comma separated list of claims to delete. Valid values are \"audience\" and \"ttl\".

#### 🔄 Return<a id="🔄-return"></a>

[ClaimResponse](./models/claim-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/org/{orgID}/project/{projectID}/oidc-custom-claims` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.oidcTokenManagement.getOrgClaims`<a id="circlecioidctokenmanagementgetorgclaims"></a>

Fetches org-level custom claims of OIDC identity tokens

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrgClaimsResponse = await circleci.oidcTokenManagement.getOrgClaims({
  orgID: "orgID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgID: `string`<a id="orgid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ClaimResponse](./models/claim-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/org/{orgID}/oidc-custom-claims` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.oidcTokenManagement.getProjectClaims`<a id="circlecioidctokenmanagementgetprojectclaims"></a>

Fetches project-level custom claims of OIDC identity tokens

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectClaimsResponse =
  await circleci.oidcTokenManagement.getProjectClaims({
    orgID: "orgID_example",
    projectID: "projectID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgID: `string`<a id="orgid-string"></a>

##### projectID: `string`<a id="projectid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ClaimResponse](./models/claim-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/org/{orgID}/project/{projectID}/oidc-custom-claims` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.oidcTokenManagement.updateOrgClaims`<a id="circlecioidctokenmanagementupdateorgclaims"></a>

Creates/Updates org-level custom claims of OIDC identity tokens

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOrgClaimsResponse =
  await circleci.oidcTokenManagement.updateOrgClaims({
    orgID: "orgID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgID: `string`<a id="orgid-string"></a>

##### audience: `string`[]<a id="audience-string"></a>

##### ttl: `string`<a id="ttl-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ClaimResponse](./models/claim-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/org/{orgID}/oidc-custom-claims` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.oidcTokenManagement.updateProjectClaims`<a id="circlecioidctokenmanagementupdateprojectclaims"></a>

Creates/Updates project-level custom claims of OIDC identity tokens

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateProjectClaimsResponse =
  await circleci.oidcTokenManagement.updateProjectClaims({
    orgID: "orgID_example",
    projectID: "projectID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgID: `string`<a id="orgid-string"></a>

##### projectID: `string`<a id="projectid-string"></a>

##### audience: `string`[]<a id="audience-string"></a>

##### ttl: `string`<a id="ttl-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ClaimResponse](./models/claim-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/org/{orgID}/project/{projectID}/oidc-custom-claims` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.pipeline.continueExecution`<a id="circlecipipelinecontinueexecution"></a>

Continue a pipeline from the setup phase. For information on using pipeline parameters with dynamic configuration, see the [Pipeline values and parameters](https://circleci.com/docs/pipeline-variables/#pipeline-parameters-and-dynamic-configuration) docs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const continueExecutionResponse = await circleci.pipeline.continueExecution({
  continuation_key: "continuation_key_example",
  configuration: "configuration_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### continuation-key: `string`<a id="continuation-key-string"></a>

A pipeline continuation key.

##### configuration: `string`<a id="configuration-string"></a>

A configuration string for the pipeline.

##### parameters: Record<string, [`PipelineContinueExecutionRequestParametersValue`](./models/pipeline-continue-execution-request-parameters-value.ts)><a id="parameters-record"></a>

An object containing pipeline parameters and their values.

#### 🔄 Return<a id="🔄-return"></a>

[PipelineContinueExecutionResponse](./models/pipeline-continue-execution-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pipeline/continue` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.pipeline.getAllPipelines`<a id="circlecipipelinegetallpipelines"></a>

Returns all pipelines for this project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPipelinesResponse = await circleci.pipeline.getAllPipelines({
  projectSlug: "projectSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### branch: `string`<a id="branch-string"></a>

The name of a vcs branch.

##### pageToken: `string`<a id="pagetoken-string"></a>

A token to retrieve the next page of results.

#### 🔄 Return<a id="🔄-return"></a>

[PipelineGetAllPipelinesResponse](./models/pipeline-get-all-pipelines-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/pipeline` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.pipeline.getById`<a id="circlecipipelinegetbyid"></a>

Returns a pipeline by the pipeline ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await circleci.pipeline.getById({
  pipelineId: "pipelineId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pipelineId: `string`<a id="pipelineid-string"></a>

The unique ID of the pipeline.

#### 🔄 Return<a id="🔄-return"></a>

[PipelineGetByIdResponse](./models/pipeline-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pipeline/{pipeline-id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.pipeline.getByNumber`<a id="circlecipipelinegetbynumber"></a>

Returns a pipeline by the pipeline number.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByNumberResponse = await circleci.pipeline.getByNumber({
  projectSlug: "projectSlug_example",
  pipelineNumber: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### pipelineNumber: `any`<a id="pipelinenumber-any"></a>

The number of the pipeline.

#### 🔄 Return<a id="🔄-return"></a>

[PipelineGetByNumberResponse](./models/pipeline-get-by-number-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/pipeline/{pipeline-number}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.pipeline.getConfigurationById`<a id="circlecipipelinegetconfigurationbyid"></a>

Returns a pipeline's configuration by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getConfigurationByIdResponse =
  await circleci.pipeline.getConfigurationById({
    pipelineId: "pipelineId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pipelineId: `string`<a id="pipelineid-string"></a>

The unique ID of the pipeline.

#### 🔄 Return<a id="🔄-return"></a>

[PipelineGetConfigurationByIdResponse](./models/pipeline-get-configuration-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pipeline/{pipeline-id}/config` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.pipeline.listRecentPipelines`<a id="circlecipipelinelistrecentpipelines"></a>

Returns all pipelines for the most recently built projects (max 250) you follow in an organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRecentPipelinesResponse = await circleci.pipeline.listRecentPipelines(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgSlug: `string`<a id="orgslug-string"></a>

Org slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).

##### pageToken: `string`<a id="pagetoken-string"></a>

A token to retrieve the next page of results.

##### mine: `boolean`<a id="mine-boolean"></a>

Only include entries created by your user.

#### 🔄 Return<a id="🔄-return"></a>

[PipelineListRecentPipelinesResponse](./models/pipeline-list-recent-pipelines-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pipeline` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.pipeline.listUserPipelines`<a id="circlecipipelinelistuserpipelines"></a>

Returns a sequence of all pipelines for this project triggered by the user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserPipelinesResponse = await circleci.pipeline.listUserPipelines({
  projectSlug: "projectSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### pageToken: `string`<a id="pagetoken-string"></a>

A token to retrieve the next page of results.

#### 🔄 Return<a id="🔄-return"></a>

[PipelineListUserPipelinesResponse](./models/pipeline-list-user-pipelines-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/pipeline/mine` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.pipeline.listWorkflows`<a id="circlecipipelinelistworkflows"></a>

Returns a paginated list of workflows by pipeline ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWorkflowsResponse = await circleci.pipeline.listWorkflows({
  pipelineId: "pipelineId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pipelineId: `string`<a id="pipelineid-string"></a>

The unique ID of the pipeline.

##### pageToken: `string`<a id="pagetoken-string"></a>

A token to retrieve the next page of results.

#### 🔄 Return<a id="🔄-return"></a>

[PipelineListWorkflowsResponse](./models/pipeline-list-workflows-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pipeline/{pipeline-id}/workflow` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.pipeline.triggerNewPipeline`<a id="circlecipipelinetriggernewpipeline"></a>

Not yet available to projects that use GitLab or GitHub App. Triggers a new pipeline on the project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerNewPipelineResponse = await circleci.pipeline.triggerNewPipeline({
  projectSlug: "projectSlug_example",
  branch: "feature/design-new-api",
  tag: "v3.1.4159",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### parameters: Record<string, [`PipelineContinueExecutionRequestParametersValue`](./models/pipeline-continue-execution-request-parameters-value.ts)><a id="parameters-record"></a>

An object containing pipeline parameters and their values.

##### branch: `string`<a id="branch-string"></a>

The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).

##### tag: `string`<a id="tag-string"></a>

The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.

#### 🔄 Return<a id="🔄-return"></a>

[PipelineTriggerNewPipelineResponse](./models/pipeline-trigger-new-pipeline-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/pipeline` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.policyManagement.createPolicyBundleForContext`<a id="circlecipolicymanagementcreatepolicybundleforcontext"></a>

This endpoint replaces the current policy bundle with the provided policy bundle

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPolicyBundleForContextResponse =
  await circleci.policyManagement.createPolicyBundleForContext({
    ownerID: "ownerID_example",
    context: "context_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerID: `string`<a id="ownerid-string"></a>

##### context: `string`<a id="context-string"></a>

##### policies: Record<string, `string`><a id="policies-record"></a>

##### dry: `boolean`<a id="dry-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BundleDiff](./models/bundle-diff.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/owner/{ownerID}/context/{context}/policy-bundle` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.policyManagement.evaluateInputData`<a id="circlecipolicymanagementevaluateinputdata"></a>

This endpoint will evaluate input data (config+metadata) against owner's stored policies and return a decision.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const evaluateInputDataResponse =
  await circleci.policyManagement.evaluateInputData({
    ownerID: "ownerID_example",
    context: "context_example",
    input: "input_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### input: `string`<a id="input-string"></a>

##### ownerID: `string`<a id="ownerid-string"></a>

##### context: `string`<a id="context-string"></a>

##### metadata: `object`<a id="metadata-object"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Decision](./models/decision.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/owner/{ownerID}/context/{context}/decision` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.policyManagement.getDecisionAuditLogByGivenId`<a id="circlecipolicymanagementgetdecisionauditlogbygivenid"></a>

This endpoint will retrieve a decision for a given decision log ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDecisionAuditLogByGivenIdResponse =
  await circleci.policyManagement.getDecisionAuditLogByGivenId({
    ownerID: "ownerID_example",
    context: "context_example",
    decisionID: "decisionID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerID: `string`<a id="ownerid-string"></a>

##### context: `string`<a id="context-string"></a>

##### decisionID: `string`<a id="decisionid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DecisionLog](./models/decision-log.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/owner/{ownerID}/context/{context}/decision/{decisionID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.policyManagement.getDecisionAuditLogs`<a id="circlecipolicymanagementgetdecisionauditlogs"></a>

This endpoint will return a list of decision audit logs that were made using this owner's policies.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDecisionAuditLogsResponse =
  await circleci.policyManagement.getDecisionAuditLogs({
    ownerID: "ownerID_example",
    context: "context_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerID: `string`<a id="ownerid-string"></a>

##### context: `string`<a id="context-string"></a>

##### status: `string`<a id="status-string"></a>

Return decisions matching this decision status.

##### after: `string`<a id="after-string"></a>

Return decisions made after this date.

##### before: `string`<a id="before-string"></a>

Return decisions made before this date.

##### branch: `string`<a id="branch-string"></a>

Return decisions made on this branch.

##### projectId: `string`<a id="projectid-string"></a>

Return decisions made for this project.

##### buildNumber: `string`<a id="buildnumber-string"></a>

Return decisions made for this build number.

##### offset: `number`<a id="offset-number"></a>

Sets the offset when retrieving the decisions, for paging.

#### 🔄 Return<a id="🔄-return"></a>

[DecisionLog](./models/decision-log.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/owner/{ownerID}/context/{context}/decision` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.policyManagement.getDecisionSettings`<a id="circlecipolicymanagementgetdecisionsettings"></a>

This endpoint retrieves the current decision settings (eg enable/disable policy evaluation)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDecisionSettingsResponse =
  await circleci.policyManagement.getDecisionSettings({
    ownerID: "ownerID_example",
    context: "context_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerID: `string`<a id="ownerid-string"></a>

##### context: `string`<a id="context-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DecisionSettings](./models/decision-settings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/owner/{ownerID}/context/{context}/decision/settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.policyManagement.getDocument`<a id="circlecipolicymanagementgetdocument"></a>

This endpoint will retrieve a policy document.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDocumentResponse = await circleci.policyManagement.getDocument({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerID: `string`<a id="ownerid-string"></a>

##### context: `string`<a id="context-string"></a>

##### policyName: `string`<a id="policyname-string"></a>

the policy name set by the rego policy_name rule

#### 🔄 Return<a id="🔄-return"></a>

[Policy](./models/policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/owner/{ownerID}/context/{context}/policy-bundle/{policyName}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.policyManagement.getPolicyBundle`<a id="circlecipolicymanagementgetpolicybundle"></a>

This endpoint will retrieve a policy bundle

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPolicyBundleResponse = await circleci.policyManagement.getPolicyBundle(
  {
    ownerID: "ownerID_example",
    context: "context_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerID: `string`<a id="ownerid-string"></a>

##### context: `string`<a id="context-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/owner/{ownerID}/context/{context}/policy-bundle` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.policyManagement.getPolicyBundleForDecision`<a id="circlecipolicymanagementgetpolicybundlefordecision"></a>

This endpoint will retrieve a policy bundle for a given decision log ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPolicyBundleForDecisionResponse =
  await circleci.policyManagement.getPolicyBundleForDecision({
    ownerID: "ownerID_example",
    context: "context_example",
    decisionID: "decisionID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerID: `string`<a id="ownerid-string"></a>

##### context: `string`<a id="context-string"></a>

##### decisionID: `string`<a id="decisionid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/owner/{ownerID}/context/{context}/decision/{decisionID}/policy-bundle` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.policyManagement.modifyDecisionSettings`<a id="circlecipolicymanagementmodifydecisionsettings"></a>

This endpoint allows modifying decision settings (eg enable/disable policy evaluation)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const modifyDecisionSettingsResponse =
  await circleci.policyManagement.modifyDecisionSettings({
    ownerID: "ownerID_example",
    context: "context_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerID: `string`<a id="ownerid-string"></a>

##### context: `string`<a id="context-string"></a>

##### enabled: `boolean`<a id="enabled-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DecisionSettings](./models/decision-settings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/owner/{ownerID}/context/{context}/decision/settings` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.createCheckoutKey`<a id="circleciprojectcreatecheckoutkey"></a>

Not available to projects that use GitLab or GitHub App. Creates a new checkout key. This API request is only usable with a user API token.
                           Please ensure that you have authorized your account with GitHub before creating user keys.
                           This is necessary to give CircleCI the permission to create a user key associated with
                           your GitHub user account. You can find this page by visiting Project Settings > Checkout SSH Keys

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCheckoutKeyResponse = await circleci.project.createCheckoutKey({
  projectSlug: "projectSlug_example",
  type: "deploy-key",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

The type of checkout key to create. This may be either `deploy-key` or `user-key`.

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[ProjectCreateCheckoutKeyResponse](./models/project-create-checkout-key-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/checkout-key` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.createEnvVar`<a id="circleciprojectcreateenvvar"></a>

Creates a new environment variable.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEnvVarResponse = await circleci.project.createEnvVar({
  projectSlug: "projectSlug_example",
  name: "foo",
  value: "xxxx1234",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the environment variable.

##### value: `string`<a id="value-string"></a>

The value of the environment variable.

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[ProjectCreateEnvVarResponse](./models/project-create-env-var-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/envvar` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.createProjectDefaultSettings`<a id="circleciprojectcreateprojectdefaultsettings"></a>

[__EXPERIMENTAL__]  Creates a new CircleCI project, and returns a list of the default advanced settings. Can only be called on a repo with a main branch and an existing config.yml file. Not yet available to projects that use GitLab or GitHub App.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createProjectDefaultSettingsResponse =
  await circleci.project.createProjectDefaultSettings({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### provider: `string`<a id="provider-string"></a>

The `provider` segment of a project or org slug, the first of the three. This may be a VCS. For projects that use GitLab or GitHub App, use `circleci`.

##### organization: `string`<a id="organization-string"></a>

The `organization` segment of a project or org slug, the second of the three. For GitHub OAuth or Bitbucket projects, this is the organization name. For projects that use GitLab or GitHub App, use the organization ID (found in Organization Settings).

##### project: `string`<a id="project-string"></a>

The `project` segment of a project slug, the third of the three. For GitHub OAuth or Bitbucket projects, this is the repository name. For projects that use GitLab or GitHub App, use the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[ProjectSettings](./models/project-settings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{provider}/{organization}/{project}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.deleteCheckoutKeyByFingerprint`<a id="circleciprojectdeletecheckoutkeybyfingerprint"></a>

Deletes the checkout key via md5 or sha256 fingerprint. sha256 keys should be url-encoded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCheckoutKeyByFingerprintResponse =
  await circleci.project.deleteCheckoutKeyByFingerprint({
    projectSlug: "projectSlug_example",
    fingerprint: "fingerprint_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### fingerprint: `string`<a id="fingerprint-string"></a>

An SSH key fingerprint.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectDeleteCheckoutKeyByFingerprintResponse](./models/project-delete-checkout-key-by-fingerprint-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/checkout-key/{fingerprint}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.deleteEnvironmentVariable`<a id="circleciprojectdeleteenvironmentvariable"></a>

Deletes the environment variable named :name.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEnvironmentVariableResponse =
  await circleci.project.deleteEnvironmentVariable({
    projectSlug: "projectSlug_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### name: `string`<a id="name-string"></a>

The name of the environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectDeleteEnvironmentVariableResponse](./models/project-delete-environment-variable-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/envvar/{name}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.getBySlug`<a id="circleciprojectgetbyslug"></a>

Retrieves a project by project slug.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBySlugResponse = await circleci.project.getBySlug({
  projectSlug: "projectSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[ProjectGetBySlugResponse](./models/project-get-by-slug-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.getCheckoutKeyByFingerprint`<a id="circleciprojectgetcheckoutkeybyfingerprint"></a>

Returns an individual checkout key via md5 or sha256 fingerprint. sha256 keys should be url-encoded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCheckoutKeyByFingerprintResponse =
  await circleci.project.getCheckoutKeyByFingerprint({
    projectSlug: "projectSlug_example",
    fingerprint: "fingerprint_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### fingerprint: `string`<a id="fingerprint-string"></a>

An SSH key fingerprint.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectGetCheckoutKeyByFingerprintResponse](./models/project-get-checkout-key-by-fingerprint-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/checkout-key/{fingerprint}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.getMaskedEnvVar`<a id="circleciprojectgetmaskedenvvar"></a>

Returns the masked value of environment variable :name.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMaskedEnvVarResponse = await circleci.project.getMaskedEnvVar({
  projectSlug: "projectSlug_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### name: `string`<a id="name-string"></a>

The name of the environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectGetMaskedEnvVarResponse](./models/project-get-masked-env-var-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/envvar/{name}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.getSettings`<a id="circleciprojectgetsettings"></a>

[__EXPERIMENTAL__] Returns a list of the advanced settings for a CircleCI project, whether enabled (true) or not (false).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSettingsResponse = await circleci.project.getSettings({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### provider: `string`<a id="provider-string"></a>

The `provider` segment of a project or org slug, the first of the three. This may be a VCS. For projects that use GitLab or GitHub App, use `circleci`.

##### organization: `string`<a id="organization-string"></a>

The `organization` segment of a project or org slug, the second of the three. For GitHub OAuth or Bitbucket projects, this is the organization name. For projects that use GitLab or GitHub App, use the organization ID (found in Organization Settings).

##### project: `string`<a id="project-string"></a>

The `project` segment of a project slug, the third of the three. For GitHub OAuth or Bitbucket projects, this is the repository name. For projects that use GitLab or GitHub App, use the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[ProjectSettings](./models/project-settings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{provider}/{organization}/{project}/settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.listCheckoutKeys`<a id="circleciprojectlistcheckoutkeys"></a>

Returns a sequence of checkout keys for `:project`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCheckoutKeysResponse = await circleci.project.listCheckoutKeys({
  projectSlug: "projectSlug_example",
  digest: "sha256",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### digest: `'sha256' | 'md5'`<a id="digest-sha256--md5"></a>

The fingerprint digest type to return. This may be either `md5` or `sha256`. If not passed, defaults to `md5`.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectListCheckoutKeysResponse](./models/project-list-checkout-keys-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/checkout-key` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.listEnvVarValues`<a id="circleciprojectlistenvvarvalues"></a>

Returns four 'x' characters, in addition to the last four ASCII characters of the value, consistent with the display of environment variable values on the CircleCI website.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEnvVarValuesResponse = await circleci.project.listEnvVarValues({
  projectSlug: "projectSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

#### 🔄 Return<a id="🔄-return"></a>

[ProjectListEnvVarValuesResponse](./models/project-list-env-var-values-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/envvar` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.project.updateSettings`<a id="circleciprojectupdatesettings"></a>

[__EXPERIMENTAL__] Updates one or more of the advanced settings for a CircleCI project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSettingsResponse = await circleci.project.updateSettings({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### provider: `string`<a id="provider-string"></a>

The `provider` segment of a project or org slug, the first of the three. This may be a VCS. For projects that use GitLab or GitHub App, use `circleci`.

##### organization: `string`<a id="organization-string"></a>

The `organization` segment of a project or org slug, the second of the three. For GitHub OAuth or Bitbucket projects, this is the organization name. For projects that use GitLab or GitHub App, use the organization ID (found in Organization Settings).

##### project: `string`<a id="project-string"></a>

The `project` segment of a project slug, the third of the three. For GitHub OAuth or Bitbucket projects, this is the repository name. For projects that use GitLab or GitHub App, use the project ID (found in Project Settings).

##### advanced: [`ProjectSettingsAdvanced`](./models/project-settings-advanced.ts)<a id="advanced-projectsettingsadvancedmodelsproject-settings-advancedts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ProjectSettings](./models/project-settings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{provider}/{organization}/{project}/settings` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.schedule.createNewSchedule`<a id="circlecischedulecreatenewschedule"></a>

Not yet available to projects that use GitLab or GitHub App. Creates a schedule and returns the created schedule.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewScheduleResponse = await circleci.schedule.createNewSchedule({
  projectSlug: "projectSlug_example",
  parameters: {
    key: 1,
  },
  name: "name_example",
  timetable: {
    per_hour: 1,
    hours_of_day: [1],
    days_of_week: ["TUE"],
  },
  attribution_actor: "current",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parameters: Record<string, [`PipelineContinueExecutionRequestParametersValue`](./models/pipeline-continue-execution-request-parameters-value.ts)><a id="parameters-record"></a>

Pipeline parameters represented as key-value pairs. Must contain branch or tag.

##### name: `string`<a id="name-string"></a>

Name of the schedule.

##### timetable: [`ScheduleCreateNewScheduleRequestTimetable`](./models/schedule-create-new-schedule-request-timetable.ts)<a id="timetable-schedulecreatenewschedulerequesttimetablemodelsschedule-create-new-schedule-request-timetablets"></a>

##### attribution-actor: `string`<a id="attribution-actor-string"></a>

The attribution-actor of the scheduled pipeline.

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### description: `string`<a id="description-string"></a>

Description of the schedule.

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleCreateNewScheduleResponse](./models/schedule-create-new-schedule-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/schedule` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.schedule.getAllSchedules`<a id="circlecischedulegetallschedules"></a>

Returns all schedules for this project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllSchedulesResponse = await circleci.schedule.getAllSchedules({
  projectSlug: "projectSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectSlug: `string`<a id="projectslug-string"></a>

Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).

##### pageToken: `string`<a id="pagetoken-string"></a>

A token to retrieve the next page of results.

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleGetAllSchedulesResponse](./models/schedule-get-all-schedules-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/{project-slug}/schedule` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.schedule.getById`<a id="circlecischedulegetbyid"></a>

Get a schedule by id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await circleci.schedule.getById({
  scheduleId: "scheduleId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scheduleId: `string`<a id="scheduleid-string"></a>

The unique ID of the schedule.

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleGetByIdResponse](./models/schedule-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/schedule/{schedule-id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.schedule.removeById`<a id="circlecischeduleremovebyid"></a>

Not yet available to projects that use GitLab or GitHub App. Deletes the schedule by id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await circleci.schedule.removeById({
  scheduleId: "scheduleId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scheduleId: `string`<a id="scheduleid-string"></a>

The unique ID of the schedule.

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleRemoveByIdResponse](./models/schedule-remove-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/schedule/{schedule-id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.schedule.updateSchedule`<a id="circlecischeduleupdateschedule"></a>

Not yet available to projects that use GitLab or GitHub App. Updates a schedule and returns the updated schedule.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateScheduleResponse = await circleci.schedule.updateSchedule({
  scheduleId: "scheduleId_example",
  attribution_actor: "current",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scheduleId: `string`<a id="scheduleid-string"></a>

The unique ID of the schedule.

##### description: `string`<a id="description-string"></a>

Description of the schedule.

##### parameters: Record<string, [`PipelineContinueExecutionRequestParametersValue`](./models/pipeline-continue-execution-request-parameters-value.ts)><a id="parameters-record"></a>

Pipeline parameters represented as key-value pairs. Must contain branch or tag.

##### name: `string`<a id="name-string"></a>

Name of the schedule.

##### timetable: [`ScheduleUpdateScheduleRequestTimetable`](./models/schedule-update-schedule-request-timetable.ts)<a id="timetable-scheduleupdateschedulerequesttimetablemodelsschedule-update-schedule-request-timetablets"></a>

##### attribution-actor: `string`<a id="attribution-actor-string"></a>

The attribution-actor of the scheduled pipeline.

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleUpdateScheduleResponse](./models/schedule-update-schedule-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/schedule/{schedule-id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.user.getInformation`<a id="circleciusergetinformation"></a>

Provides information about the user that is currently signed in.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformationResponse = await circleci.user.getInformation();
```

#### 🔄 Return<a id="🔄-return"></a>

[UserGetInformationResponse](./models/user-get-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.user.getUserInformation`<a id="circleciusergetuserinformation"></a>

Provides information about the user with the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserInformationResponse = await circleci.user.getUserInformation({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The unique ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[UserGetUserInformationResponse](./models/user-get-user-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.user.listCollaborations`<a id="circleciuserlistcollaborations"></a>

Provides the set of organizations of which a user is a member or a collaborator.

The set of organizations that a user can collaborate on is composed of:

* Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub)
* The parent organization of repository that the user can collaborate on, but is not necessarily a member of
* The organization of the current user's account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollaborationsResponse = await circleci.user.listCollaborations();
```

#### 🔄 Return<a id="🔄-return"></a>

[Collaboration](./models/collaboration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/collaborations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.webhook.createOutboundWebhook`<a id="circleciwebhookcreateoutboundwebhook"></a>

Creates an outbound webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOutboundWebhookResponse =
  await circleci.webhook.createOutboundWebhook({
    name: "name_example",
    events: ["workflow-completed"],
    url: "url_example",
    verify_tls: true,
    signing_secret: "signing_secret_example",
    scope: {
      id: "id_example",
      type: "project",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the webhook

##### events: `string`[]<a id="events-string"></a>

Events that will trigger the webhook

##### url: `string`<a id="url-string"></a>

URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)

##### verify-tls: `boolean`<a id="verify-tls-boolean"></a>

Whether to enforce TLS certificate verification when delivering the webhook

##### signing-secret: `string`<a id="signing-secret-string"></a>

Secret used to build an HMAC hash of the payload and passed as a header in the webhook request

##### scope: [`WebhookCreateOutboundWebhookRequestScope`](./models/webhook-create-outbound-webhook-request-scope.ts)<a id="scope-webhookcreateoutboundwebhookrequestscopemodelswebhook-create-outbound-webhook-request-scopets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebhookCreateOutboundWebhookResponse](./models/webhook-create-outbound-webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhook` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.webhook.deleteOutboundWebhook`<a id="circleciwebhookdeleteoutboundwebhook"></a>

Deletes an outbound webhook

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOutboundWebhookResponse =
  await circleci.webhook.deleteOutboundWebhook({
    webhookId: "webhookId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookId: `string`<a id="webhookid-string"></a>

ID of the webhook (UUID)

#### 🔄 Return<a id="🔄-return"></a>

[WebhookDeleteOutboundWebhookResponse](./models/webhook-delete-outbound-webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhook/{webhook-id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.webhook.getById`<a id="circleciwebhookgetbyid"></a>

Get an outbound webhook by id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await circleci.webhook.getById({
  webhookId: "webhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookId: `string`<a id="webhookid-string"></a>

ID of the webhook (UUID)

#### 🔄 Return<a id="🔄-return"></a>

[WebhookGetByIdResponse](./models/webhook-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhook/{webhook-id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.webhook.listMatchingScope`<a id="circleciwebhooklistmatchingscope"></a>

Get a list of outbound webhooks that match the given scope-type and scope-id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMatchingScopeResponse = await circleci.webhook.listMatchingScope({
  scopeId: "scopeId_example",
  scopeType: "project",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scopeId: `string`<a id="scopeid-string"></a>

ID of the scope being used (at the moment, only project ID is supported)

##### scopeType: `'project'`<a id="scopetype-project"></a>

Type of the scope being used

#### 🔄 Return<a id="🔄-return"></a>

[WebhookListMatchingScopeResponse](./models/webhook-list-matching-scope-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhook` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.webhook.updateOutboundWebhook`<a id="circleciwebhookupdateoutboundwebhook"></a>

Updates an outbound webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOutboundWebhookResponse =
  await circleci.webhook.updateOutboundWebhook({
    webhookId: "webhookId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookId: `string`<a id="webhookid-string"></a>

ID of the webhook (UUID)

##### name: `string`<a id="name-string"></a>

Name of the webhook

##### events: `string`[]<a id="events-string"></a>

Events that will trigger the webhook

##### url: `string`<a id="url-string"></a>

URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)

##### signing-secret: `string`<a id="signing-secret-string"></a>

Secret used to build an HMAC hash of the payload and passed as a header in the webhook request

##### verify-tls: `boolean`<a id="verify-tls-boolean"></a>

Whether to enforce TLS certificate verification when delivering the webhook

#### 🔄 Return<a id="🔄-return"></a>

[WebhookUpdateOutboundWebhookResponse](./models/webhook-update-outbound-webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhook/{webhook-id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.workflow.approveJob`<a id="circleciworkflowapprovejob"></a>

Approves a pending approval job in a workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveJobResponse = await circleci.workflow.approveJob({
  approvalRequestId: "approvalRequestId_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### approvalRequestId: `string`<a id="approvalrequestid-string"></a>

The ID of the job being approved.

##### id: `string`<a id="id-string"></a>

The unique ID of the workflow.

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowApproveJobResponse](./models/workflow-approve-job-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflow/{id}/approve/{approval_request_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.workflow.cancelWorkflow`<a id="circleciworkflowcancelworkflow"></a>

Cancels a running workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelWorkflowResponse = await circleci.workflow.cancelWorkflow({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The unique ID of the workflow.

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowCancelWorkflowResponse](./models/workflow-cancel-workflow-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflow/{id}/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.workflow.getById`<a id="circleciworkflowgetbyid"></a>

Returns summary fields of a workflow by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await circleci.workflow.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The unique ID of the workflow.

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowGetByIdResponse](./models/workflow-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflow/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.workflow.getJobs`<a id="circleciworkflowgetjobs"></a>

Returns a sequence of jobs for a workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobsResponse = await circleci.workflow.getJobs({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The unique ID of the workflow.

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowGetJobsResponse](./models/workflow-get-jobs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflow/{id}/job` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `circleci.workflow.rerunWorkflow`<a id="circleciworkflowrerunworkflow"></a>

Reruns a workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const rerunWorkflowResponse = await circleci.workflow.rerunWorkflow({
  id: "id_example",
  enable_ssh: false,
  from_failed: false,
  jobs: [
    "c65b68ef-e73b-4bf2-be9a-7a322a9df150",
    "5e957edd-5e8c-4985-9178-5d0d69561822",
  ],
  sparse_tree: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The unique ID of the workflow.

##### enable_ssh: `boolean`<a id="enable_ssh-boolean"></a>

Whether to enable SSH access for the triggering user on the newly-rerun job. Requires the jobs parameter to be used and so is mutually exclusive with the from_failed parameter.

##### from_failed: `boolean`<a id="from_failed-boolean"></a>

Whether to rerun the workflow from the failed job. Mutually exclusive with the jobs parameter.

##### jobs: `string`[]<a id="jobs-string"></a>

A list of job IDs to rerun.

##### sparse_tree: `boolean`<a id="sparse_tree-boolean"></a>

Completes rerun using sparse trees logic, an optimization for workflows that have disconnected subgraphs. Requires jobs parameter and so is mutually exclusive with the from_failed parameter.

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowRerunWorkflowResponse](./models/workflow-rerun-workflow-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflow/{id}/rerun` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
