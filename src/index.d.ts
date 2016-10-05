import * as Promise from 'promise';

/**
 * namespace stashRestApi
 */
declare namespace stashRestApi {
    /**
     * @class Projects
     */
    export class Projects {
        /**
         * Get all projects.
         *
         * @param {*} [options]
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf Projects
         */
        get(options?: any): Promise.IThenable<string>;
    }

    /**
     * @class Repos
     */
    export class Repos {
        /**
         * Get all repos for a project.
         *
         * @param {string} projectKey
         * @param {*} [options]
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf Repos
         */
        get(projectKey: string, options?: any): Promise.IThenable<string>;

        /**
         * Get a repo for a project
         *
         * @param {string} projectKey
         * @param {string} repo
         * @param {*} [options]
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf Repos
         */
        getRepo(projectKey: string, repo: string, options?: any): Promise.IThenable<string>;

        /**
         * Browse a repo of a project.
         *
         * @param {string} projectKey
         * @param {string} repo
         * @param {*} [options]
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf Repos
         */
        browse(projectKey: string, repo: string, options?: any): Promise.IThenable<string>;

        /**
         * Get all repos for all projects.
         *
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf Repos
         */
        getCombined(projectKey?:string, option?:any): Promise.IThenable<string>;
    }

    /**
     * @class PullRequest
     */
    export class PullRequest {
        /**
         * Get all a pull request for a repo.
         *
         * @param {string} projectKey
         * @param {string} repo
         * @param {*} [option]
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf PullRequest
         */
        get(projectKey: string, repo: string, option?: any): Promise.IThenable<string>;

        /**
         * Get all pull requests for projects.
         *
         * @param {string} [projectKey]
         * @param {string} [repo]
         * @param {*} [option]
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf PullRequest
         */
        getCombined(projectKey?: string, repo?: string, option?: any): Promise.IThenable<string>;
    }

    export class Hooks {
        /**
         * Get all hooks for a repo.
         *
         * @param {string} projectKey
         * @param {string} repo
         * @param {*} [option]
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf Hooks
         */
        get(projectKey: string, repo: string, option?: any): Promise.IThenable<string>;

        /**
         * Get details for a single hook.
         *
         * @param {string} projectKey
         * @param {string} repo
         * @param {*} [option]
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf Hooks
         */
        getHook(projectKey: string, repo: string, option?: any): Promise.IThenable<string>;

        /**
         * Get all pre-recieve hooks.
         *
         * @param {string} projectKey
         * @param {string} repo
         * @param {*} [option]
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf Hooks
         */
        getPreReceive(projectKey: string, repo: string, option?: any): Promise.IThenable<string>;

        /**
         * Get all post-recieve hooks.
         *
         * @param {string} projectKey
         * @param {string} repo
         * @param {*} [option]
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf Hooks
         */
        getPostReceive(projectKey: string, repo: string, option?: any): Promise.IThenable<string>;

        /**
         * Enable hook for a repo of project
         *
         * @param {string} projectKey
         * @param {string} repo
         * @param {string} hookKey
         * @param {string} hookDetails
         * @returns {Promise.IThenable<string>}
         *
         * @memberOf Hooks
         */
        enable(projectKey: string, repo: string, hookKey: string, hookDetails:string): Promise.IThenable<string>;
    }
    /**
     * @class Client
     */
    export class Client {
        /**
         * Creates an instance of Client.
         *
         * @param {string} baseUrl
         * @param {string} user
         * @param {string} password
         *
         * @memberOf Client
         */
        constructor(baseUrl: string, user: string, password: string);

        /**
         * @type {Projects}
         * @memberOf Client
         */
        projects: Projects;


        /**
         * @type {PullRequest}
         * @memberOf Client
         */
        prs: PullRequest;

        /**
         * @type {Repos}
         * @memberOf Client
         */
        repos: Repos;

        /**
         * @type {Hooks}
         * @memberOf Client
         */
        hooks: Hooks;
    }
}
export = stashRestApi;
