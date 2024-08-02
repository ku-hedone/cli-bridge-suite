import { Accsee, Avatar, CreatedData, Id, IsMember, Slug, Features, FirstEvent, IsBookmarked, Platform } from "./index";

export interface BaseProjectItem extends Avatar, CreatedData, Accsee, Id, 
    Slug, IsMember, Features, FirstEvent, IsBookmarked, Platform {

}

interface InnerTeam extends Id , Slug {}

interface ProjectItem extends BaseProjectItem {
    teams: InnerTeam[];
    latestDeploys: string | null;
    team: InnerTeam;
}
/**
 * 项目列表
 */
export type Project = ProjectItem[];

export interface CreateProjectResult extends Slug, Avatar, Accsee, Id, Features, 
    IsMember, CreatedData, FirstEvent, IsBookmarked, Platform {
    status: string;
    color: string;
    isInternal: boolean;
    isPublic: boolean;
}
export interface CreateProjectExistsResult {
    detail: string;
}

type BrowserSdkVersion = `${number}.${number | string}`;

type URL = string;
/**
 * 年
 */
type YYYY = number;
/**
 * 月
 */
type MM = string;
/**
 * 日
 */
type DD = string;

type TIME = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 ;
/**
 * 时
 */
type hh = `${0}${TIME}` | `${1}${TIME}` | `${2}${Extract<TIME, 0 | 1 | 2 | 3>}`;
/**
 * 分
 */
type mm = `${0}${TIME}` | `${1}${TIME}` | `${2}${TIME}` | `${3}${TIME}` | `${4}${TIME}` | `${5}${TIME}`;
/**
 * 秒
 */
type ss = mm;
/**
 * 毫秒
 */
type sss = number;

type ISODate = `${YYYY}-${MM}-${DD}T${hh}:${mm}:${ss}.${sss}Z`;
interface ProjectClientKey {
    browserSdk: {
        choices: [
            [string, string],
            [BrowserSdkVersion, BrowserSdkVersion],
        ]
    },
    browserSdkVersion: BrowserSdkVersion,
    dateCreated: ISODate,
    dsn: {
        cdn: URL;
        csp: URL;
        minidump: URL; 
        public: URL; 
        secret: URL; 
        security: URL; 
    },
    id: string,
    isActive: boolean,
    label: string,
    name: string,
    projectId: number,
    public: string,
    rateLimit: null | string,
    secret: string,
}

export type ProjectClientKeys = ProjectClientKey[];
