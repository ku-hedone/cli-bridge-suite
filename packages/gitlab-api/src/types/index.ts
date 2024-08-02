export interface GroupId {
    /**
     * 组id
     */
    group_id: string;
}
export interface ProjectId {
    /**
     * 项目id
     */
    project_id: string;
}
export interface UserId {
    /**
     * 用户id
     */
    user_id: string;
}

export enum GROUP_ACCESS_LEVEL {
    NO_ACCESS = 0,
    Guest = 10,
    Reporter = 20,
    Developer = 30,
    Maintainer = 40,
    Owner = 50, // Only valid to set for groups
}

export enum PROJECT_ACCESS_LEVEL {
    NO_ACCESS = 0,
    Guest = 10,
    Reporter = 20,
    Developer = 30,
    Maintainer = 40,
}

export interface AccessLevel<T> {
    /**
     * 权限等级
     */
    access_level: T;
}

export interface Id {
    id: number;
}

export interface Name {
    name: string;
}

export interface UserName {
    username: string;
}

export interface Password {
    password: string;
}

export interface Email {
    email: string;
}

export interface Path {
    path: string;
}

export interface NameSpaceId {
    namespace_id: string;
}

export interface AvatarUrl {
    avatar_url: string | null;
}

export interface WebUrl {
    web_url: string | null;
}

export interface Kind {
    kind: string | null;
}

export interface FullPath {
    full_path: string | null;
}

export interface ParentId {
    parent_id: string | null;
}

export interface NameSpace extends Id, Name, Path,
    AvatarUrl, WebUrl, Kind, FullPath, ParentId {}

export interface Description {
    description: null | string;
}

export interface ProjectItemDetail {
    created_at: string;
    tag_list: string[];
    name_with_namespace: string;
    path_with_namespace: string;
    ssh_url_to_repo: string;
    http_url_to_repo: string;
    readme_url: string | null;
    star_count: number;
    forks_count: number;
    last_activity_at: string;
    namespace: NameSpace;
}