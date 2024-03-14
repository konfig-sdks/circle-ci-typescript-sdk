/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InsightsGetSummaryMetricsWithTrendsResponseOrgData } from './insights-get-summary-metrics-with-trends-response-org-data';
import { InsightsGetSummaryMetricsWithTrendsResponseOrgProjectDataInner } from './insights-get-summary-metrics-with-trends-response-org-project-data-inner';

/**
 * Summary metrics with trends for the entire org, and for each project.
 * @export
 * @interface InsightsGetSummaryMetricsWithTrendsResponse
 */
export interface InsightsGetSummaryMetricsWithTrendsResponse {
    /**
     * 
     * @type {InsightsGetSummaryMetricsWithTrendsResponseOrgData}
     * @memberof InsightsGetSummaryMetricsWithTrendsResponse
     */
    'org_data': InsightsGetSummaryMetricsWithTrendsResponseOrgData;
    /**
     * Metrics for a single project, across all branches
     * @type {Array<InsightsGetSummaryMetricsWithTrendsResponseOrgProjectDataInner>}
     * @memberof InsightsGetSummaryMetricsWithTrendsResponse
     */
    'org_project_data': Array<InsightsGetSummaryMetricsWithTrendsResponseOrgProjectDataInner>;
    /**
     * A list of all the project names in the organization.
     * @type {Array<string>}
     * @memberof InsightsGetSummaryMetricsWithTrendsResponse
     */
    'all_projects': Array<string>;
}

