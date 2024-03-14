/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Info about a status of the parallel run.
 * @export
 * @interface JobGetDetailsResponseParallelRunsInner
 */
export interface JobGetDetailsResponseParallelRunsInner {
    /**
     * Index of the parallel run.
     * @type {number}
     * @memberof JobGetDetailsResponseParallelRunsInner
     */
    'index': number;
    /**
     * Status of the parallel run.
     * @type {string}
     * @memberof JobGetDetailsResponseParallelRunsInner
     */
    'status': string;
}

