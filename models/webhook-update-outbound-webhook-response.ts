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
 * @interface WebhookUpdateOutboundWebhookResponse
 */
export interface WebhookUpdateOutboundWebhookResponse {
    /**
     * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
     * @type {string}
     * @memberof WebhookUpdateOutboundWebhookResponse
     */
    'url': string;
    /**
     * Whether to enforce TLS certificate verification when delivering the webhook
     * @type {boolean}
     * @memberof WebhookUpdateOutboundWebhookResponse
     */
    'verify-tls': boolean;
    /**
     * The unique ID of the webhook
     * @type {string}
     * @memberof WebhookUpdateOutboundWebhookResponse
     */
    'id': string;
    /**
     * Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request
     * @type {string}
     * @memberof WebhookUpdateOutboundWebhookResponse
     */
    'signing-secret': string;
    /**
     * The date and time the webhook was last updated.
     * @type {string}
     * @memberof WebhookUpdateOutboundWebhookResponse
     */
    'updated-at': string;
    /**
     * Name of the webhook
     * @type {string}
     * @memberof WebhookUpdateOutboundWebhookResponse
     */
    'name': string;
    /**
     * The date and time the webhook was created.
     * @type {string}
     * @memberof WebhookUpdateOutboundWebhookResponse
     */
    'created-at': string;
    /**
     * 
     * @type {WebhookScope}
     * @memberof WebhookUpdateOutboundWebhookResponse
     */
    'scope': WebhookScope;
    /**
     * Events that will trigger the webhook
     * @type {Array<string>}
     * @memberof WebhookUpdateOutboundWebhookResponse
     */
    'events': Array<WebhookUpdateOutboundWebhookResponseEventsEnum>;
}

type WebhookUpdateOutboundWebhookResponseEventsEnum = 'workflow-completed' | 'job-completed'

