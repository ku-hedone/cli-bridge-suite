import { Accsee, Avatar, CreatedData, Id, IsMember, Slug } from "./index";
import { BaseProjectItem } from './project'


interface InnerProjectItem extends BaseProjectItem {
    color: string;
    status: string;
    isPublic: boolean;
    isInternal: boolean;
}

interface TeamItem extends Avatar, Id, CreatedData, Slug, Accsee, IsMember {
    isPending: boolean;
    memberCount: number;
    projects: InnerProjectItem[]
}
/**
 * 团队列表
 */
export type Teams = TeamItem[];