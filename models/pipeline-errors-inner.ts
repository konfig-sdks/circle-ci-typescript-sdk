/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An error with a type and message.
 * @export
 * @interface PipelineErrorsInner
 */
export interface PipelineErrorsInner {
    /**
     * The type of error.
     * @type {string}
     * @memberof PipelineErrorsInner
     */
    'type': PipelineErrorsInnerTypeEnum;
    /**
     * A human-readable error message.
     * @type {string}
     * @memberof PipelineErrorsInner
     */
    'message': string;
}

type PipelineErrorsInnerTypeEnum = 'config' | 'config-fetch' | 'timeout' | 'permission' | 'other' | 'plan'


