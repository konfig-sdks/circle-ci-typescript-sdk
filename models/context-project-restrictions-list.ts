/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContextProjectRestrictionsListItemsInner } from './context-project-restrictions-list-items-inner';

/**
 * 
 * @export
 * @interface ContextProjectRestrictionsList
 */
export interface ContextProjectRestrictionsList {
    /**
     * 
     * @type {Array<ContextProjectRestrictionsListItemsInner>}
     * @memberof ContextProjectRestrictionsList
     */
    'items'?: Array<ContextProjectRestrictionsListItemsInner>;
    /**
     * Token that can be used to retrieve next page of results
     * @type {string}
     * @memberof ContextProjectRestrictionsList
     */
    'next_page_token'?: string | null;
}

