/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContextCreateNewContextRequestOwner } from './context-create-new-context-request-owner';

/**
 * 
 * @export
 * @interface ContextCreateNewContextRequest
 */
export interface ContextCreateNewContextRequest {
    /**
     * The user defined name of the context.
     * @type {string}
     * @memberof ContextCreateNewContextRequest
     */
    'name': string;
    /**
     * 
     * @type {ContextCreateNewContextRequestOwner}
     * @memberof ContextCreateNewContextRequest
     */
    'owner': ContextCreateNewContextRequestOwner;
}

