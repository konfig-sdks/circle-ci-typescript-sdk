/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PipelineErrorsInner } from './pipeline-errors-inner';
import { PipelineGetByIdResponseVcs } from './pipeline-get-by-id-response-vcs';
import { PipelineTrigger } from './pipeline-trigger';
import { PipelineTriggerParametersValue } from './pipeline-trigger-parameters-value';

/**
 * A pipeline response.
 * @export
 * @interface PipelineGetByIdResponse
 */
export interface PipelineGetByIdResponse {
    /**
     * The unique ID of the pipeline.
     * @type {string}
     * @memberof PipelineGetByIdResponse
     */
    'id': string;
    /**
     * A sequence of errors that have occurred within the pipeline.
     * @type {Array<PipelineErrorsInner>}
     * @memberof PipelineGetByIdResponse
     */
    'errors': Array<PipelineErrorsInner>;
    /**
     * The project-slug for the pipeline.
     * @type {string}
     * @memberof PipelineGetByIdResponse
     */
    'project_slug': string;
    /**
     * The date and time the pipeline was last updated.
     * @type {string}
     * @memberof PipelineGetByIdResponse
     */
    'updated_at'?: string;
    /**
     * The number of the pipeline.
     * @type {number}
     * @memberof PipelineGetByIdResponse
     */
    'number': number;
    /**
     * 
     * @type {{ [key: string]: PipelineTriggerParametersValue; }}
     * @memberof PipelineGetByIdResponse
     */
    'trigger_parameters'?: { [key: string]: PipelineTriggerParametersValue; };
    /**
     * The current state of the pipeline.
     * @type {string}
     * @memberof PipelineGetByIdResponse
     */
    'state': PipelineGetByIdResponseStateEnum;
    /**
     * The date and time the pipeline was created.
     * @type {string}
     * @memberof PipelineGetByIdResponse
     */
    'created_at': string;
    /**
     * 
     * @type {PipelineTrigger}
     * @memberof PipelineGetByIdResponse
     */
    'trigger': PipelineTrigger;
    /**
     * 
     * @type {PipelineGetByIdResponseVcs}
     * @memberof PipelineGetByIdResponse
     */
    'vcs'?: PipelineGetByIdResponseVcs;
}

type PipelineGetByIdResponseStateEnum = 'created' | 'errored' | 'setup-pending' | 'setup' | 'pending'


