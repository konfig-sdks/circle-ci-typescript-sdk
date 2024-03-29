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
 * @interface ContextProjectRestrictionsListItemsInner
 */
export interface ContextProjectRestrictionsListItemsInner {
    /**
     * UUID of the context
     * @type {string}
     * @memberof ContextProjectRestrictionsListItemsInner
     */
    'context_id'?: string;
    /**
     * UUID of the restriction
     * @type {string}
     * @memberof ContextProjectRestrictionsListItemsInner
     */
    'id'?: string;
    /**
     * Deprecated - For \"project\" restrictions read the project ID from \"restriction_value\" instead.  UUID of the project used in a project restriction. 
     * @type {string}
     * @memberof ContextProjectRestrictionsListItemsInner
     * @deprecated
     */
    'project_id'?: string;
    /**
     * Contains a human-readable reference for the restriction. For \"project\" restrictions this is the name of the project.  May be null. 
     * @type {string}
     * @memberof ContextProjectRestrictionsListItemsInner
     */
    'name'?: string;
    /**
     * Type of the restriction
     * @type {string}
     * @memberof ContextProjectRestrictionsListItemsInner
     */
    'restriction_type'?: ContextProjectRestrictionsListItemsInnerRestrictionTypeEnum;
    /**
     * Value used to evaluate the restriction
     * @type {string}
     * @memberof ContextProjectRestrictionsListItemsInner
     */
    'restriction_value'?: string;
}

type ContextProjectRestrictionsListItemsInnerRestrictionTypeEnum = 'project' | 'expression'


