/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InsightsGetSummaryMetricsWithTrendsResponseOrgDataMetrics } from './insights-get-summary-metrics-with-trends-response-org-data-metrics';
import { InsightsGetSummaryMetricsWithTrendsResponseOrgDataTrends } from './insights-get-summary-metrics-with-trends-response-org-data-trends';

/**
 * Aggregated metrics for an org, with trends.
 * @export
 * @interface InsightsGetSummaryMetricsWithTrendsResponseOrgData
 */
export interface InsightsGetSummaryMetricsWithTrendsResponseOrgData {
    /**
     * 
     * @type {InsightsGetSummaryMetricsWithTrendsResponseOrgDataMetrics}
     * @memberof InsightsGetSummaryMetricsWithTrendsResponseOrgData
     */
    'metrics': InsightsGetSummaryMetricsWithTrendsResponseOrgDataMetrics;
    /**
     * 
     * @type {InsightsGetSummaryMetricsWithTrendsResponseOrgDataTrends}
     * @memberof InsightsGetSummaryMetricsWithTrendsResponseOrgData
     */
    'trends': InsightsGetSummaryMetricsWithTrendsResponseOrgDataTrends;
}

