/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhookScope } from './webhook-scope';

/**
 * 
 * @export
 * @interface Webhook
 */
export interface Webhook {
    /**
     * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
     * @type {string}
     * @memberof Webhook
     */
    'url': string;
    /**
     * Whether to enforce TLS certificate verification when delivering the webhook
     * @type {boolean}
     * @memberof Webhook
     */
    'verify-tls': boolean;
    /**
     * The unique ID of the webhook
     * @type {string}
     * @memberof Webhook
     */
    'id': string;
    /**
     * Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request
     * @type {string}
     * @memberof Webhook
     */
    'signing-secret': string;
    /**
     * The date and time the webhook was last updated.
     * @type {string}
     * @memberof Webhook
     */
    'updated-at': string;
    /**
     * Name of the webhook
     * @type {string}
     * @memberof Webhook
     */
    'name': string;
    /**
     * The date and time the webhook was created.
     * @type {string}
     * @memberof Webhook
     */
    'created-at': string;
    /**
     * 
     * @type {WebhookScope}
     * @memberof Webhook
     */
    'scope': WebhookScope;
    /**
     * Events that will trigger the webhook
     * @type {Array<string>}
     * @memberof Webhook
     */
    'events': Array<WebhookEventsEnum>;
}

type WebhookEventsEnum = 'workflow-completed' | 'job-completed'

