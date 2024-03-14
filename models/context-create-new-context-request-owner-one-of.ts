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
 * @interface ContextCreateNewContextRequestOwnerOneOf
 */
export interface ContextCreateNewContextRequestOwnerOneOf {
    /**
     * The unique ID of the owner of the context. Specify either this or slug.
     * @type {string}
     * @memberof ContextCreateNewContextRequestOwnerOneOf
     */
    'id': string;
    /**
     * The type of the owner. Defaults to \"organization\". Accounts are only used as context owners in server.
     * @type {string}
     * @memberof ContextCreateNewContextRequestOwnerOneOf
     */
    'type'?: ContextCreateNewContextRequestOwnerOneOfTypeEnum;
}

type ContextCreateNewContextRequestOwnerOneOfTypeEnum = 'account' | 'organization'


