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
 * @interface TestsResponsePropertyInner
 */
export interface TestsResponsePropertyInner {
    /**
     * The failure message associated with the test.
     * @type {string}
     * @memberof TestsResponsePropertyInner
     */
    'message': string;
    /**
     * The program that generated the test results
     * @type {string}
     * @memberof TestsResponsePropertyInner
     */
    'source': string;
    /**
     * The time it took to run the test in seconds
     * @type {number}
     * @memberof TestsResponsePropertyInner
     */
    'run_time': number;
    /**
     * The file in which the test is defined.
     * @type {string}
     * @memberof TestsResponsePropertyInner
     */
    'file': string;
    /**
     * Indication of whether the test succeeded.
     * @type {string}
     * @memberof TestsResponsePropertyInner
     */
    'result': string;
    /**
     * The name of the test.
     * @type {string}
     * @memberof TestsResponsePropertyInner
     */
    'name': string;
    /**
     * The programmatic location of the test.
     * @type {string}
     * @memberof TestsResponsePropertyInner
     */
    'classname': string;
}

