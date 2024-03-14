/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Pipeline2Vcs } from './pipeline2-vcs';
import { PipelineErrorsInner } from './pipeline-errors-inner';
import { PipelineTrigger } from './pipeline-trigger';
import { PipelineTriggerParametersValue } from './pipeline-trigger-parameters-value';

/**
 * A pipeline response.
 * @export
 * @interface Pipeline2
 */
export interface Pipeline2 {
    /**
     * The unique ID of the pipeline.
     * @type {string}
     * @memberof Pipeline2
     */
    'id': string;
    /**
     * A sequence of errors that have occurred within the pipeline.
     * @type {Array<PipelineErrorsInner>}
     * @memberof Pipeline2
     */
    'errors': Array<PipelineErrorsInner>;
    /**
     * The project-slug for the pipeline.
     * @type {string}
     * @memberof Pipeline2
     */
    'project_slug': string;
    /**
     * The date and time the pipeline was last updated.
     * @type {string}
     * @memberof Pipeline2
     */
    'updated_at'?: string;
    /**
     * The number of the pipeline.
     * @type {number}
     * @memberof Pipeline2
     */
    'number': number;
    /**
     * 
     * @type {{ [key: string]: PipelineTriggerParametersValue; }}
     * @memberof Pipeline2
     */
    'trigger_parameters'?: { [key: string]: PipelineTriggerParametersValue; };
    /**
     * The current state of the pipeline.
     * @type {string}
     * @memberof Pipeline2
     */
    'state': Pipeline2StateEnum;
    /**
     * The date and time the pipeline was created.
     * @type {string}
     * @memberof Pipeline2
     */
    'created_at': string;
    /**
     * 
     * @type {PipelineTrigger}
     * @memberof Pipeline2
     */
    'trigger': PipelineTrigger;
    /**
     * 
     * @type {Pipeline2Vcs}
     * @memberof Pipeline2
     */
    'vcs'?: Pipeline2Vcs;
}

type Pipeline2StateEnum = 'created' | 'errored' | 'setup-pending' | 'setup' | 'pending'

