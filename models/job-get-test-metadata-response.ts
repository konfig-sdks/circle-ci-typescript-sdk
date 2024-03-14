/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TestsResponsePropertyInner } from './tests-response-property-inner';

/**
 * 
 * @export
 * @interface JobGetTestMetadataResponse
 */
export interface JobGetTestMetadataResponse {
    /**
     * 
     * @type {Array<TestsResponsePropertyInner>}
     * @memberof JobGetTestMetadataResponse
     */
    'items': Array<TestsResponsePropertyInner>;
    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     * @type {string}
     * @memberof JobGetTestMetadataResponse
     */
    'next_page_token': string;
}
