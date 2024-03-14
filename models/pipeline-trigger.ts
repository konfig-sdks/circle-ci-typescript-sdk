/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PipelineTriggerActor } from './pipeline-trigger-actor';

/**
 * A summary of the trigger.
 * @export
 * @interface PipelineTrigger
 */
export interface PipelineTrigger {
    /**
     * The type of trigger.
     * @type {string}
     * @memberof PipelineTrigger
     */
    'type': PipelineTriggerTypeEnum;
    /**
     * The date and time the trigger was received.
     * @type {string}
     * @memberof PipelineTrigger
     */
    'received_at': string;
    /**
     * 
     * @type {PipelineTriggerActor}
     * @memberof PipelineTrigger
     */
    'actor': PipelineTriggerActor;
}

type PipelineTriggerTypeEnum = 'scheduled_pipeline' | 'explicit' | 'api' | 'webhook'


