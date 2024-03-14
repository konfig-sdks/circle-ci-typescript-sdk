/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface InsightsGetRecentWorkflowRunsResponseItemsInner
 */
export interface InsightsGetRecentWorkflowRunsResponseItemsInner {
    /**
     * The unique ID of the workflow.
     * @type {string}
     * @memberof InsightsGetRecentWorkflowRunsResponseItemsInner
     */
    'id': string;
    /**
     * The VCS branch of a Workflow\'s trigger.
     * @type {string}
     * @memberof InsightsGetRecentWorkflowRunsResponseItemsInner
     */
    'branch': string;
    /**
     * The duration in seconds of a run.
     * @type {number}
     * @memberof InsightsGetRecentWorkflowRunsResponseItemsInner
     */
    'duration': number;
    /**
     * The date and time the workflow was created.
     * @type {string}
     * @memberof InsightsGetRecentWorkflowRunsResponseItemsInner
     */
    'created_at': string;
    /**
     * The date and time the workflow stopped.
     * @type {string}
     * @memberof InsightsGetRecentWorkflowRunsResponseItemsInner
     */
    'stopped_at': string;
    /**
     * The number of credits used during execution. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
     * @type {number}
     * @memberof InsightsGetRecentWorkflowRunsResponseItemsInner
     */
    'credits_used': number;
    /**
     * Workflow status.
     * @type {string}
     * @memberof InsightsGetRecentWorkflowRunsResponseItemsInner
     */
    'status': InsightsGetRecentWorkflowRunsResponseItemsInnerStatusEnum;
    /**
     * Describes if the job is an approval job or not. Approval jobs are intermediary jobs that are created to pause the workflow until approved.
     * @type {boolean}
     * @memberof InsightsGetRecentWorkflowRunsResponseItemsInner
     */
    'is_approval': boolean;
}

type InsightsGetRecentWorkflowRunsResponseItemsInnerStatusEnum = 'success' | 'failed' | 'error' | 'canceled' | 'unauthorized'

