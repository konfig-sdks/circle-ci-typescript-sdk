/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Workflow } from './workflow';

/**
 * A list of workflows and associated pagination token.
 * @export
 * @interface PipelineListWorkflowsResponse
 */
export interface PipelineListWorkflowsResponse {
    /**
     * A list of workflows.
     * @type {Array<Workflow>}
     * @memberof PipelineListWorkflowsResponse
     */
    'items': Array<Workflow>;
    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     * @type {string}
     * @memberof PipelineListWorkflowsResponse
     */
    'next_page_token': string;
}

