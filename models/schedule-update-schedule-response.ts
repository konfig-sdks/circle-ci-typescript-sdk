/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PipelineContinueExecutionRequestParametersValue } from './pipeline-continue-execution-request-parameters-value';
import { ScheduleCreateNewScheduleRequestTimetable } from './schedule-create-new-schedule-request-timetable';
import { UserProperty } from './user-property';

/**
 * A schedule response
 * @export
 * @interface ScheduleUpdateScheduleResponse
 */
export interface ScheduleUpdateScheduleResponse {
    /**
     * Description of the schedule.
     * @type {string}
     * @memberof ScheduleUpdateScheduleResponse
     */
    'description': string;
    /**
     * Pipeline parameters represented as key-value pairs. Must contain branch or tag.
     * @type {{ [key: string]: PipelineContinueExecutionRequestParametersValue; }}
     * @memberof ScheduleUpdateScheduleResponse
     */
    'parameters': { [key: string]: PipelineContinueExecutionRequestParametersValue; };
    /**
     * The unique ID of the schedule.
     * @type {string}
     * @memberof ScheduleUpdateScheduleResponse
     */
    'id': string;
    /**
     * 
     * @type {ScheduleCreateNewScheduleRequestTimetable}
     * @memberof ScheduleUpdateScheduleResponse
     */
    'timetable': ScheduleCreateNewScheduleRequestTimetable;
    /**
     * The date and time the pipeline was last updated.
     * @type {string}
     * @memberof ScheduleUpdateScheduleResponse
     */
    'updated-at': string;
    /**
     * Name of the schedule.
     * @type {string}
     * @memberof ScheduleUpdateScheduleResponse
     */
    'name': string;
    /**
     * The date and time the pipeline was created.
     * @type {string}
     * @memberof ScheduleUpdateScheduleResponse
     */
    'created-at': string;
    /**
     * The project-slug for the schedule
     * @type {string}
     * @memberof ScheduleUpdateScheduleResponse
     */
    'project-slug': string;
    /**
     * 
     * @type {UserProperty}
     * @memberof ScheduleUpdateScheduleResponse
     */
    'actor': UserProperty;
}

