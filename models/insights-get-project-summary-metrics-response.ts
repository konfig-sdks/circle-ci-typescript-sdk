/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InsightsGetProjectSummaryMetricsResponseProjectData } from './insights-get-project-summary-metrics-response-project-data';
import { InsightsGetProjectSummaryMetricsResponseProjectWorkflowBranchDataInner } from './insights-get-project-summary-metrics-response-project-workflow-branch-data-inner';
import { InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInner } from './insights-get-project-summary-metrics-response-project-workflow-data-inner';

/**
 * 
 * @export
 * @interface InsightsGetProjectSummaryMetricsResponse
 */
export interface InsightsGetProjectSummaryMetricsResponse {
    /**
     * The unique ID of the organization
     * @type {any}
     * @memberof InsightsGetProjectSummaryMetricsResponse
     */
    'org_id'?: any;
    /**
     * The unique ID of the project
     * @type {any}
     * @memberof InsightsGetProjectSummaryMetricsResponse
     */
    'project_id'?: any;
    /**
     * 
     * @type {InsightsGetProjectSummaryMetricsResponseProjectData}
     * @memberof InsightsGetProjectSummaryMetricsResponse
     */
    'project_data'?: InsightsGetProjectSummaryMetricsResponseProjectData;
    /**
     * A list of metrics and trends data for workflows for a given project.
     * @type {Array<InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInner>}
     * @memberof InsightsGetProjectSummaryMetricsResponse
     */
    'project_workflow_data'?: Array<InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInner>;
    /**
     * A list of metrics and trends data for branches for a given project.
     * @type {Array<InsightsGetProjectSummaryMetricsResponseProjectWorkflowBranchDataInner>}
     * @memberof InsightsGetProjectSummaryMetricsResponse
     */
    'project_workflow_branch_data'?: Array<InsightsGetProjectSummaryMetricsResponseProjectWorkflowBranchDataInner>;
    /**
     * A list of all the branches for a given project.
     * @type {Array<string>}
     * @memberof InsightsGetProjectSummaryMetricsResponse
     */
    'all_branches'?: Array<string>;
    /**
     * A list of all the workflows for a given project.
     * @type {Array<string>}
     * @memberof InsightsGetProjectSummaryMetricsResponse
     */
    'all_workflows'?: Array<string>;
}
