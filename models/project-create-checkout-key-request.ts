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
 * @interface ProjectCreateCheckoutKeyRequest
 */
export interface ProjectCreateCheckoutKeyRequest {
    /**
     * The type of checkout key to create. This may be either `deploy-key` or `user-key`.
     * @type {string}
     * @memberof ProjectCreateCheckoutKeyRequest
     */
    'type': ProjectCreateCheckoutKeyRequestTypeEnum;
}

type ProjectCreateCheckoutKeyRequestTypeEnum = 'user-key' | 'deploy-key'


