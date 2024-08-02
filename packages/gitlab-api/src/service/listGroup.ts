import type { AvatarUrl, Description, FullPath, Id, Name, ParentId, Path, WebUrl } from "../types";
import request from "../util";

export interface GroupListItem extends Id, WebUrl, Name, Path, 
  AvatarUrl, FullPath, ParentId, Description {
  visibility: string,
  share_with_group_lock: boolean,
  require_two_factor_authentication: boolean,
  two_factor_grace_period: number,
  project_creation_level: string,
  auto_devops_enabled: null,
  subgroup_creation_level: string,
  emails_disabled: null,
  mentions_disabled: null,
  lfs_enabled: boolean,
  default_branch_protection: number,
  request_access_enabled: boolean,
  full_name: string,
}


const service = async (PRIVATE_TOKEN: string) => {
  const response = await request<GroupListItem[]>({
    method: "GET",
    path: "groups"
  }, PRIVATE_TOKEN)
  return response;
}

export default service;
