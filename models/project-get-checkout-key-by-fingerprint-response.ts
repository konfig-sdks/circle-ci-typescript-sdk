/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A checkout key
 * @export
 * @interface ProjectGetCheckoutKeyByFingerprintResponse
 */
export interface ProjectGetCheckoutKeyByFingerprintResponse {
    /**
     * A public SSH key.
     * @type {string}
     * @memberof ProjectGetCheckoutKeyByFingerprintResponse
     */
    'public-key': string;
    /**
     * The type of checkout key. This may be either `deploy-key` or `github-user-key`.
     * @type {string}
     * @memberof ProjectGetCheckoutKeyByFingerprintResponse
     */
    'type': ProjectGetCheckoutKeyByFingerprintResponseTypeEnum;
    /**
     * An SSH key fingerprint.
     * @type {string}
     * @memberof ProjectGetCheckoutKeyByFingerprintResponse
     */
    'fingerprint': string;
    /**
     * A boolean value that indicates if this key is preferred.
     * @type {boolean}
     * @memberof ProjectGetCheckoutKeyByFingerprintResponse
     */
    'preferred': boolean;
    /**
     * The date and time the checkout key was created.
     * @type {string}
     * @memberof ProjectGetCheckoutKeyByFingerprintResponse
     */
    'created-at': string;
}

type ProjectGetCheckoutKeyByFingerprintResponseTypeEnum = 'deploy-key' | 'github-user-key'


