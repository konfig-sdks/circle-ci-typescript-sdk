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
import { Collaboration } from '../models';
// @ts-ignore
import { UserGetInformationResponse } from '../models';
// @ts-ignore
import { UserGetInformationdefaultResponse } from '../models';
// @ts-ignore
import { UserGetUserInformationResponse } from '../models';
// @ts-ignore
import { UserGetUserInformationdefaultResponse } from '../models';
// @ts-ignore
import { UserListCollaborationsdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Provides information about the user that is currently signed in.
         * @summary User Information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInformation: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/me`;
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
                pathTemplate: '/me',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provides information about the user with the given ID.
         * @summary User Information
         * @param {string} id The unique ID of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInformation: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUserInformation', 'id', id)
            const localVarPath = `/user/{id}`
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
                pathTemplate: '/user/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provides the set of organizations of which a user is a member or a collaborator.  The set of organizations that a user can collaborate on is composed of:  * Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub) * The parent organization of repository that the user can collaborate on, but is not necessarily a member of * The organization of the current user\'s account
         * @summary Collaborations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCollaborations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/me/collaborations`;
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
                pathTemplate: '/me/collaborations',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Provides information about the user that is currently signed in.
         * @summary User Information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInformation(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserGetInformationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInformation(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Provides information about the user with the given ID.
         * @summary User Information
         * @param {UserApiGetUserInformationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserInformation(requestParameters: UserApiGetUserInformationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserGetUserInformationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserInformation(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Provides the set of organizations of which a user is a member or a collaborator.  The set of organizations that a user can collaborate on is composed of:  * Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub) * The parent organization of repository that the user can collaborate on, but is not necessarily a member of * The organization of the current user\'s account
         * @summary Collaborations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCollaborations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Collaboration>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCollaborations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Provides information about the user that is currently signed in.
         * @summary User Information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInformation(options?: AxiosRequestConfig): AxiosPromise<UserGetInformationResponse> {
            return localVarFp.getInformation(options).then((request) => request(axios, basePath));
        },
        /**
         * Provides information about the user with the given ID.
         * @summary User Information
         * @param {UserApiGetUserInformationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInformation(requestParameters: UserApiGetUserInformationRequest, options?: AxiosRequestConfig): AxiosPromise<UserGetUserInformationResponse> {
            return localVarFp.getUserInformation(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Provides the set of organizations of which a user is a member or a collaborator.  The set of organizations that a user can collaborate on is composed of:  * Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub) * The parent organization of repository that the user can collaborate on, but is not necessarily a member of * The organization of the current user\'s account
         * @summary Collaborations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCollaborations(options?: AxiosRequestConfig): AxiosPromise<Array<Collaboration>> {
            return localVarFp.listCollaborations(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getUserInformation operation in UserApi.
 * @export
 * @interface UserApiGetUserInformationRequest
 */
export type UserApiGetUserInformationRequest = {
    
    /**
    * The unique ID of the user.
    * @type {string}
    * @memberof UserApiGetUserInformation
    */
    readonly id: string
    
}

/**
 * UserApiGenerated - object-oriented interface
 * @export
 * @class UserApiGenerated
 * @extends {BaseAPI}
 */
export class UserApiGenerated extends BaseAPI {
    /**
     * Provides information about the user that is currently signed in.
     * @summary User Information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public getInformation(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getInformation(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Provides information about the user with the given ID.
     * @summary User Information
     * @param {UserApiGetUserInformationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public getUserInformation(requestParameters: UserApiGetUserInformationRequest, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserInformation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Provides the set of organizations of which a user is a member or a collaborator.  The set of organizations that a user can collaborate on is composed of:  * Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub) * The parent organization of repository that the user can collaborate on, but is not necessarily a member of * The organization of the current user\'s account
     * @summary Collaborations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public listCollaborations(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).listCollaborations(options).then((request) => request(this.axios, this.basePath));
    }
}
