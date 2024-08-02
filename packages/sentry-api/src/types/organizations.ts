import { Avatar, CreatedData, Id, Slug } from "./index";

/**
 * 组织列表细项
 */
interface OrganizationItem extends Id, Avatar, CreatedData, Slug {
    isEarlyAdopter: boolean,
    require2FA: boolean,
    status: {
        id: string,
        name: string,
    }    
}

/**
 * 组织列表
 */
export type OrganizationList = OrganizationItem[];