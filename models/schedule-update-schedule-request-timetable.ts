/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Timetable that specifies when a schedule triggers.
 * @export
 * @interface ScheduleUpdateScheduleRequestTimetable
 */
export interface ScheduleUpdateScheduleRequestTimetable {
    /**
     * Number of times a schedule triggers per hour, value must be between 1 and 60
     * @type {number}
     * @memberof ScheduleUpdateScheduleRequestTimetable
     */
    'per-hour'?: number;
    /**
     * Hours in a day in which the schedule triggers.
     * @type {Array<number>}
     * @memberof ScheduleUpdateScheduleRequestTimetable
     */
    'hours-of-day'?: Array<number>;
    /**
     * Days in a week in which the schedule triggers.
     * @type {Array<string>}
     * @memberof ScheduleUpdateScheduleRequestTimetable
     */
    'days-of-week'?: Array<ScheduleUpdateScheduleRequestTimetableDaysOfWeekEnum>;
    /**
     * Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.
     * @type {Array<number>}
     * @memberof ScheduleUpdateScheduleRequestTimetable
     */
    'days-of-month'?: Array<number>;
    /**
     * Months in which the schedule triggers.
     * @type {Array<string>}
     * @memberof ScheduleUpdateScheduleRequestTimetable
     */
    'months'?: Array<ScheduleUpdateScheduleRequestTimetableMonthsEnum>;
}

type ScheduleUpdateScheduleRequestTimetableDaysOfWeekEnum = 'TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI'
type ScheduleUpdateScheduleRequestTimetableMonthsEnum = 'MAR' | 'NOV' | 'DEC' | 'JUN' | 'MAY' | 'OCT' | 'FEB' | 'APR' | 'SEP' | 'AUG' | 'JAN' | 'JUL'


