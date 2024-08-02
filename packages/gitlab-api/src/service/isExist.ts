import { AvatarUrl, Description, GroupId, Id, Name, Path, ProjectItemDetail, WebUrl } from "../types";
import request from "../util";

interface Params extends Name, GroupId {}

interface ProjectItem extends Id, Name, Path, AvatarUrl, 
  WebUrl, Description, ProjectItemDetail {}

const find = (list: ProjectItem[], target: string) => {
  return list.some((item: ProjectItem) => {
    return item.name === target;
  })
}

const service = async (PRIVATE_TOKEN: string, data: Params) => {
  const params = `${data.group_id}/search?scope=projects&search=${data.name}`;
  const response = await request<ProjectItem[]>({
    method: "GET",
    path: `groups/${params}`
  }, PRIVATE_TOKEN);
  
  return find(response, data.name);
}

export default service;