/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A workflow
 * @export
 * @interface Workflow
 */
export interface Workflow {
    /**
     * The ID of the pipeline this workflow belongs to.
     * @type {string}
     * @memberof Workflow
     */
    'pipeline_id': string;
    /**
     * 
     * @type {string}
     * @memberof Workflow
     */
    'canceled_by'?: string;
    /**
     * The unique ID of the workflow.
     * @type {string}
     * @memberof Workflow
     */
    'id': string;
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof Workflow
     */
    'name': string;
    /**
     * The project-slug for the pipeline this workflow belongs to.
     * @type {string}
     * @memberof Workflow
     */
    'project_slug': string;
    /**
     * 
     * @type {string}
     * @memberof Workflow
     */
    'errored_by'?: string;
    /**
     * Tag used for the workflow
     * @type {string}
     * @memberof Workflow
     */
    'tag'?: WorkflowTagEnum;
    /**
     * The current status of the workflow.
     * @type {string}
     * @memberof Workflow
     */
    'status': WorkflowStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Workflow
     */
    'started_by': string;
    /**
     * The number of the pipeline this workflow belongs to.
     * @type {number}
     * @memberof Workflow
     */
    'pipeline_number': number;
    /**
     * The date and time the workflow was created.
     * @type {string}
     * @memberof Workflow
     */
    'created_at': string;
    /**
     * The date and time the workflow stopped.
     * @type {string}
     * @memberof Workflow
     */
    'stopped_at': string;
}

type WorkflowTagEnum = 'setup'
type WorkflowStatusEnum = 'success' | 'running' | 'not_run' | 'failed' | 'error' | 'failing' | 'on_hold' | 'canceled' | 'unauthorized'

