/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInnerMetrics } from './insights-get-project-summary-metrics-response-project-workflow-data-inner-metrics';
import { InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInnerTrends } from './insights-get-project-summary-metrics-response-project-workflow-data-inner-trends';

/**
 * 
 * @export
 * @interface InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInner
 */
export interface InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInner {
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInner
     */
    'workflow_name': string;
    /**
     * 
     * @type {InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInnerMetrics}
     * @memberof InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInner
     */
    'metrics': InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInnerMetrics;
    /**
     * 
     * @type {InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInnerTrends}
     * @memberof InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInner
     */
    'trends': InsightsGetProjectSummaryMetricsResponseProjectWorkflowDataInnerTrends;
}
