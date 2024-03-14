/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Trends for aggregated metrics across a workflow for a given time window.
 * @export
 * @interface InsightsGetWorkflowSummaryMetricsResponseTrends
 */
export interface InsightsGetWorkflowSummaryMetricsResponseTrends {
    /**
     * The trend value for total number of runs.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseTrends
     */
    'total_runs': number;
    /**
     * The trend value for number of failed runs.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseTrends
     */
    'failed_runs': number;
    /**
     * The trend value for the success rate.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseTrends
     */
    'success_rate': number;
    /**
     * Trend value for the 95th percentile duration for a workflow for a given time window.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseTrends
     */
    'p95_duration_secs': number;
    /**
     * Trend value for the 50th percentile duration for a workflow for a given time window.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseTrends
     */
    'median_duration_secs': number;
    /**
     * The trend value for total credits consumed.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseTrends
     */
    'total_credits_used': number;
    /**
     * trend for mean time to recovery (mean time between failures and their next success).
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseTrends
     */
    'mttr': number;
    /**
     * Trend value for the average number of runs per day.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseTrends
     */
    'throughput': number;
}

