/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InsightsGetJobTimeseriesDataResponseItemsInner } from './insights-get-job-timeseries-data-response-items-inner';

/**
 * Project level timeseries metrics response
 * @export
 * @interface InsightsGetJobTimeseriesDataResponse
 */
export interface InsightsGetJobTimeseriesDataResponse {
    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     * @type {string}
     * @memberof InsightsGetJobTimeseriesDataResponse
     */
    'next_page_token': string;
    /**
     * Aggregate metrics for a workflow at a time granularity
     * @type {Array<InsightsGetJobTimeseriesDataResponseItemsInner>}
     * @memberof InsightsGetJobTimeseriesDataResponse
     */
    'items': Array<InsightsGetJobTimeseriesDataResponseItemsInner>;
}

