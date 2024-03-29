/* tslint:disable */
/* eslint-disable */
/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { WorkflowApproveJobResponse } from '../models';
// @ts-ignore
import { WorkflowApproveJobdefaultResponse } from '../models';
// @ts-ignore
import { WorkflowCancelWorkflowResponse } from '../models';
// @ts-ignore
import { WorkflowCancelWorkflowdefaultResponse } from '../models';
// @ts-ignore
import { WorkflowGetByIdResponse } from '../models';
// @ts-ignore
import { WorkflowGetByIddefaultResponse } from '../models';
// @ts-ignore
import { WorkflowGetJobsResponse } from '../models';
// @ts-ignore
import { WorkflowGetJobsdefaultResponse } from '../models';
// @ts-ignore
import { WorkflowRerunWorkflowRequest } from '../models';
// @ts-ignore
import { WorkflowRerunWorkflowResponse } from '../models';
// @ts-ignore
import { WorkflowRerunWorkflowdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WorkflowApi - axios parameter creator
 * @export
 */
export const WorkflowApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Approves a pending approval job in a workflow.
         * @summary Approve a job
         * @param {string} approvalRequestId The ID of the job being approved.
         * @param {string} id The unique ID of the workflow.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        approveJob: async (approvalRequestId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'approvalRequestId' is not null or undefined
            assertParamExists('approveJob', 'approvalRequestId', approvalRequestId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('approveJob', 'id', id)
            const localVarPath = `/workflow/{id}/approve/{approval_request_id}`
                .replace(`{${"approval_request_id"}}`, encodeURIComponent(String(approvalRequestId !== undefined ? approvalRequestId : `-approval_request_id-`)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key_header required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Circle-Token", keyParamName: "apiKeyHeader", configuration })
            // authentication api_key_query required
            await setApiKeyToObject({object: localVarQueryParameter, key: "circle-token", keyParamName: "apiKeyQuery", configuration})
            // authentication basic_auth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/workflow/{id}/approve/{approval_request_id}',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Cancels a running workflow.
         * @summary Cancel a workflow
         * @param {string} id The unique ID of the workflow.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelWorkflow: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('cancelWorkflow', 'id', id)
            const localVarPath = `/workflow/{id}/cancel`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key_header required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Circle-Token", keyParamName: "apiKeyHeader", configuration })
            // authentication api_key_query required
            await setApiKeyToObject({object: localVarQueryParameter, key: "circle-token", keyParamName: "apiKeyQuery", configuration})
            // authentication basic_auth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/workflow/{id}/cancel',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns summary fields of a workflow by ID.
         * @summary Get a workflow
         * @param {string} id The unique ID of the workflow.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/workflow/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key_header required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Circle-Token", keyParamName: "apiKeyHeader", configuration })
            // authentication api_key_query required
            await setApiKeyToObject({object: localVarQueryParameter, key: "circle-token", keyParamName: "apiKeyQuery", configuration})
            // authentication basic_auth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/workflow/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a sequence of jobs for a workflow.
         * @summary Get a workflow\'s jobs
         * @param {string} id The unique ID of the workflow.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobs: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getJobs', 'id', id)
            const localVarPath = `/workflow/{id}/job`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key_header required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Circle-Token", keyParamName: "apiKeyHeader", configuration })
            // authentication api_key_query required
            await setApiKeyToObject({object: localVarQueryParameter, key: "circle-token", keyParamName: "apiKeyQuery", configuration})
            // authentication basic_auth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/workflow/{id}/job',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reruns a workflow.
         * @summary Rerun a workflow
         * @param {string} id The unique ID of the workflow.
         * @param {WorkflowRerunWorkflowRequest} [workflowRerunWorkflowRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rerunWorkflow: async (id: string, workflowRerunWorkflowRequest?: WorkflowRerunWorkflowRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('rerunWorkflow', 'id', id)
            const localVarPath = `/workflow/{id}/rerun`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key_header required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Circle-Token", keyParamName: "apiKeyHeader", configuration })
            // authentication api_key_query required
            await setApiKeyToObject({object: localVarQueryParameter, key: "circle-token", keyParamName: "apiKeyQuery", configuration})
            // authentication basic_auth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: workflowRerunWorkflowRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/workflow/{id}/rerun',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(workflowRerunWorkflowRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WorkflowApi - functional programming interface
 * @export
 */
export const WorkflowApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkflowApiAxiosParamCreator(configuration)
    return {
        /**
         * Approves a pending approval job in a workflow.
         * @summary Approve a job
         * @param {WorkflowApiApproveJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async approveJob(requestParameters: WorkflowApiApproveJobRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkflowApproveJobResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.approveJob(requestParameters.approvalRequestId, requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Cancels a running workflow.
         * @summary Cancel a workflow
         * @param {WorkflowApiCancelWorkflowRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelWorkflow(requestParameters: WorkflowApiCancelWorkflowRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkflowCancelWorkflowResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelWorkflow(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns summary fields of a workflow by ID.
         * @summary Get a workflow
         * @param {WorkflowApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: WorkflowApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkflowGetByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a sequence of jobs for a workflow.
         * @summary Get a workflow\'s jobs
         * @param {WorkflowApiGetJobsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobs(requestParameters: WorkflowApiGetJobsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkflowGetJobsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobs(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Reruns a workflow.
         * @summary Rerun a workflow
         * @param {WorkflowApiRerunWorkflowRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rerunWorkflow(requestParameters: WorkflowApiRerunWorkflowRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkflowRerunWorkflowResponse>> {
            const workflowRerunWorkflowRequest: WorkflowRerunWorkflowRequest = {
                enable_ssh: requestParameters.enable_ssh,
                from_failed: requestParameters.from_failed,
                jobs: requestParameters.jobs,
                sparse_tree: requestParameters.sparse_tree
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.rerunWorkflow(requestParameters.id, workflowRerunWorkflowRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkflowApi - factory interface
 * @export
 */
export const WorkflowApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkflowApiFp(configuration)
    return {
        /**
         * Approves a pending approval job in a workflow.
         * @summary Approve a job
         * @param {WorkflowApiApproveJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        approveJob(requestParameters: WorkflowApiApproveJobRequest, options?: AxiosRequestConfig): AxiosPromise<WorkflowApproveJobResponse> {
            return localVarFp.approveJob(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Cancels a running workflow.
         * @summary Cancel a workflow
         * @param {WorkflowApiCancelWorkflowRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelWorkflow(requestParameters: WorkflowApiCancelWorkflowRequest, options?: AxiosRequestConfig): AxiosPromise<WorkflowCancelWorkflowResponse> {
            return localVarFp.cancelWorkflow(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns summary fields of a workflow by ID.
         * @summary Get a workflow
         * @param {WorkflowApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: WorkflowApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<WorkflowGetByIdResponse> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a sequence of jobs for a workflow.
         * @summary Get a workflow\'s jobs
         * @param {WorkflowApiGetJobsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobs(requestParameters: WorkflowApiGetJobsRequest, options?: AxiosRequestConfig): AxiosPromise<WorkflowGetJobsResponse> {
            return localVarFp.getJobs(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Reruns a workflow.
         * @summary Rerun a workflow
         * @param {WorkflowApiRerunWorkflowRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rerunWorkflow(requestParameters: WorkflowApiRerunWorkflowRequest, options?: AxiosRequestConfig): AxiosPromise<WorkflowRerunWorkflowResponse> {
            return localVarFp.rerunWorkflow(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for approveJob operation in WorkflowApi.
 * @export
 * @interface WorkflowApiApproveJobRequest
 */
export type WorkflowApiApproveJobRequest = {
    
    /**
    * The ID of the job being approved.
    * @type {string}
    * @memberof WorkflowApiApproveJob
    */
    readonly approvalRequestId: string
    
    /**
    * The unique ID of the workflow.
    * @type {string}
    * @memberof WorkflowApiApproveJob
    */
    readonly id: string
    
}

/**
 * Request parameters for cancelWorkflow operation in WorkflowApi.
 * @export
 * @interface WorkflowApiCancelWorkflowRequest
 */
export type WorkflowApiCancelWorkflowRequest = {
    
    /**
    * The unique ID of the workflow.
    * @type {string}
    * @memberof WorkflowApiCancelWorkflow
    */
    readonly id: string
    
}

/**
 * Request parameters for getById operation in WorkflowApi.
 * @export
 * @interface WorkflowApiGetByIdRequest
 */
export type WorkflowApiGetByIdRequest = {
    
    /**
    * The unique ID of the workflow.
    * @type {string}
    * @memberof WorkflowApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for getJobs operation in WorkflowApi.
 * @export
 * @interface WorkflowApiGetJobsRequest
 */
export type WorkflowApiGetJobsRequest = {
    
    /**
    * The unique ID of the workflow.
    * @type {string}
    * @memberof WorkflowApiGetJobs
    */
    readonly id: string
    
}

/**
 * Request parameters for rerunWorkflow operation in WorkflowApi.
 * @export
 * @interface WorkflowApiRerunWorkflowRequest
 */
export type WorkflowApiRerunWorkflowRequest = {
    
    /**
    * The unique ID of the workflow.
    * @type {string}
    * @memberof WorkflowApiRerunWorkflow
    */
    readonly id: string
    
} & WorkflowRerunWorkflowRequest

/**
 * WorkflowApiGenerated - object-oriented interface
 * @export
 * @class WorkflowApiGenerated
 * @extends {BaseAPI}
 */
export class WorkflowApiGenerated extends BaseAPI {
    /**
     * Approves a pending approval job in a workflow.
     * @summary Approve a job
     * @param {WorkflowApiApproveJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiGenerated
     */
    public approveJob(requestParameters: WorkflowApiApproveJobRequest, options?: AxiosRequestConfig) {
        return WorkflowApiFp(this.configuration).approveJob(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Cancels a running workflow.
     * @summary Cancel a workflow
     * @param {WorkflowApiCancelWorkflowRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiGenerated
     */
    public cancelWorkflow(requestParameters: WorkflowApiCancelWorkflowRequest, options?: AxiosRequestConfig) {
        return WorkflowApiFp(this.configuration).cancelWorkflow(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns summary fields of a workflow by ID.
     * @summary Get a workflow
     * @param {WorkflowApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiGenerated
     */
    public getById(requestParameters: WorkflowApiGetByIdRequest, options?: AxiosRequestConfig) {
        return WorkflowApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a sequence of jobs for a workflow.
     * @summary Get a workflow\'s jobs
     * @param {WorkflowApiGetJobsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiGenerated
     */
    public getJobs(requestParameters: WorkflowApiGetJobsRequest, options?: AxiosRequestConfig) {
        return WorkflowApiFp(this.configuration).getJobs(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reruns a workflow.
     * @summary Rerun a workflow
     * @param {WorkflowApiRerunWorkflowRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiGenerated
     */
    public rerunWorkflow(requestParameters: WorkflowApiRerunWorkflowRequest, options?: AxiosRequestConfig) {
        return WorkflowApiFp(this.configuration).rerunWorkflow(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
