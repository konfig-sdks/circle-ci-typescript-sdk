/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InsightsGetProjectWorkflowMetricsResponseItemsInner } from './insights-get-project-workflow-metrics-response-items-inner';

/**
 * Paginated workflow summary metrics.
 * @export
 * @interface InsightsGetProjectWorkflowMetricsResponse
 */
export interface InsightsGetProjectWorkflowMetricsResponse {
    /**
     * Workflow summary metrics.
     * @type {Array<InsightsGetProjectWorkflowMetricsResponseItemsInner>}
     * @memberof InsightsGetProjectWorkflowMetricsResponse
     */
    'items': Array<InsightsGetProjectWorkflowMetricsResponseItemsInner>;
    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     * @type {string}
     * @memberof InsightsGetProjectWorkflowMetricsResponse
     */
    'next_page_token': string;
}

