/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InsightsGetProjectWorkflowMetricsResponseItemsInnerMetricsDurationMetrics } from './insights-get-project-workflow-metrics-response-items-inner-metrics-duration-metrics';

/**
 * Metrics aggregated across a workflow for a given time window.
 * @export
 * @interface InsightsGetWorkflowSummaryMetricsResponseMetrics
 */
export interface InsightsGetWorkflowSummaryMetricsResponseMetrics {
    /**
     * The total number of runs, including runs that are still on-hold or running.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'total_runs': number;
    /**
     * The number of successful runs.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'successful_runs': number;
    /**
     * The mean time to recovery (mean time between failures and their next success) in seconds.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'mttr': number;
    /**
     * The total credits consumed by the workflow in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'total_credits_used': number;
    /**
     * The number of failed runs.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'failed_runs': number;
    /**
     * 
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'success_rate': number;
    /**
     * The number of runs that ran to completion within the aggregation window
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'completed_runs': number;
    /**
     * The timestamp of the first build within the requested reporting window.
     * @type {string}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'window_start': string;
    /**
     * 
     * @type {InsightsGetProjectWorkflowMetricsResponseItemsInnerMetricsDurationMetrics}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'duration_metrics': InsightsGetProjectWorkflowMetricsResponseItemsInnerMetricsDurationMetrics;
    /**
     * The timestamp of the last build within the requested reporting window.
     * @type {string}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'window_end': string;
    /**
     * The average number of runs per day.
     * @type {number}
     * @memberof InsightsGetWorkflowSummaryMetricsResponseMetrics
     */
    'throughput': number;
}

