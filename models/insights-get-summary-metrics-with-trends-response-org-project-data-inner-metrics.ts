/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Metrics for a single project, across all branches.
 * @export
 * @interface InsightsGetSummaryMetricsWithTrendsResponseOrgProjectDataInnerMetrics
 */
export interface InsightsGetSummaryMetricsWithTrendsResponseOrgProjectDataInnerMetrics {
    /**
     * The total credits consumed over the current timeseries interval.
     * @type {number}
     * @memberof InsightsGetSummaryMetricsWithTrendsResponseOrgProjectDataInnerMetrics
     */
    'total_credits_used': number;
    /**
     * Total duration, in seconds.
     * @type {number}
     * @memberof InsightsGetSummaryMetricsWithTrendsResponseOrgProjectDataInnerMetrics
     */
    'total_duration_secs': number;
    /**
     * The total number of runs, including runs that are still on-hold or running.
     * @type {number}
     * @memberof InsightsGetSummaryMetricsWithTrendsResponseOrgProjectDataInnerMetrics
     */
    'total_runs': number;
    /**
     * 
     * @type {number}
     * @memberof InsightsGetSummaryMetricsWithTrendsResponseOrgProjectDataInnerMetrics
     */
    'success_rate': number;
}

