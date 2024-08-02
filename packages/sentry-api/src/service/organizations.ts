import request from '../util/index';
import { OrganizationList } from '../types/organizations';
import { Teams } from '../types/team';

/**
 * listOrganizations
 * 
 * 根据 privateToken 获取 所有组织
 * 
 * @param privateToken auth token which you has registered from sentry
 * @returns 
 */
export const listOrganizations = (privateToken: string, config?: { owner: boolean }) => {
    return request<OrganizationList>({
        method: 'GET',
        path: `organizations/?owner=${config ? config.owner : false}`
    }, privateToken)
}

/**
 * listLocalUserOrganizations
 * 
 * 根据 privateToken 获取当前用户 拥有的所有组织
 * 
 * @param privateToken auth token which you has registered from sentry
 * @returns 
 */
export const listLocalUserOwnerOrganizations = (privateToken: string) => {
    return listOrganizations(privateToken, { owner: true })
}

/**
 * list an Organization's Teams
 * 
 * 根据 privateToken 和 organization_slug 获取 所有组织
 * 
 * @param privateToken auth token which you has registered from sentry
 * @param organization_slug organization title
 * @returns 
 */
export const listOrganizationTeams = (privateToken: string, organization_slug: string) =>
    request<Teams>({
        method: 'GET',
        path: `organizations/${organization_slug}/teams/`
    }, privateToken)
