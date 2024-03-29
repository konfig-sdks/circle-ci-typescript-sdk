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
 * @interface UserGetUserInformationResponse
 */
export interface UserGetUserInformationResponse {
    /**
     * The unique ID of the user.
     * @type {string}
     * @memberof UserGetUserInformationResponse
     */
    'id': string;
    /**
     * The login information for the user on the VCS.
     * @type {string}
     * @memberof UserGetUserInformationResponse
     */
    'login': string;
    /**
     * The name of the user.
     * @type {string}
     * @memberof UserGetUserInformationResponse
     */
    'name': string;
}

