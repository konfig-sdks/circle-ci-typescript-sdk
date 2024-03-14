/*
CircleCI API

This describes the resources that make up the CircleCI API v2.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about a project.
 * @export
 * @interface JobGetDetailsResponseProject
 */
export interface JobGetDetailsResponseProject {
    /**
     * 
     * @type {string}
     * @memberof JobGetDetailsResponseProject
     */
    'id': string;
    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     * @type {string}
     * @memberof JobGetDetailsResponseProject
     */
    'slug': string;
    /**
     * The name of the project
     * @type {string}
     * @memberof JobGetDetailsResponseProject
     */
    'name': string;
    /**
     * URL to the repository hosting the project\'s code
     * @type {string}
     * @memberof JobGetDetailsResponseProject
     */
    'external_url': string;
}

