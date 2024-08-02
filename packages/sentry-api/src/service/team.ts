import request from '../util/index';
import { CreateProjectExistsResult, CreateProjectResult, Project } from 'src/types/project';

/**
 * list an Team's Projects
 * 
 * 根据 privateToken 和 organization_slug 获取 所有组织
 * 
 * @param privateToken auth token which you has registered from sentry
 * @param organization_slug organization slug
 * @returns 
 */
export const listTeamProjects = (privateToken: string, query: {
    organization_slug: string,
    team_slug: string
}) =>
    request<Project>({
        method: 'GET',
        path: `teams/${query.organization_slug}/${query.team_slug}/projects/`
    }, privateToken)

const isExists = (res: any): res is CreateProjectExistsResult => {
    if (res.detail) {
        return true;
    }
    return false
}

type CreateNewProjectResponse<T extends boolean = false> = [T] extends [true] ? {
    status: T,
    info: CreateProjectResult
} : {
    status: T
}

export const createNewProject = async (privateToken: string, query: {
    organization_slug: string,
    team_slug: string
}, data: {
    name: string,
    slug?: string
    }): Promise<CreateNewProjectResponse<true> | CreateNewProjectResponse> => {
    try {
        if (!data.slug) {
            data.slug = data.name.toLocaleLowerCase();
        }
        const res = await request<CreateProjectResult | CreateProjectExistsResult>({
            method: 'POST',
            path: `teams/${query.organization_slug}/${query.team_slug}/projects/`
        }, privateToken, data);
        if (isExists(res)) {
            return {
                status: false
            }
        } else {
            return {
                status: true,
                info: res
            }
        }
    } catch (err) {
        return {
            status: false
        }
    }
}