import request from '../util/index';
import { ProjectClientKeys } from '../types/project';

/**
 * get Project Client Keys
 * 
 * 根据 organization_slug 和 project_slug 获取 client key
 * 
 * @param privateToken auth token which you has registered from sentry
 * @param query 定位 project 的 参数
 * @returns 
 */
export const getProjectClientKey = async (privateToken: string, query: {
    organization_slug: string,
    project_slug: string
}) => await request<ProjectClientKeys>({
    method: 'GET',
    path: `projects/${query.organization_slug}/${query.project_slug}/keys/`
}, privateToken);


