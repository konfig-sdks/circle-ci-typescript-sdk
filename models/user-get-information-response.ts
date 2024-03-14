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
 * @interface UserGetInformationResponse
 */
export interface UserGetInformationResponse {
    /**
     * The unique ID of the user.
     * @type {string}
     * @memberof UserGetInformationResponse
     */
    'id': string;
    /**
     * The login information for the user on the VCS.
     * @type {string}
     * @memberof UserGetInformationResponse
     */
    'login': string;
    /**
     * The name of the user.
     * @type {string}
     * @memberof UserGetInformationResponse
     */
    'name': string;
}

